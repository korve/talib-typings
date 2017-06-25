const util = require("util");
const talib = require("talib");

const typeMappings = {
	real: "number",
	integer_range: "number",
	integer: "number",
	price: "number",
	real_range: "number",
	integer_list: "number[]"
};

process.stdout.write("/* tslint:disable align class-name no-namespace unified-signatures max-line-length */\n");
process.stdout.write("declare namespace talib {");

process.stdout.write(`
	interface IInput {
        startIdx?: number;
        endIdx?: number;
        high?: number[];
        low?: number[];
        open?: number[];
        close?: number[];
    }
`.replace("\t", "    "));

let interfaces = [];
let functions = [];

talib.functions.forEach((fn) => {
	let inputs = fn.inputs
		.map((inp) => `${inp.name}: ${typeMappings[ inp.type ] || inp.type}`);
	let outputs = fn.outputs
		.map((out) => `${out.name}: ${typeMappings[ out.type ] || out.type}`);

	if (fn.optInputs) {
		inputs = inputs.concat(fn.optInputs.map((optInp) => {
			return `${optInp.name}?: ${typeMappings[ optInp.type ] || optInp.type}`;
		}));
	}

	interfaces.push(`
    interface I${fn.name}Input extends IInput {
        name: "${fn.name}";
        ${inputs.join(";\n        ").trim("    ")};
    }`.replace("\t", "    "));
	functions.push(`function execute(input: I${fn.name}Input, callback: (err: Error, ${outputs.join(", ")}) => void): void;
	`.replace("\t", "    "));
});

process.stdout.write(interfaces.join("") + "\n\n    " + functions.join("").trim());

process.stdout.write("\n}\n");
process.stdout.write("/* tslint:enable align class-name no-namespace unified-signatures max-line-length */\n");
