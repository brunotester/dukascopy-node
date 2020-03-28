import { OptionalKeys } from 'utility-types';

export interface InstrumentMetaData {
  name: string;
  description: string;
  minStartDate: string;
  decimalFactor: number;
  minStartDateDaily: string;
  group: string;
}

export type InstrumentData = {
  [key in Instrument]: InstrumentMetaData;
};

export type Instrument =
  | 'aususd'
  | 'aaususd'
  | 'aabaususd'
  | 'aalgbgbx'
  | 'aalususd'
  | 'aaplususd'
  | 'abbsesek'
  | 'abcususd'
  | 'abevususd'
  | 'abfgbgbx'
  | 'abibeeur'
  | 'abtususd'
  | 'acfreur'
  | 'acafreur'
  | 'acseseur'
  | 'acxeseur'
  | 'adbeususd'
  | 'adiususd'
  | 'admgbgbx'
  | 'adpususd'
  | 'adsdeeur'
  | 'adskususd'
  | 'aenaeseur'
  | 'aetususd'
  | 'affreur'
  | 'agkgbgbx'
  | 'agnnleur'
  | 'agsbeeur'
  | 'ahnleur'
  | 'ahtgbgbx'
  | 'aifreur'
  | 'aigususd'
  | 'airfreur'
  | 'akzanleur'
  | 'alfasesek'
  | 'allususd'
  | 'alofreur'
  | 'alvdeeur'
  | 'alxnususd'
  | 'amatususd'
  | 'amdususd'
  | 'amgnususd'
  | 'amseseur'
  | 'amtususd'
  | 'amznususd'
  | 'antmususd'
  | 'antogbgbx'
  | 'apaususd'
  | 'apcususd'
  | 'apdususd'
  | 'asmlnleur'
  | 'atcoasesek'
  | 'atviususd'
  | 'audcad'
  | 'audchf'
  | 'audjpy'
  | 'audnzd'
  | 'audsgd'
  | 'audusd'
  | 'avgbgbx'
  | 'avbususd'
  | 'avgoususd'
  | 'axpususd'
  | 'azngbgbx'
  | 'aznususd'
  | 'azoususd'
  | 'bagbgbx'
  | 'baususd'
  | 'babgbgbx'
  | 'babaususd'
  | 'bacususd'
  | 'barcgbgbx'
  | 'basdeeur'
  | 'batsgbgbx'
  | 'bayndeeur'
  | 'bbdususd'
  | 'bbtususd'
  | 'bbvaeseur'
  | 'bbyususd'
  | 'bdxususd'
  | 'beideeur'
  | 'belgbeeur'
  | 'biduususd'
  | 'biibususd'
  | 'bkususd'
  | 'blndgbgbx'
  | 'bltgbgbx'
  | 'bmwdeeur'
  | 'bmyususd'
  | 'bnfreur'
  | 'bnpfreur'
  | 'bnzlgbgbx'
  | 'bossdeeur'
  | 'bpgbgbx'
  | 'bpususd'
  | 'brbygbgbx'
  | 'brkbususd'
  | 'bsxususd'
  | 'btgbgbx'
  | 'btcusd'
  | 'bundtreur'
  | 'cususd'
  | 'cafreur'
  | 'cabkeseur'
  | 'cadchf'
  | 'cadhkd'
  | 'cadjpy'
  | 'cagususd'
  | 'cahususd'
  | 'capfreur'
  | 'carlbdkdkk'
  | 'catususd'
  | 'cbkdeeur'
  | 'cbsususd'
  | 'cclgbgbx'
  | 'celgususd'
  | 'cfususd'
  | 'chfjpy'
  | 'chfsgd'
  | 'chiidxusd'
  | 'ciususd'
  | 'clususd'
  | 'cmcsaususd'
  | 'cmeususd'
  | 'cmgususd'
  | 'cmiususd'
  | 'cnagbgbx'
  | 'cocoacmdusd'
  | 'coffeecmdusx'
  | 'colususd'
  | 'colobdkdkk'
  | 'condeeur'
  | 'copususd'
  | 'coppercmdusd'
  | 'costususd'
  | 'cottoncmdusx'
  | 'cpggbgbx'
  | 'cpigbgbx'
  | 'crdagbgbx'
  | 'crhgbgbx'
  | 'crmususd'
  | 'csfreur'
  | 'csususd'
  | 'cscoususd'
  | 'csxususd'
  | 'ctlususd'
  | 'ctshususd'
  | 'cvsususd'
  | 'cvxususd'
  | 'dususd'
  | 'daideeur'
  | 'dalususd'
  | 'danskedkdkk'
  | 'db1deeur'
  | 'dbkdeeur'
  | 'deususd'
  | 'dfsususd'
  | 'dgfreur'
  | 'dgususd'
  | 'dgegbgbx'
  | 'dhiususd'
  | 'dhrususd'
  | 'diaeseur'
  | 'diaususd'
  | 'dieselcmdusd'
  | 'disususd'
  | 'dltrususd'
  | 'dnbnonok'
  | 'dollaridxusd'
  | 'dpwdeeur'
  | 'dsmnleur'
  | 'dtedeeur'
  | 'dukususd'
  | 'dvaususd'
  | 'dvnususd'
  | 'dvyususd'
  | 'eaususd'
  | 'ebayususd'
  | 'ebsateur'
  | 'edffreur'
  | 'edppteur'
  | 'eemususd'
  | 'efaususd'
  | 'efxususd'
  | 'eifreur'
  | 'eixususd'
  | 'elususd'
  | 'eleeseur'
  | 'eli1vfieur'
  | 'eluxbsesek'
  | 'embususd'
  | 'emrususd'
  | 'enfreur'
  | 'engeseur'
  | 'engifreur'
  | 'eoandeeur'
  | 'eogususd'
  | 'eqtususd'
  | 'ericbsesek'
  | 'esrxususd'
  | 'ethusd'
  | 'euraud'
  | 'eurcad'
  | 'eurchf'
  | 'eurczk'
  | 'eurdkk'
  | 'eurgbp'
  | 'eurhkd'
  | 'eurhuf'
  | 'eurjpy'
  | 'eurnok'
  | 'eurnzd'
  | 'eurpln'
  | 'eurrub'
  | 'eursek'
  | 'eursgd'
  | 'eurtry'
  | 'eurusd'
  | 'ewhususd'
  | 'ewjususd'
  | 'ewwususd'
  | 'ewzususd'
  | 'excususd'
  | 'expeususd'
  | 'expngbgbx'
  | 'ezjgbgbx'
  | 'ezuususd'
  | 'brentcmdusd'
  | 'fraidxeur'
  | 'usa30idxusd'
  | 'deuidxeur'
  | 'eusidxeur'
  | 'gbridxgbp'
  | 'hkgidxhkd'
  | 'espidxeur'
  | 'lightcmdusd'
  | 'jpnidxjpy'
  | 'usatechidxusd'
  | 'usa500idxusd'
  | 'cheidxchf'
  | 'ausidxaud'
  | 'fususd'
  | 'fbususd'
  | 'fcxususd'
  | 'fdxususd'
  | 'feususd'
  | 'fereseur'
  | 'fmedeeur'
  | 'foxaususd'
  | 'fpfreur'
  | 'frfreur'
  | 'fredeeur'
  | 'fresgbgbx'
  | 'fxiususd'
  | 'galppteur'
  | 'gameseur'
  | 'gascmdusd'
  | 'gaseseur'
  | 'gbpaud'
  | 'gbpcad'
  | 'gbpchf'
  | 'gbpjpy'
  | 'gbpnzd'
  | 'gbpusd'
  | 'gdxususd'
  | 'gdxjususd'
  | 'geususd'
  | 'getibsesek'
  | 'gfsgbgbx'
  | 'gildususd'
  | 'gisususd'
  | 'gldususd'
  | 'glefreur'
  | 'glengbgbx'
  | 'glwususd'
  | 'gmususd'
  | 'googususd'
  | 'googlususd'
  | 'gpsususd'
  | 'gsususd'
  | 'gtonleur'
  | 'gwwususd'
  | 'halususd'
  | 'hcnususd'
  | 'hcpususd'
  | 'hdususd'
  | 'heideeur'
  | 'heianleur'
  | 'hen3deeur'
  | 'hesususd'
  | 'hkdjpy'
  | 'hmbsesek'
  | 'hmsogbgbx'
  | 'honususd'
  | 'hpqususd'
  | 'hsbagbgbx'
  | 'humususd'
  | 'iaggbgbx'
  | 'ibbususd'
  | 'ibeeseur'
  | 'ibmususd'
  | 'iceususd'
  | 'iefususd'
  | 'ifxdeeur'
  | 'ihggbgbx'
  | 'ijhususd'
  | 'ijrususd'
  | 'ilmnususd'
  | 'imtgbgbx'
  | 'indidxusd'
  | 'inganleur'
  | 'intcususd'
  | 'intuususd'
  | 'invebsesek'
  | 'ipgususd'
  | 'isatgbgbx'
  | 'isrgususd'
  | 'itrkgbgbx'
  | 'itubususd'
  | 'itvgbgbx'
  | 'itwususd'
  | 'itxeseur'
  | 'iveususd'
  | 'ivwususd'
  | 'iwdususd'
  | 'iwfususd'
  | 'iwmususd'
  | 'iyrususd'
  | 'jciususd'
  | 'jnjususd'
  | 'jnkususd'
  | 'jpmususd'
  | 'jwnususd'
  | 'kususd'
  | 'kbcbeeur'
  | 'kerfreur'
  | 'keyususd'
  | 'kgfgbgbx'
  | 'khcususd'
  | 'kmbususd'
  | 'kmiususd'
  | 'koususd'
  | 'kpnnleur'
  | 'krususd'
  | 'kssususd'
  | 'lususd'
  | 'landgbgbx'
  | 'lenususd'
  | 'lgengbgbx'
  | 'lhadeeur'
  | 'lifreur'
  | 'lindeeur'
  | 'lloygbgbx'
  | 'llyususd'
  | 'lmtususd'
  | 'lowususd'
  | 'lrfreur'
  | 'lrcxususd'
  | 'lsegbgbx'
  | 'luvususd'
  | 'lvsususd'
  | 'lxsdeeur'
  | 'mususd'
  | 'maususd'
  | 'maerskbdkdkk'
  | 'marususd'
  | 'matususd'
  | 'mcfreur'
  | 'mcdususd'
  | 'mchpususd'
  | 'mckususd'
  | 'mdlzususd'
  | 'metususd'
  | 'mgmususd'
  | 'mhgnonok'
  | 'mksgbgbx'
  | 'mmmususd'
  | 'mndigbgbx'
  | 'moususd'
  | 'mpcususd'
  | 'mrkdeeur'
  | 'mrkususd'
  | 'mroususd'
  | 'mrwgbgbx'
  | 'msususd'
  | 'msftususd'
  | 'mtnleur'
  | 'muususd'
  | 'muv2deeur'
  | 'nblususd'
  | 'ndasesek'
  | 'neeususd'
  | 'nemususd'
  | 'nes1vfieur'
  | 'nflxususd'
  | 'nggbgbx'
  | 'nhynonok'
  | 'nkeususd'
  | 'nldidxeur'
  | 'nocususd'
  | 'novobdkdkk'
  | 'nre1vfieur'
  | 'nrgususd'
  | 'nscususd'
  | 'nvdaususd'
  | 'nwlususd'
  | 'nxtgbgbx'
  | 'nzdcad'
  | 'nzdchf'
  | 'nzdjpy'
  | 'nzdusd'
  | 'nzymbdkdkk'
  | 'ojuicecmdusx'
  | 'okeususd'
  | 'omcususd'
  | 'orfreur'
  | 'orafreur'
  | 'orclususd'
  | 'orknonok'
  | 'orlyususd'
  | 'ote1vfieur'
  | 'out1vfieur'
  | 'oxyususd'
  | 'pah3deeur'
  | 'payxususd'
  | 'pbrususd'
  | 'pcarususd'
  | 'pcgususd'
  | 'pclnususd'
  | 'pepususd'
  | 'pfcgbgbx'
  | 'pfeususd'
  | 'pgususd'
  | 'pgrususd'
  | 'phususd'
  | 'phianleur'
  | 'plnidxpln'
  | 'pmususd'
  | 'pncususd'
  | 'pndoradkdkk'
  | 'ppgususd'
  | 'prugbgbx'
  | 'pruususd'
  | 'psaususd'
  | 'psmdeeur'
  | 'psngbgbx'
  | 'psongbgbx'
  | 'psxususd'
  | 'pubfreur'
  | 'pxdususd'
  | 'pyplususd'
  | 'qcomususd'
  | 'qqqususd'
  | 'randnleur'
  | 'rbgbgbx'
  | 'rbiateur'
  | 'rbsgbgbx'
  | 'rdsanleur'
  | 'rdsbgbgbx'
  | 'reeeseur'
  | 'regnususd'
  | 'relgbgbx'
  | 'rennleur'
  | 'repeseur'
  | 'rfususd'
  | 'rhtususd'
  | 'rifreur'
  | 'riogbgbx'
  | 'rmggbgbx'
  | 'rnofreur'
  | 'rostususd'
  | 'rrgbgbx'
  | 'rrcususd'
  | 'rrsgbgbx'
  | 'rsagbgbx'
  | 'rtnususd'
  | 'rwedeeur'
  | 'saffreur'
  | 'saneseur'
  | 'sanfreur'
  | 'sandsesek'
  | 'sapdeeur'
  | 'sbrygbgbx'
  | 'sbuxususd'
  | 'scabsesek'
  | 'schwususd'
  | 'sdfdeeur'
  | 'sebasesek'
  | 'secubsesek'
  | 'sgdidxsgd'
  | 'sgdjpy'
  | 'sgegbgbx'
  | 'sgofreur'
  | 'shpgbgbx'
  | 'shwususd'
  | 'siedeeur'
  | 'sjmususd'
  | 'skabsesek'
  | 'skfbsesek'
  | 'skygbgbx'
  | 'slvususd'
  | 'smingbgbx'
  | 'sngbgbx'
  | 'snapususd'
  | 'soususd'
  | 'solbbeeur'
  | 'spgususd'
  | 'spyususd'
  | 'ssegbgbx'
  | 'stangbgbx'
  | 'stervfieur'
  | 'stiususd'
  | 'stlnonok'
  | 'sttususd'
  | 'stzususd'
  | 'sufreur'
  | 'sugarcmdusd'
  | 'svtgbgbx'
  | 'swedasesek'
  | 'swkususd'
  | 'swmasesek'
  | 'sykususd'
  | 'symcususd'
  | 'syyususd'
  | 'tususd'
  | 'tapususd'
  | 'tategbgbx'
  | 'tefeseur'
  | 'telnonok'
  | 'tel2bsesek'
  | 'tevaususd'
  | 'tgtususd'
  | 'tifususd'
  | 'tjxususd'
  | 'tkadeeur'
  | 'tls1vfieur'
  | 'tlsnsesek'
  | 'tltususd'
  | 'tlwgbgbx'
  | 'tmoususd'
  | 'tpkgbgbx'
  | 'trowususd'
  | 'trvususd'
  | 'tryjpy'
  | 'tscogbgbx'
  | 'tslaususd'
  | 'tsmususd'
  | 'tsnususd'
  | 'tui1deeur'
  | 'twtrususd'
  | 'txnususd'
  | 'ucbbeeur'
  | 'ugfreur'
  | 'ukgilttrgbp'
  | 'ultaususd'
  | 'ulvrgbgbx'
  | 'umibeeur'
  | 'unanleur'
  | 'unhususd'
  | 'unpususd'
  | 'upsususd'
  | 'usbususd'
  | 'usdcad'
  | 'usdchf'
  | 'usdcnh'
  | 'usdczk'
  | 'usddkk'
  | 'usdhkd'
  | 'usdhuf'
  | 'usdils'
  | 'usdjpy'
  | 'usdmxn'
  | 'usdnok'
  | 'usdpln'
  | 'usdron'
  | 'usdrub'
  | 'usdsek'
  | 'usdsgd'
  | 'usdthb'
  | 'usdtry'
  | 'usdzar'
  | 'usoususd'
  | 'utxususd'
  | 'uugbgbx'
  | 'vususd'
  | 'valeususd'
  | 'veaususd'
  | 'vfcususd'
  | 'vgkususd'
  | 'viabususd'
  | 'viefreur'
  | 'vivfreur'
  | 'vkfreur'
  | 'vloususd'
  | 'vmcususd'
  | 'vnadeeur'
  | 'vnqususd'
  | 'vodgbgbx'
  | 'voeateur'
  | 'volvbsesek'
  | 'vow3deeur'
  | 'vpknleur'
  | 'vrtxususd'
  | 'vwsdkdkk'
  | 'vxxususd'
  | 'vzususd'
  | 'wbaususd'
  | 'wdcususd'
  | 'weirgbgbx'
  | 'wfcususd'
  | 'whrususd'
  | 'wklnleur'
  | 'wmtususd'
  | 'wosgbgbx'
  | 'wppgbgbx'
  | 'wtbgbgbx'
  | 'wynnususd'
  | 'xususd'
  | 'xagusd'
  | 'xauusd'
  | 'xleususd'
  | 'xlfususd'
  | 'xliususd'
  | 'xlkususd'
  | 'xlnxususd'
  | 'xlpususd'
  | 'xluususd'
  | 'xlvususd'
  | 'xlyususd'
  | 'xomususd'
  | 'xopususd'
  | 'yumususd'
  | 'zarjpy'
  | 'zbhususd'
  | 'abbnchchf'
  | 'adenchchf'
  | 'baerchchf'
  | 'clnchchf'
  | 'csgnchchf'
  | 'givnchchf'
  | 'kninchchf'
  | 'lhnchchf'
  | 'lonnchchf'
  | 'nesnchchf'
  | 'novnchchf'
  | 'rogchchf'
  | 'scmnchchf'
  | 'sgsnchchf'
  | 'slhnchchf'
  | 'soonchchf'
  | 'soybeancmdusx'
  | 'srenchchf'
  | 'ubsgchchf'
  | 'uhrchchf'
  | 'ussc2000idxusd'
  | 'ustbondtrusd'
  | 'zurnchchf';

export type Timeframe = 'tick' | 'm1' | 'm30' | 'h1' | 'd1' | 'mn1';

export type Timeframes = {
  [key in Timeframe]: number;
};

export type PriceType = 'bid' | 'ask';

export type PriceTypes = {
  [key in PriceType]: number;
};

export type Output = 'array' | 'json' | 'csv';

export type OutputTypes = {
  [key in Output]: string;
};

export interface HistoryConfig {
  instrument: Instrument;
  dates: {
    from: string;
    to: string;
  };
  timeframe?: Timeframe;
  priceType?: PriceType;
  utcOffset?: number;
  volumes?: boolean;
  ignoreFlats?: boolean;
  output?: Output;
}

export type DefaultHistoryConfig = Required<Pick<HistoryConfig, OptionalKeys<HistoryConfig>>>;
