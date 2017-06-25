/* tslint:disable align class-name no-namespace unified-signatures max-line-length */
declare namespace talib {
    interface IInput {
        startIdx?: number;
        endIdx?: number;
        high?: number[];
        low?: number[];
        open?: number[];
        close?: number[];
    }

    interface IADDInput extends IInput {
        name: "ADD";
        inReal0: number;
        inReal1: number;
    }
    interface IDIVInput extends IInput {
        name: "DIV";
        inReal0: number;
        inReal1: number;
    }
    interface IMAXInput extends IInput {
        name: "MAX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMAXINDEXInput extends IInput {
        name: "MAXINDEX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMINInput extends IInput {
        name: "MIN";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMININDEXInput extends IInput {
        name: "MININDEX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMINMAXInput extends IInput {
        name: "MINMAX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMINMAXINDEXInput extends IInput {
        name: "MINMAXINDEX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMULTInput extends IInput {
        name: "MULT";
        inReal0: number;
        inReal1: number;
    }
    interface ISUBInput extends IInput {
        name: "SUB";
        inReal0: number;
        inReal1: number;
    }
    interface ISUMInput extends IInput {
        name: "SUM";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IACOSInput extends IInput {
        name: "ACOS";
        inReal: number;
    }
    interface IASINInput extends IInput {
        name: "ASIN";
        inReal: number;
    }
    interface IATANInput extends IInput {
        name: "ATAN";
        inReal: number;
    }
    interface ICEILInput extends IInput {
        name: "CEIL";
        inReal: number;
    }
    interface ICOSInput extends IInput {
        name: "COS";
        inReal: number;
    }
    interface ICOSHInput extends IInput {
        name: "COSH";
        inReal: number;
    }
    interface IEXPInput extends IInput {
        name: "EXP";
        inReal: number;
    }
    interface IFLOORInput extends IInput {
        name: "FLOOR";
        inReal: number;
    }
    interface ILNInput extends IInput {
        name: "LN";
        inReal: number;
    }
    interface ILOG10Input extends IInput {
        name: "LOG10";
        inReal: number;
    }
    interface ISINInput extends IInput {
        name: "SIN";
        inReal: number;
    }
    interface ISINHInput extends IInput {
        name: "SINH";
        inReal: number;
    }
    interface ISQRTInput extends IInput {
        name: "SQRT";
        inReal: number;
    }
    interface ITANInput extends IInput {
        name: "TAN";
        inReal: number;
    }
    interface ITANHInput extends IInput {
        name: "TANH";
        inReal: number;
    }
    interface IACCBANDSInput extends IInput {
        name: "ACCBANDS";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IBBANDSInput extends IInput {
        name: "BBANDS";
        inReal: number;
        optInTimePeriod?: number;
        optInNbDevUp?: number;
        optInNbDevDn?: number;
        optInMAType?: number[];
    }
    interface IDEMAInput extends IInput {
        name: "DEMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IEMAInput extends IInput {
        name: "EMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IHT_TRENDLINEInput extends IInput {
        name: "HT_TRENDLINE";
        inReal: number;
    }
    interface IKAMAInput extends IInput {
        name: "KAMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMAInput extends IInput {
        name: "MA";
        inReal: number;
        optInTimePeriod?: number;
        optInMAType?: number[];
    }
    interface IMAMAInput extends IInput {
        name: "MAMA";
        inReal: number;
        optInFastLimit?: number;
        optInSlowLimit?: number;
    }
    interface IMAVPInput extends IInput {
        name: "MAVP";
        inReal: number;
        inPeriods: number;
        optInMinPeriod?: number;
        optInMaxPeriod?: number;
        optInMAType?: number[];
    }
    interface IMIDPOINTInput extends IInput {
        name: "MIDPOINT";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMIDPRICEInput extends IInput {
        name: "MIDPRICE";
        inPriceHL: number;
        optInTimePeriod?: number;
    }
    interface ISARInput extends IInput {
        name: "SAR";
        inPriceHL: number;
        optInAcceleration?: number;
        optInMaximum?: number;
    }
    interface ISAREXTInput extends IInput {
        name: "SAREXT";
        inPriceHL: number;
        optInStartValue?: number;
        optInOffsetOnReverse?: number;
        optInAccelerationInitLong?: number;
        optInAccelerationLong?: number;
        optInAccelerationMaxLong?: number;
        optInAccelerationInitShort?: number;
        optInAccelerationShort?: number;
        optInAccelerationMaxShort?: number;
    }
    interface ISMAInput extends IInput {
        name: "SMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IT3Input extends IInput {
        name: "T3";
        inReal: number;
        optInTimePeriod?: number;
        optInVFactor?: number;
    }
    interface ITEMAInput extends IInput {
        name: "TEMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ITRIMAInput extends IInput {
        name: "TRIMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IWMAInput extends IInput {
        name: "WMA";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IATRInput extends IInput {
        name: "ATR";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface INATRInput extends IInput {
        name: "NATR";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface ITRANGEInput extends IInput {
        name: "TRANGE";
        inPriceHLC: number;
    }
    interface IADXInput extends IInput {
        name: "ADX";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IADXRInput extends IInput {
        name: "ADXR";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IAPOInput extends IInput {
        name: "APO";
        inReal: number;
        optInFastPeriod?: number;
        optInSlowPeriod?: number;
        optInMAType?: number[];
    }
    interface IAROONInput extends IInput {
        name: "AROON";
        inPriceHL: number;
        optInTimePeriod?: number;
    }
    interface IAROONOSCInput extends IInput {
        name: "AROONOSC";
        inPriceHL: number;
        optInTimePeriod?: number;
    }
    interface IBOPInput extends IInput {
        name: "BOP";
        inPriceOHLC: number;
    }
    interface ICCIInput extends IInput {
        name: "CCI";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface ICMOInput extends IInput {
        name: "CMO";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IDXInput extends IInput {
        name: "DX";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IIMIInput extends IInput {
        name: "IMI";
        inPriceOC: number;
        optInTimePeriod?: number;
    }
    interface IMACDInput extends IInput {
        name: "MACD";
        inReal: number;
        optInFastPeriod?: number;
        optInSlowPeriod?: number;
        optInSignalPeriod?: number;
    }
    interface IMACDEXTInput extends IInput {
        name: "MACDEXT";
        inReal: number;
        optInFastPeriod?: number;
        optInFastMAType?: number[];
        optInSlowPeriod?: number;
        optInSlowMAType?: number[];
        optInSignalPeriod?: number;
        optInSignalMAType?: number[];
    }
    interface IMACDFIXInput extends IInput {
        name: "MACDFIX";
        inReal: number;
        optInSignalPeriod?: number;
    }
    interface IMFIInput extends IInput {
        name: "MFI";
        inPriceHLCV: number;
        optInTimePeriod?: number;
    }
    interface IMINUS_DIInput extends IInput {
        name: "MINUS_DI";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IMINUS_DMInput extends IInput {
        name: "MINUS_DM";
        inPriceHL: number;
        optInTimePeriod?: number;
    }
    interface IMOMInput extends IInput {
        name: "MOM";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IPLUS_DIInput extends IInput {
        name: "PLUS_DI";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IPLUS_DMInput extends IInput {
        name: "PLUS_DM";
        inPriceHL: number;
        optInTimePeriod?: number;
    }
    interface IPPOInput extends IInput {
        name: "PPO";
        inReal: number;
        optInFastPeriod?: number;
        optInSlowPeriod?: number;
        optInMAType?: number[];
    }
    interface IROCInput extends IInput {
        name: "ROC";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IROCPInput extends IInput {
        name: "ROCP";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IROCRInput extends IInput {
        name: "ROCR";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IROCR100Input extends IInput {
        name: "ROCR100";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IRSIInput extends IInput {
        name: "RSI";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ISTOCHInput extends IInput {
        name: "STOCH";
        inPriceHLC: number;
        optInFastK_Period?: number;
        optInSlowK_Period?: number;
        optInSlowK_MAType?: number[];
        optInSlowD_Period?: number;
        optInSlowD_MAType?: number[];
    }
    interface ISTOCHFInput extends IInput {
        name: "STOCHF";
        inPriceHLC: number;
        optInFastK_Period?: number;
        optInFastD_Period?: number;
        optInFastD_MAType?: number[];
    }
    interface ISTOCHRSIInput extends IInput {
        name: "STOCHRSI";
        inReal: number;
        optInTimePeriod?: number;
        optInFastK_Period?: number;
        optInFastD_Period?: number;
        optInFastD_MAType?: number[];
    }
    interface ITRIXInput extends IInput {
        name: "TRIX";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IULTOSCInput extends IInput {
        name: "ULTOSC";
        inPriceHLC: number;
        optInTimePeriod1?: number;
        optInTimePeriod2?: number;
        optInTimePeriod3?: number;
    }
    interface IWILLRInput extends IInput {
        name: "WILLR";
        inPriceHLC: number;
        optInTimePeriod?: number;
    }
    interface IHT_DCPERIODInput extends IInput {
        name: "HT_DCPERIOD";
        inReal: number;
    }
    interface IHT_DCPHASEInput extends IInput {
        name: "HT_DCPHASE";
        inReal: number;
    }
    interface IHT_PHASORInput extends IInput {
        name: "HT_PHASOR";
        inReal: number;
    }
    interface IHT_SINEInput extends IInput {
        name: "HT_SINE";
        inReal: number;
    }
    interface IHT_TRENDMODEInput extends IInput {
        name: "HT_TRENDMODE";
        inReal: number;
    }
    interface IADInput extends IInput {
        name: "AD";
        inPriceHLCV: number;
    }
    interface IADOSCInput extends IInput {
        name: "ADOSC";
        inPriceHLCV: number;
        optInFastPeriod?: number;
        optInSlowPeriod?: number;
    }
    interface IOBVInput extends IInput {
        name: "OBV";
        inReal: number;
        inPriceV: number;
    }
    interface ICDL2CROWSInput extends IInput {
        name: "CDL2CROWS";
        inPriceOHLC: number;
    }
    interface ICDL3BLACKCROWSInput extends IInput {
        name: "CDL3BLACKCROWS";
        inPriceOHLC: number;
    }
    interface ICDL3INSIDEInput extends IInput {
        name: "CDL3INSIDE";
        inPriceOHLC: number;
    }
    interface ICDL3LINESTRIKEInput extends IInput {
        name: "CDL3LINESTRIKE";
        inPriceOHLC: number;
    }
    interface ICDL3OUTSIDEInput extends IInput {
        name: "CDL3OUTSIDE";
        inPriceOHLC: number;
    }
    interface ICDL3STARSINSOUTHInput extends IInput {
        name: "CDL3STARSINSOUTH";
        inPriceOHLC: number;
    }
    interface ICDL3WHITESOLDIERSInput extends IInput {
        name: "CDL3WHITESOLDIERS";
        inPriceOHLC: number;
    }
    interface ICDLABANDONEDBABYInput extends IInput {
        name: "CDLABANDONEDBABY";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLADVANCEBLOCKInput extends IInput {
        name: "CDLADVANCEBLOCK";
        inPriceOHLC: number;
    }
    interface ICDLBELTHOLDInput extends IInput {
        name: "CDLBELTHOLD";
        inPriceOHLC: number;
    }
    interface ICDLBREAKAWAYInput extends IInput {
        name: "CDLBREAKAWAY";
        inPriceOHLC: number;
    }
    interface ICDLCLOSINGMARUBOZUInput extends IInput {
        name: "CDLCLOSINGMARUBOZU";
        inPriceOHLC: number;
    }
    interface ICDLCONCEALBABYSWALLInput extends IInput {
        name: "CDLCONCEALBABYSWALL";
        inPriceOHLC: number;
    }
    interface ICDLCOUNTERATTACKInput extends IInput {
        name: "CDLCOUNTERATTACK";
        inPriceOHLC: number;
    }
    interface ICDLDARKCLOUDCOVERInput extends IInput {
        name: "CDLDARKCLOUDCOVER";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLDOJIInput extends IInput {
        name: "CDLDOJI";
        inPriceOHLC: number;
    }
    interface ICDLDOJISTARInput extends IInput {
        name: "CDLDOJISTAR";
        inPriceOHLC: number;
    }
    interface ICDLDRAGONFLYDOJIInput extends IInput {
        name: "CDLDRAGONFLYDOJI";
        inPriceOHLC: number;
    }
    interface ICDLENGULFINGInput extends IInput {
        name: "CDLENGULFING";
        inPriceOHLC: number;
    }
    interface ICDLEVENINGDOJISTARInput extends IInput {
        name: "CDLEVENINGDOJISTAR";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLEVENINGSTARInput extends IInput {
        name: "CDLEVENINGSTAR";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLGAPSIDESIDEWHITEInput extends IInput {
        name: "CDLGAPSIDESIDEWHITE";
        inPriceOHLC: number;
    }
    interface ICDLGRAVESTONEDOJIInput extends IInput {
        name: "CDLGRAVESTONEDOJI";
        inPriceOHLC: number;
    }
    interface ICDLHAMMERInput extends IInput {
        name: "CDLHAMMER";
        inPriceOHLC: number;
    }
    interface ICDLHANGINGMANInput extends IInput {
        name: "CDLHANGINGMAN";
        inPriceOHLC: number;
    }
    interface ICDLHARAMIInput extends IInput {
        name: "CDLHARAMI";
        inPriceOHLC: number;
    }
    interface ICDLHARAMICROSSInput extends IInput {
        name: "CDLHARAMICROSS";
        inPriceOHLC: number;
    }
    interface ICDLHIGHWAVEInput extends IInput {
        name: "CDLHIGHWAVE";
        inPriceOHLC: number;
    }
    interface ICDLHIKKAKEInput extends IInput {
        name: "CDLHIKKAKE";
        inPriceOHLC: number;
    }
    interface ICDLHIKKAKEMODInput extends IInput {
        name: "CDLHIKKAKEMOD";
        inPriceOHLC: number;
    }
    interface ICDLHOMINGPIGEONInput extends IInput {
        name: "CDLHOMINGPIGEON";
        inPriceOHLC: number;
    }
    interface ICDLIDENTICAL3CROWSInput extends IInput {
        name: "CDLIDENTICAL3CROWS";
        inPriceOHLC: number;
    }
    interface ICDLINNECKInput extends IInput {
        name: "CDLINNECK";
        inPriceOHLC: number;
    }
    interface ICDLINVERTEDHAMMERInput extends IInput {
        name: "CDLINVERTEDHAMMER";
        inPriceOHLC: number;
    }
    interface ICDLKICKINGInput extends IInput {
        name: "CDLKICKING";
        inPriceOHLC: number;
    }
    interface ICDLKICKINGBYLENGTHInput extends IInput {
        name: "CDLKICKINGBYLENGTH";
        inPriceOHLC: number;
    }
    interface ICDLLADDERBOTTOMInput extends IInput {
        name: "CDLLADDERBOTTOM";
        inPriceOHLC: number;
    }
    interface ICDLLONGLEGGEDDOJIInput extends IInput {
        name: "CDLLONGLEGGEDDOJI";
        inPriceOHLC: number;
    }
    interface ICDLLONGLINEInput extends IInput {
        name: "CDLLONGLINE";
        inPriceOHLC: number;
    }
    interface ICDLMARUBOZUInput extends IInput {
        name: "CDLMARUBOZU";
        inPriceOHLC: number;
    }
    interface ICDLMATCHINGLOWInput extends IInput {
        name: "CDLMATCHINGLOW";
        inPriceOHLC: number;
    }
    interface ICDLMATHOLDInput extends IInput {
        name: "CDLMATHOLD";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLMORNINGDOJISTARInput extends IInput {
        name: "CDLMORNINGDOJISTAR";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLMORNINGSTARInput extends IInput {
        name: "CDLMORNINGSTAR";
        inPriceOHLC: number;
        optInPenetration?: number;
    }
    interface ICDLONNECKInput extends IInput {
        name: "CDLONNECK";
        inPriceOHLC: number;
    }
    interface ICDLPIERCINGInput extends IInput {
        name: "CDLPIERCING";
        inPriceOHLC: number;
    }
    interface ICDLRICKSHAWMANInput extends IInput {
        name: "CDLRICKSHAWMAN";
        inPriceOHLC: number;
    }
    interface ICDLRISEFALL3METHODSInput extends IInput {
        name: "CDLRISEFALL3METHODS";
        inPriceOHLC: number;
    }
    interface ICDLSEPARATINGLINESInput extends IInput {
        name: "CDLSEPARATINGLINES";
        inPriceOHLC: number;
    }
    interface ICDLSHOOTINGSTARInput extends IInput {
        name: "CDLSHOOTINGSTAR";
        inPriceOHLC: number;
    }
    interface ICDLSHORTLINEInput extends IInput {
        name: "CDLSHORTLINE";
        inPriceOHLC: number;
    }
    interface ICDLSPINNINGTOPInput extends IInput {
        name: "CDLSPINNINGTOP";
        inPriceOHLC: number;
    }
    interface ICDLSTALLEDPATTERNInput extends IInput {
        name: "CDLSTALLEDPATTERN";
        inPriceOHLC: number;
    }
    interface ICDLSTICKSANDWICHInput extends IInput {
        name: "CDLSTICKSANDWICH";
        inPriceOHLC: number;
    }
    interface ICDLTAKURIInput extends IInput {
        name: "CDLTAKURI";
        inPriceOHLC: number;
    }
    interface ICDLTASUKIGAPInput extends IInput {
        name: "CDLTASUKIGAP";
        inPriceOHLC: number;
    }
    interface ICDLTHRUSTINGInput extends IInput {
        name: "CDLTHRUSTING";
        inPriceOHLC: number;
    }
    interface ICDLTRISTARInput extends IInput {
        name: "CDLTRISTAR";
        inPriceOHLC: number;
    }
    interface ICDLUNIQUE3RIVERInput extends IInput {
        name: "CDLUNIQUE3RIVER";
        inPriceOHLC: number;
    }
    interface ICDLUPSIDEGAP2CROWSInput extends IInput {
        name: "CDLUPSIDEGAP2CROWS";
        inPriceOHLC: number;
    }
    interface ICDLXSIDEGAP3METHODSInput extends IInput {
        name: "CDLXSIDEGAP3METHODS";
        inPriceOHLC: number;
    }
    interface IBETAInput extends IInput {
        name: "BETA";
        inReal0: number;
        inReal1: number;
        optInTimePeriod?: number;
    }
    interface ICORRELInput extends IInput {
        name: "CORREL";
        inReal0: number;
        inReal1: number;
        optInTimePeriod?: number;
    }
    interface ILINEARREGInput extends IInput {
        name: "LINEARREG";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ILINEARREG_ANGLEInput extends IInput {
        name: "LINEARREG_ANGLE";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ILINEARREG_INTERCEPTInput extends IInput {
        name: "LINEARREG_INTERCEPT";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ILINEARREG_SLOPEInput extends IInput {
        name: "LINEARREG_SLOPE";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface ISTDDEVInput extends IInput {
        name: "STDDEV";
        inReal: number;
        optInTimePeriod?: number;
        optInNbDev?: number;
    }
    interface ITSFInput extends IInput {
        name: "TSF";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IVARInput extends IInput {
        name: "VAR";
        inReal: number;
        optInTimePeriod?: number;
        optInNbDev?: number;
    }
    interface IAVGPRICEInput extends IInput {
        name: "AVGPRICE";
        inPriceOHLC: number;
    }
    interface IAVGDEVInput extends IInput {
        name: "AVGDEV";
        inReal: number;
        optInTimePeriod?: number;
    }
    interface IMEDPRICEInput extends IInput {
        name: "MEDPRICE";
        inPriceHL: number;
    }
    interface ITYPPRICEInput extends IInput {
        name: "TYPPRICE";
        inPriceHLC: number;
    }
    interface IWCLPRICEInput extends IInput {
        name: "WCLPRICE";
        inPriceHLC: number;
    }

    function execute(input: IADDInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IDIVInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMAXInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMAXINDEXInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: IMINInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMININDEXInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: IMINMAXInput, callback: (err: Error, outMin: number, outMax: number) => void): void;
    function execute(input: IMINMAXINDEXInput, callback: (err: Error, outMinIdx: number, outMaxIdx: number) => void): void;
    function execute(input: IMULTInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISUBInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISUMInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IACOSInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IASINInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IATANInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICEILInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICOSInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICOSHInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IEXPInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IFLOORInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILNInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILOG10Input, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISINInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISINHInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISQRTInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITANInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITANHInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IACCBANDSInput, callback: (err: Error, outRealUpperBand: number, outRealMiddleBand: number, outRealLowerBand: number) => void): void;
    function execute(input: IBBANDSInput, callback: (err: Error, outRealUpperBand: number, outRealMiddleBand: number, outRealLowerBand: number) => void): void;
    function execute(input: IDEMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IEMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IHT_TRENDLINEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IKAMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMAMAInput, callback: (err: Error, outMAMA: number, outFAMA: number) => void): void;
    function execute(input: IMAVPInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMIDPOINTInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMIDPRICEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISARInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISAREXTInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IT3Input, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITEMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITRIMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IWMAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IATRInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: INATRInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITRANGEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IADXInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IADXRInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IAPOInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IAROONInput, callback: (err: Error, outAroonDown: number, outAroonUp: number) => void): void;
    function execute(input: IAROONOSCInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IBOPInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICCIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICMOInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IDXInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IIMIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMACDInput, callback: (err: Error, outMACD: number, outMACDSignal: number, outMACDHist: number) => void): void;
    function execute(input: IMACDEXTInput, callback: (err: Error, outMACD: number, outMACDSignal: number, outMACDHist: number) => void): void;
    function execute(input: IMACDFIXInput, callback: (err: Error, outMACD: number, outMACDSignal: number, outMACDHist: number) => void): void;
    function execute(input: IMFIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMINUS_DIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMINUS_DMInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMOMInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IPLUS_DIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IPLUS_DMInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IPPOInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IROCInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IROCPInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IROCRInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IROCR100Input, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IRSIInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISTOCHInput, callback: (err: Error, outSlowK: number, outSlowD: number) => void): void;
    function execute(input: ISTOCHFInput, callback: (err: Error, outFastK: number, outFastD: number) => void): void;
    function execute(input: ISTOCHRSIInput, callback: (err: Error, outFastK: number, outFastD: number) => void): void;
    function execute(input: ITRIXInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IULTOSCInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IWILLRInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IHT_DCPERIODInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IHT_DCPHASEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IHT_PHASORInput, callback: (err: Error, outInPhase: number, outQuadrature: number) => void): void;
    function execute(input: IHT_SINEInput, callback: (err: Error, outSine: number, outLeadSine: number) => void): void;
    function execute(input: IHT_TRENDMODEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: IADInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IADOSCInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IOBVInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICDL2CROWSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3BLACKCROWSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3INSIDEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3LINESTRIKEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3OUTSIDEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3STARSINSOUTHInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDL3WHITESOLDIERSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLABANDONEDBABYInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLADVANCEBLOCKInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLBELTHOLDInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLBREAKAWAYInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLCLOSINGMARUBOZUInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLCONCEALBABYSWALLInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLCOUNTERATTACKInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLDARKCLOUDCOVERInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLDOJIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLDOJISTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLDRAGONFLYDOJIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLENGULFINGInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLEVENINGDOJISTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLEVENINGSTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLGAPSIDESIDEWHITEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLGRAVESTONEDOJIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHAMMERInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHANGINGMANInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHARAMIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHARAMICROSSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHIGHWAVEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHIKKAKEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHIKKAKEMODInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLHOMINGPIGEONInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLIDENTICAL3CROWSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLINNECKInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLINVERTEDHAMMERInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLKICKINGInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLKICKINGBYLENGTHInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLLADDERBOTTOMInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLLONGLEGGEDDOJIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLLONGLINEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLMARUBOZUInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLMATCHINGLOWInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLMATHOLDInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLMORNINGDOJISTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLMORNINGSTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLONNECKInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLPIERCINGInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLRICKSHAWMANInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLRISEFALL3METHODSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSEPARATINGLINESInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSHOOTINGSTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSHORTLINEInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSPINNINGTOPInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSTALLEDPATTERNInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLSTICKSANDWICHInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLTAKURIInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLTASUKIGAPInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLTHRUSTINGInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLTRISTARInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLUNIQUE3RIVERInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLUPSIDEGAP2CROWSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: ICDLXSIDEGAP3METHODSInput, callback: (err: Error, outInteger: number) => void): void;
    function execute(input: IBETAInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ICORRELInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILINEARREGInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILINEARREG_ANGLEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILINEARREG_INTERCEPTInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ILINEARREG_SLOPEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ISTDDEVInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITSFInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IVARInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IAVGPRICEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IAVGDEVInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IMEDPRICEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: ITYPPRICEInput, callback: (err: Error, outReal: number) => void): void;
    function execute(input: IWCLPRICEInput, callback: (err: Error, outReal: number) => void): void;
}
/* tslint:enable align class-name no-namespace unified-signatures max-line-length */
