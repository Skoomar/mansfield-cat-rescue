/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  CronPattern: { input: any; output: any; }
  /** An ISO8601 string representing a datetime */
  Instant: { input: any; output: any; }
  /** An ISO8601 string with year, month, and day components only, representing a date (yyyy-MM-dd) */
  LocalDate: { input: any; output: any; }
  UUID: { input: any; output: any; }
  /** An ISO8601 string with year and month components only, representing a date (yyyy-MM) */
  YearMonth: { input: any; output: any; }
};

export type AbstractOrganization = ExternalOrganization | Organization;

export type AddAdoptionDocInput = {
  doc_upload_ref: Input_UploadedFileRef;
  organization_id: Scalars['UUID']['input'];
};

/** Input for adding images to a pet. */
export type AddPetImagesInput = {
  /** ID of the organization-pet to add images to. */
  organization_pet_id: Scalars['UUID']['input'];
  /** Images to add to the pet. */
  uploaded_file_refs?: InputMaybe<Array<Input_UploadedFileRef>>;
};

export type Address = {
  __typename?: 'Address';
  /** City */
  city?: Maybe<Scalars['String']['output']>;
  country_code?: Maybe<Country>;
  /** Line 1, e.g. House and street number */
  line_1?: Maybe<Scalars['String']['output']>;
  /** Line 2, e.g. Suite or apartment number */
  line_2?: Maybe<Scalars['String']['output']>;
  line_3?: Maybe<Scalars['String']['output']>;
  line_4?: Maybe<Scalars['String']['output']>;
  locality?: Maybe<Scalars['String']['output']>;
  /** Zip code */
  postal_code?: Maybe<Scalars['String']['output']>;
  /** 2-letter state code, e.g. NE */
  state_code?: Maybe<State>;
  subdivision_code?: Maybe<Country_Subdivision>;
};

export type AddressInput = {
  /** City */
  city?: InputMaybe<Scalars['String']['input']>;
  /** Line 1, e.g. House and street number */
  line_1?: InputMaybe<Scalars['String']['input']>;
  /** Line 2, e.g. Suite or apartment number */
  line_2?: InputMaybe<Scalars['String']['input']>;
  line_3?: InputMaybe<Scalars['String']['input']>;
  line_4?: InputMaybe<Scalars['String']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  /** Zip code */
  postal_code?: InputMaybe<Scalars['String']['input']>;
  /** 2-letter state code, e.g. NE */
  state_code?: InputMaybe<State>;
  subdivision_code?: InputMaybe<Country_Subdivision>;
};

export type AdoptionDocsConnection = {
  __typename?: 'AdoptionDocsConnection';
  entities?: Maybe<Array<File>>;
};

export type AdoptionDocsPage = {
  __typename?: 'AdoptionDocsPage';
  adoption_documents: AdoptionDocsConnection;
  organization_logo?: Maybe<File>;
  organization_name: Scalars['String']['output'];
};

/** Adoptions connection */
export type AdoptionsConnection = {
  __typename?: 'AdoptionsConnection';
  entities?: Maybe<Array<Maybe<Pet_Event_Adoption>>>;
  /** Not currently used */
  next_token?: Maybe<Scalars['String']['output']>;
};

export type AirtableDocument = {
  __typename?: 'AirtableDocument';
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  thumbnails?: Maybe<AirtableThumbnails>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AirtableThumbnail = {
  __typename?: 'AirtableThumbnail';
  height?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type AirtableThumbnails = {
  __typename?: 'AirtableThumbnails';
  full?: Maybe<AirtableThumbnail>;
  large?: Maybe<AirtableThumbnail>;
  small?: Maybe<AirtableThumbnail>;
};

export type ArchivePetApplicationInput = {
  airtable_id: Scalars['String']['input'];
  organization_id: Scalars['UUID']['input'];
};

export enum ArchiveStates {
  Archived = 'ARCHIVED',
  NotArchived = 'NOT_ARCHIVED'
}

/** Pawlytics cat breeds */
export enum CatBreed {
  /** Abyssinian */
  Abyssinian = 'ABYSSINIAN',
  /** Aegean */
  Aegean = 'AEGEAN',
  /** American Bobtail */
  AmericanBobtail = 'AMERICAN_BOBTAIL',
  /** American Bobtail Shorthair */
  AmericanBobtailShorthair = 'AMERICAN_BOBTAIL_SHORTHAIR',
  /** American Curl */
  AmericanCurl = 'AMERICAN_CURL',
  /** American Curl Longhair */
  AmericanCurlLonghair = 'AMERICAN_CURL_LONGHAIR',
  /** American Ringtail */
  AmericanRingtail = 'AMERICAN_RINGTAIL',
  /** American Shorthair */
  AmericanShorthair = 'AMERICAN_SHORTHAIR',
  /** American Wirehair */
  AmericanWirehair = 'AMERICAN_WIREHAIR',
  /** Arabian Mau */
  ArabianMau = 'ARABIAN_MAU',
  /** Asian */
  Asian = 'ASIAN',
  /** Asian - Smoke */
  AsianSmoke = 'ASIAN_SMOKE',
  /** Australian Mist */
  AustralianMist = 'AUSTRALIAN_MIST',
  /** Balinese */
  Balinese = 'BALINESE',
  /** Bambino */
  Bambino = 'BAMBINO',
  /** Bengal */
  Bengal = 'BENGAL',
  /** Bengal Longhair */
  BengalLonghair = 'BENGAL_LONGHAIR',
  /** Birman */
  Birman = 'BIRMAN',
  /** Bombay */
  Bombay = 'BOMBAY',
  /** Bramble */
  Bramble = 'BRAMBLE',
  /** Brazilian Shorthair */
  BrazilianShorthair = 'BRAZILIAN_SHORTHAIR',
  /** British Longhair */
  BritishLonghair = 'BRITISH_LONGHAIR',
  /** British Shorthair */
  BritishShorthair = 'BRITISH_SHORTHAIR',
  /** Burmese */
  Burmese = 'BURMESE',
  /** Burmilla */
  Burmilla = 'BURMILLA',
  /** Burmilla Longhair */
  BurmillaLonghair = 'BURMILLA_LONGHAIR',
  /** California Spangled */
  CaliforniaSpangled = 'CALIFORNIA_SPANGLED',
  /** Ceylon */
  Ceylon = 'CEYLON',
  /** Chantilly/tiffany */
  Chantillytiffany = 'CHANTILLYTIFFANY',
  /** Chartreux */
  Chartreux = 'CHARTREUX',
  /** Chausie */
  Chausie = 'CHAUSIE',
  /** Chinese Li Hua */
  ChineseLiHua = 'CHINESE_LI_HUA',
  /** Colorpoint Shorthair */
  ColorpointShorthair = 'COLORPOINT_SHORTHAIR',
  /** Cornish Rex */
  CornishRex = 'CORNISH_REX',
  /** Cymric */
  Cymric = 'CYMRIC',
  /** Cyprus Aphrodite */
  CyprusAphrodite = 'CYPRUS_APHRODITE',
  /** Devon Rex */
  DevonRex = 'DEVON_REX',
  /** Domestic Long Hair */
  DomesticLongHair = 'DOMESTIC_LONG_HAIR',
  /** Domestic Medium Hair */
  DomesticMediumHair = 'DOMESTIC_MEDIUM_HAIR',
  /** Domestic Short Hair */
  DomesticShortHair = 'DOMESTIC_SHORT_HAIR',
  /** Donskoy */
  Donskoy = 'DONSKOY',
  /** Dwelf */
  Dwelf = 'DWELF',
  /** Egyptian Mau */
  EgyptianMau = 'EGYPTIAN_MAU',
  /** European Burmese */
  EuropeanBurmese = 'EUROPEAN_BURMESE',
  /** European Shorthair */
  EuropeanShorthair = 'EUROPEAN_SHORTHAIR',
  /** Exotic Shorthair */
  ExoticShorthair = 'EXOTIC_SHORTHAIR',
  /** Genetta */
  Genetta = 'GENETTA',
  /** German Rex */
  GermanRex = 'GERMAN_REX',
  /** Havana */
  Havana = 'HAVANA',
  /** Highlander */
  Highlander = 'HIGHLANDER',
  /** Highlander Shorthair */
  HighlanderShorthair = 'HIGHLANDER_SHORTHAIR',
  /** Himalayan */
  Himalayan = 'HIMALAYAN',
  /** Japanese Bobtail */
  JapaneseBobtail = 'JAPANESE_BOBTAIL',
  /** Japanese Bobtail Longhair */
  JapaneseBobtailLonghair = 'JAPANESE_BOBTAIL_LONGHAIR',
  /** Kanaani */
  Kanaani = 'KANAANI',
  /** Khao Manee */
  KhaoManee = 'KHAO_MANEE',
  /** Kinkalow */
  Kinkalow = 'KINKALOW',
  /** Korat */
  Korat = 'KORAT',
  /** Kurilian Bobtail */
  KurilianBobtail = 'KURILIAN_BOBTAIL',
  /** Kurilian Bobtail Longhair */
  KurilianBobtailLonghair = 'KURILIAN_BOBTAIL_LONGHAIR',
  /** Lambkin Dwarf */
  LambkinDwarf = 'LAMBKIN_DWARF',
  /** Laperm */
  Laperm = 'LAPERM',
  /** Laperm Shorthair */
  LapermShorthair = 'LAPERM_SHORTHAIR',
  /** Lykoi */
  Lykoi = 'LYKOI',
  /** Maine Coon */
  MaineCoon = 'MAINE_COON',
  /** Manx */
  Manx = 'MANX',
  /** Mekong Bobtail */
  MekongBobtail = 'MEKONG_BOBTAIL',
  /** Minskin */
  Minskin = 'MINSKIN',
  /** Minuet */
  Minuet = 'MINUET',
  /** Minuet Longhair */
  MinuetLonghair = 'MINUET_LONGHAIR',
  /** Munchkin */
  Munchkin = 'MUNCHKIN',
  /** Munchkin Longhair */
  MunchkinLonghair = 'MUNCHKIN_LONGHAIR',
  /** Napoleon */
  Napoleon = 'NAPOLEON',
  /** Nebelung */
  Nebelung = 'NEBELUNG',
  /** Neva Masquerade */
  NevaMasquerade = 'NEVA_MASQUERADE',
  /** Norwegian Forest Cat */
  NorwegianForestCat = 'NORWEGIAN_FOREST_CAT',
  /** Ocicat */
  Ocicat = 'OCICAT',
  /** Ojos Azules */
  OjosAzules = 'OJOS_AZULES',
  /** Oriental Longhair */
  OrientalLonghair = 'ORIENTAL_LONGHAIR',
  /** Oriental Shorthair */
  OrientalShorthair = 'ORIENTAL_SHORTHAIR',
  /** Persian */
  Persian = 'PERSIAN',
  /** Persian - Chinchilla */
  PersianChinchilla = 'PERSIAN_CHINCHILLA',
  /** Peterbald */
  Peterbald = 'PETERBALD',
  /** Pixiebob */
  Pixiebob = 'PIXIEBOB',
  /** Pixiebob Longhair */
  PixiebobLonghair = 'PIXIEBOB_LONGHAIR',
  /** Ragamuffin */
  Ragamuffin = 'RAGAMUFFIN',
  /** Ragdoll */
  Ragdoll = 'RAGDOLL',
  /** Russian Blue */
  RussianBlue = 'RUSSIAN_BLUE',
  /** Safari */
  Safari = 'SAFARI',
  /** Savannah */
  Savannah = 'SAVANNAH',
  /** Scottish Fold */
  ScottishFold = 'SCOTTISH_FOLD',
  /** Scottish Straight */
  ScottishStraight = 'SCOTTISH_STRAIGHT',
  /** Scottish Straight Longhair */
  ScottishStraightLonghair = 'SCOTTISH_STRAIGHT_LONGHAIR',
  /** Selkirk Rex */
  SelkirkRex = 'SELKIRK_REX',
  /** Selkirk Rex Longhair */
  SelkirkRexLonghair = 'SELKIRK_REX_LONGHAIR',
  /** Serengeti */
  Serengeti = 'SERENGETI',
  /** Seychellois */
  Seychellois = 'SEYCHELLOIS',
  /** Siamese */
  Siamese = 'SIAMESE',
  /** Siberian */
  Siberian = 'SIBERIAN',
  /** Singapura */
  Singapura = 'SINGAPURA',
  /** Skookum */
  Skookum = 'SKOOKUM',
  /** Snowshoe */
  Snowshoe = 'SNOWSHOE',
  /** Sokoke */
  Sokoke = 'SOKOKE',
  /** Somali */
  Somali = 'SOMALI',
  /** Sphynx */
  Sphynx = 'SPHYNX',
  /** Tennessee Rex */
  TennesseeRex = 'TENNESSEE_REX',
  /** Thai */
  Thai = 'THAI',
  /** Tiffanie */
  Tiffanie = 'TIFFANIE',
  /** Tonkinese */
  Tonkinese = 'TONKINESE',
  /** Toybob */
  Toybob = 'TOYBOB',
  /** Toyger */
  Toyger = 'TOYGER',
  /** Turkish Angora */
  TurkishAngora = 'TURKISH_ANGORA',
  /** Turkish Shorthair */
  TurkishShorthair = 'TURKISH_SHORTHAIR',
  /** Turkish Van */
  TurkishVan = 'TURKISH_VAN',
  /** Ukrainian Levkoy */
  UkrainianLevkoy = 'UKRAINIAN_LEVKOY',
  /** Ussuri */
  Ussuri = 'USSURI',
  /** York Chocolate */
  YorkChocolate = 'YORK_CHOCOLATE'
}

/** Pawlytics cat colors */
export enum CatColor {
  /** Apricot */
  Apricot = 'APRICOT',
  /** Beige */
  Beige = 'BEIGE',
  /** Bicolor */
  Bicolor = 'BICOLOR',
  /** Black */
  Black = 'BLACK',
  /** Blue */
  Blue = 'BLUE',
  /** Brown */
  Brown = 'BROWN',
  /** Calico */
  Calico = 'CALICO',
  /** Caramel */
  Caramel = 'CARAMEL',
  /** Chestnut */
  Chestnut = 'CHESTNUT',
  /** Chocolate */
  Chocolate = 'CHOCOLATE',
  /** Cinnamon */
  Cinnamon = 'CINNAMON',
  /** Colorpoint */
  Colorpoint = 'COLORPOINT',
  /** Cream */
  Cream = 'CREAM',
  /** Fawn */
  Fawn = 'FAWN',
  /** Ginger */
  Ginger = 'GINGER',
  /** Grey */
  Grey = 'GREY',
  /** Light Brown */
  LightBrown = 'LIGHT_BROWN',
  /** Lilac */
  Lilac = 'LILAC',
  /** Mackerel */
  Mackerel = 'MACKEREL',
  /** Orange */
  Orange = 'ORANGE',
  /** Red */
  Red = 'RED',
  /** Sable */
  Sable = 'SABLE',
  /** Sepia */
  Sepia = 'SEPIA',
  /** Silver */
  Silver = 'SILVER',
  /** Spotted */
  Spotted = 'SPOTTED',
  /** Tabby */
  Tabby = 'TABBY',
  /** Ticked */
  Ticked = 'TICKED',
  /** Tortoiseshell */
  Tortoiseshell = 'TORTOISESHELL',
  /** Tuxedo */
  Tuxedo = 'TUXEDO',
  /** White */
  White = 'WHITE',
  /** Yellow */
  Yellow = 'YELLOW'
}

/** DEPRECATED: Clinics are now a kind of partner */
export type Clinic = {
  __typename?: 'Clinic';
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  vets?: Maybe<Array<Maybe<Vet>>>;
};

/** Country codes */
export enum Country {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua & Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Netherlands Antilles */
  An = 'AN',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia & Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Zaire */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Cote D'ivoire (Ivory Coast) */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cape Verde */
  Cv = 'CV',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** S.Georgia & S.Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard & McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia (Hrvatska) */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts & Nevis */
  Kn = 'KN',
  /** Korea (North) */
  Kp = 'KP',
  /** Korea (South) */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Laos */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macau */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** St. Pierre & Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Reunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Russian Federation */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** St. Helena */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard & Jan Mayen Islands */
  Sj = 'SJ',
  /** Slovak Republic */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** Sao Tome & Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Syria */
  Sy = 'SY',
  /** Swaziland */
  Sz = 'SZ',
  /** Turks & Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** East Timor */
  Tp = 'TP',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad & Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City (Holy See) */
  Va = 'VA',
  /** St. Vincent & the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** Virgin Islands (British) */
  Vg = 'VG',
  /** Virgin Islands (U.S.) */
  Vi = 'VI',
  /** Viet Nam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis & Futuna Islands */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** Yugoslavia */
  Yu = 'YU',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW'
}

/** Country subdivisions */
export enum Country_Subdivision {
  /** Andorra */
  AdAd = 'AD_AD',
  /** ‘Ajmān */
  AeAj = 'AE_AJ',
  /** Abū Zaby (Abu Dhabi) */
  AeAz = 'AE_AZ',
  /** Dubayy (Dubai) */
  AeDu = 'AE_DU',
  /** Al Fujayrah */
  AeFu = 'AE_FU',
  /** R'as al Khaymah */
  AeRk = 'AE_RK',
  /** Ash Shāriqah (Sharjah) */
  AeSh = 'AE_SH',
  /** Umm al Qaywayn */
  AeUq = 'AE_UQ',
  /** Balkh */
  AfBal = 'AF_BAL',
  /** Bāmīān */
  AfBam = 'AF_BAM',
  /** Bādghīs */
  AfBdg = 'AF_BDG',
  /** Badakhshān */
  AfBds = 'AF_BDS',
  /** Baghlān */
  AfBgl = 'AF_BGL',
  /** Farāh */
  AfFra = 'AF_FRA',
  /** Fāryāb */
  AfFyb = 'AF_FYB',
  /** Ghaznī */
  AfGha = 'AF_GHA',
  /** Ghowr */
  AfGho = 'AF_GHO',
  /** Helmand */
  AfHel = 'AF_HEL',
  /** Herāt */
  AfHer = 'AF_HER',
  /** Jowzjān */
  AfJow = 'AF_JOW',
  /** Kabul (Kābol) */
  AfKab = 'AF_KAB',
  /** Kandahār */
  AfKan = 'AF_KAN',
  /** Kāpīsā */
  AfKap = 'AF_KAP',
  /** Kondoz (Kunduz) */
  AfKdz = 'AF_KDZ',
  /** Konar (Kunar) */
  AfKnr = 'AF_KNR',
  /** Laghmān */
  AfLag = 'AF_LAG',
  /** Lowgar */
  AfLow = 'AF_LOW',
  /** Nangrahār (Nangarhār) */
  AfNan = 'AF_NAN',
  /** Nīmrūz */
  AfNim = 'AF_NIM',
  /** Orūzgān (Urūzgā */
  AfOru = 'AF_ORU',
  /** Parwān */
  AfPar = 'AF_PAR',
  /** Paktīā */
  AfPia = 'AF_PIA',
  /** Paktīkā */
  AfPka = 'AF_PKA',
  /** Samangān */
  AfSam = 'AF_SAM',
  /** Sar-e Pol */
  AfSar = 'AF_SAR',
  /** Takhār */
  AfTak = 'AF_TAK',
  /** Wardak (Wardag) */
  AfWar = 'AF_WAR',
  /** Zābol (Zābul) */
  AfZab = 'AF_ZAB',
  /** Antigua & Barbuda */
  AgAg = 'AG_AG',
  /** Anguilla */
  AiAi = 'AI_AI',
  /** Berat */
  AlBr = 'AL_BR',
  /** Bulqizë */
  AlBu = 'AL_BU',
  /** Dibër */
  AlDi = 'AL_DI',
  /** Delvinë */
  AlDl = 'AL_DL',
  /** Durrës */
  AlDr = 'AL_DR',
  /** Devoll */
  AlDv = 'AL_DV',
  /** Elbasan */
  AlEl = 'AL_EL',
  /** Kolonjë */
  AlEr = 'AL_ER',
  /** Fier */
  AlFr = 'AL_FR',
  /** Gjirokastër */
  AlGj = 'AL_GJ',
  /** Gramsh */
  AlGr = 'AL_GR',
  /** Has */
  AlHa = 'AL_HA',
  /** Kavajë */
  AlKa = 'AL_KA',
  /** Kucovë */
  AlKc = 'AL_KC',
  /** Korcë */
  AlKo = 'AL_KO',
  /** Krujë */
  AlKr = 'AL_KR',
  /** Kukës */
  AlKu = 'AL_KU',
  /** Laç */
  AlLa = 'AL_LA',
  /** Librazhd */
  AlLb = 'AL_LB',
  /** Lezhë */
  AlLe = 'AL_LE',
  /** Lushnjë */
  AlLu = 'AL_LU',
  /** Mallakastër */
  AlMk = 'AL_MK',
  /** Malësia e Madhe */
  AlMm = 'AL_MM',
  /** Mirditë */
  AlMr = 'AL_MR',
  /** Mat */
  AlMt = 'AL_MT',
  /** Pogradec */
  AlPg = 'AL_PG',
  /** Peqin */
  AlPq = 'AL_PQ',
  /** Përmet */
  AlPr = 'AL_PR',
  /** Pukë */
  AlPu = 'AL_PU',
  /** Shkodër */
  AlSh = 'AL_SH',
  /** Skrapar */
  AlSk = 'AL_SK',
  /** Sarandë */
  AlSr = 'AL_SR',
  /** Tepelenë */
  AlTe = 'AL_TE',
  /** Tropojë */
  AlTp = 'AL_TP',
  /** Tiranë */
  AlTr = 'AL_TR',
  /** Vlorë */
  AlVl = 'AL_VL',
  /** Aragacotn */
  AmAg = 'AM_AG',
  /** Ararat */
  AmAr = 'AM_AR',
  /** Armavir */
  AmAv = 'AM_AV',
  /** Erevan */
  AmEr = 'AM_ER',
  /** Geģark'unik' */
  AmGr = 'AM_GR',
  /** Kotayk' */
  AmKt = 'AM_KT',
  /** Loŕy */
  AmLo = 'AM_LO',
  /** Širak */
  AmSh = 'AM_SH',
  /** Syunik' */
  AmSu = 'AM_SU',
  /** Tavuš */
  AmTv = 'AM_TV',
  /** Vayoc Jor */
  AmVd = 'AM_VD',
  /** Netherlands Antilles */
  AnAn = 'AN_AN',
  /** Bengo */
  AoBgo = 'AO_BGO',
  /** Benguela */
  AoBgu = 'AO_BGU',
  /** Bié */
  AoBie = 'AO_BIE',
  /** Cabinda */
  AoCab = 'AO_CAB',
  /** Cuando-Cubango */
  AoCcu = 'AO_CCU',
  /** Cunene */
  AoCnn = 'AO_CNN',
  /** Cuanza Norte */
  AoCno = 'AO_CNO',
  /** Cuanza Sul */
  AoCus = 'AO_CUS',
  /** Huambo */
  AoHua = 'AO_HUA',
  /** Huíla */
  AoHui = 'AO_HUI',
  /** Lunda Norte */
  AoLno = 'AO_LNO',
  /** Lunda Sul */
  AoLsu = 'AO_LSU',
  /** Luanda */
  AoLua = 'AO_LUA',
  /** Malange */
  AoMal = 'AO_MAL',
  /** Moxico */
  AoMox = 'AO_MOX',
  /** Namibe */
  AoNam = 'AO_NAM',
  /** Uíge */
  AoUig = 'AO_UIG',
  /** Zaïre */
  AoZai = 'AO_ZAI',
  /** Antarctica */
  AqAq = 'AQ_AQ',
  /** Salta */
  ArA = 'AR_A',
  /** Buenos Aires */
  ArB = 'AR_B',
  /** Capital federal */
  ArC = 'AR_C',
  /** San Luis */
  ArD = 'AR_D',
  /** Entre Ríos */
  ArE = 'AR_E',
  /** La Rioja */
  ArF = 'AR_F',
  /** Santiago del Estero */
  ArG = 'AR_G',
  /** Chaco */
  ArH = 'AR_H',
  /** San Juan */
  ArJ = 'AR_J',
  /** Catamarca */
  ArK = 'AR_K',
  /** La Pampa */
  ArL = 'AR_L',
  /** Mendoza */
  ArM = 'AR_M',
  /** Misiones */
  ArN = 'AR_N',
  /** Formosa */
  ArP = 'AR_P',
  /** Neuquén */
  ArQ = 'AR_Q',
  /** Río Negro */
  ArR = 'AR_R',
  /** Santa Fe */
  ArS = 'AR_S',
  /** Tucumán */
  ArT = 'AR_T',
  /** Chubut */
  ArU = 'AR_U',
  /** Tierra del Fuego */
  ArV = 'AR_V',
  /** Corrientes */
  ArW = 'AR_W',
  /** Córdoba */
  ArX = 'AR_X',
  /** Jujuy */
  ArY = 'AR_Y',
  /** Santa Cruz */
  ArZ = 'AR_Z',
  /** American Samoa */
  AsAs = 'AS_AS',
  /** Burgenland */
  At_1 = 'AT_1',
  /** Kärnten */
  At_2 = 'AT_2',
  /** Niederösterreich */
  At_3 = 'AT_3',
  /** Oberösterreich */
  At_4 = 'AT_4',
  /** Salzburg */
  At_5 = 'AT_5',
  /** Steiermark */
  At_6 = 'AT_6',
  /** Tirol */
  At_7 = 'AT_7',
  /** Vorarlberg */
  At_8 = 'AT_8',
  /** Wien */
  At_9 = 'AT_9',
  /** Australian Capital Territory */
  AuAct = 'AU_ACT',
  /** New South Wales */
  AuNsw = 'AU_NSW',
  /** Northern Territory */
  AuNt = 'AU_NT',
  /** Queensland */
  AuQld = 'AU_QLD',
  /** South Australia */
  AuSa = 'AU_SA',
  /** Tasmania */
  AuTas = 'AU_TAS',
  /** Victoria */
  AuVic = 'AU_VIC',
  /** Western Australia */
  AuWa = 'AU_WA',
  /** Aruba */
  AwAw = 'AW_AW',
  /** Äli Bayramli */
  AzAb = 'AZ_AB',
  /** Abşeron */
  AzAbs = 'AZ_ABS',
  /** Ağstafa */
  AzAga = 'AZ_AGA',
  /** Ağcabädi */
  AzAgc = 'AZ_AGC',
  /** Ağdam */
  AzAgm = 'AZ_AGM',
  /** Ağdas */
  AzAgs = 'AZ_AGS',
  /** Ağsu */
  AzAgu = 'AZ_AGU',
  /** Astara */
  AzAst = 'AZ_AST',
  /** Baki */
  AzBa = 'AZ_BA',
  /** Babäk */
  AzBab = 'AZ_BAB',
  /** Balakän */
  AzBal = 'AZ_BAL',
  /** Bärdä */
  AzBar = 'AZ_BAR',
  /** Beyläqan */
  AzBey = 'AZ_BEY',
  /** Biläsuvar */
  AzBil = 'AZ_BIL',
  /** Cäbrayil */
  AzCab = 'AZ_CAB',
  /** Cälilabad */
  AzCal = 'AZ_CAL',
  /** Culfa */
  AzCul = 'AZ_CUL',
  /** Daşkäsän */
  AzDas = 'AZ_DAS',
  /** Däväçi */
  AzDav = 'AZ_DAV',
  /** Füzuli */
  AzFuz = 'AZ_FUZ',
  /** Gäncä */
  AzGa = 'AZ_GA',
  /** Gädäbäy */
  AzGad = 'AZ_GAD',
  /** Goranboy */
  AzGor = 'AZ_GOR',
  /** Göyçay */
  AzGoy = 'AZ_GOY',
  /** Haciqabul */
  AzHac = 'AZ_HAC',
  /** Imişli */
  AzImi = 'AZ_IMI',
  /** Ismayilli */
  AzIsm = 'AZ_ISM',
  /** Kälbäcär */
  AzKal = 'AZ_KAL',
  /** Kürdämir */
  AzKur = 'AZ_KUR',
  /** Länkäran */
  AzLa = 'AZ_LA',
  /** Laçin */
  AzLac = 'AZ_LAC',
  /** Länkäran */
  AzLan = 'AZ_LAN',
  /** Lerik */
  AzLer = 'AZ_LER',
  /** Masalli */
  AzMas = 'AZ_MAS',
  /** Mingäçevir */
  AzMi = 'AZ_MI',
  /** Naxçivan */
  AzMm = 'AZ_MM',
  /** Naftalan */
  AzNa = 'AZ_NA',
  /** Neftçala */
  AzNef = 'AZ_NEF',
  /** Oğuz */
  AzOgu = 'AZ_OGU',
  /** Ordubad */
  AzOrd = 'AZ_ORD',
  /** Qäbälä */
  AzQab = 'AZ_QAB',
  /** Qax */
  AzQax = 'AZ_QAX',
  /** Qazax */
  AzQaz = 'AZ_QAZ',
  /** Quba */
  AzQba = 'AZ_QBA',
  /** Qubadlı */
  AzQbi = 'AZ_QBI',
  /** Qobustan */
  AzQob = 'AZ_QOB',
  /** Qusar */
  AzQus = 'AZ_QUS',
  /** Şäki */
  AzSa = 'AZ_SA',
  /** Sabirabad */
  AzSab = 'AZ_SAB',
  /** Sädäräk */
  AzSad = 'AZ_SAD',
  /** Şahbuz */
  AzSah = 'AZ_SAH',
  /** Şäki */
  AzSak = 'AZ_SAK',
  /** Salyan */
  AzSal = 'AZ_SAL',
  /** Şärur */
  AzSar = 'AZ_SAR',
  /** Saatli */
  AzSat = 'AZ_SAT',
  /** Siyäzän */
  AzSiy = 'AZ_SIY',
  /** Şämkir */
  AzSkr = 'AZ_SKR',
  /** Sumqayit */
  AzSm = 'AZ_SM',
  /** Şamaxı */
  AzSmi = 'AZ_SMI',
  /** Samux */
  AzSmx = 'AZ_SMX',
  /** Şuşa */
  AzSs = 'AZ_SS',
  /** Şuşa */
  AzSus = 'AZ_SUS',
  /** Tärtär */
  AzTar = 'AZ_TAR',
  /** Tovuz */
  AzTov = 'AZ_TOV',
  /** Ucar */
  AzUca = 'AZ_UCA',
  /** Xankändi */
  AzXa = 'AZ_XA',
  /** Xaçmaz */
  AzXac = 'AZ_XAC',
  /** Xanlar */
  AzXan = 'AZ_XAN',
  /** Xocalı */
  AzXci = 'AZ_XCI',
  /** Xizi */
  AzXiz = 'AZ_XIZ',
  /** Xocavänd */
  AzXvd = 'AZ_XVD',
  /** Yardimli */
  AzYar = 'AZ_YAR',
  /** Yevlax */
  AzYe = 'AZ_YE',
  /** Yevlax */
  AzYev = 'AZ_YEV',
  /** Zängılan */
  AzZan = 'AZ_ZAN',
  /** Zaqatala */
  AzZaq = 'AZ_ZAQ',
  /** Zärdab */
  AzZar = 'AZ_ZAR',
  /** Federacija Bosna i Hercegovina */
  BaBih = 'BA_BIH',
  /** Republika Srpska */
  BaSrp = 'BA_SRP',
  /** Barbados */
  BbBb = 'BB_BB',
  /** Barisal bibhag */
  Bd_1 = 'BD_1',
  /** Chittagong bibhag */
  Bd_2 = 'BD_2',
  /** Dhaka bibhag */
  Bd_3 = 'BD_3',
  /** Khulna bibhag */
  Bd_4 = 'BD_4',
  /** Rajshahi bibhag */
  Bd_5 = 'BD_5',
  /** Bruxelles-Capitale, Region de (fr), Brussels Hoofdstedelijk Gewest (nl) */
  BeBru = 'BE_BRU',
  /** Vlaamse Gewest (nl) */
  BeVlg = 'BE_VLG',
  /** Wallonne, Region (fr) */
  BeWal = 'BE_WAL',
  /** Balé */
  BfBal = 'BF_BAL',
  /** Bam */
  BfBam = 'BF_BAM',
  /** Banwa */
  BfBan = 'BF_BAN',
  /** Bazèga */
  BfBaz = 'BF_BAZ',
  /** Bougouriba */
  BfBgr = 'BF_BGR',
  /** Boulgou */
  BfBlg = 'BF_BLG',
  /** Boulkiemdé */
  BfBlk = 'BF_BLK',
  /** Comoé */
  BfCom = 'BF_COM',
  /** Ganzourgou */
  BfGan = 'BF_GAN',
  /** Gnagna */
  BfGna = 'BF_GNA',
  /** Gourma */
  BfGou = 'BF_GOU',
  /** Houet */
  BfHou = 'BF_HOU',
  /** Ioba */
  BfIob = 'BF_IOB',
  /** Kadiogo */
  BfKad = 'BF_KAD',
  /** Kénédougou */
  BfKen = 'BF_KEN',
  /** Komondjari */
  BfKmd = 'BF_KMD',
  /** Kompienga */
  BfKmp = 'BF_KMP',
  /** Koulpélogo */
  BfKop = 'BF_KOP',
  /** Kossi */
  BfKos = 'BF_KOS',
  /** Kouritenga */
  BfKot = 'BF_KOT',
  /** Kourwéogo */
  BfKow = 'BF_KOW',
  /** Léraba */
  BfLer = 'BF_LER',
  /** Loroum */
  BfLor = 'BF_LOR',
  /** Mouhoun */
  BfMou = 'BF_MOU',
  /** Namentenga */
  BfNam = 'BF_NAM',
  /** Nahouri */
  BfNao = 'BF_NAO',
  /** Nayala */
  BfNay = 'BF_NAY',
  /** Noumbiel */
  BfNou = 'BF_NOU',
  /** Oubritenga */
  BfOub = 'BF_OUB',
  /** Oudalan */
  BfOud = 'BF_OUD',
  /** Passoré */
  BfPas = 'BF_PAS',
  /** Poni */
  BfPon = 'BF_PON',
  /** Séno */
  BfSen = 'BF_SEN',
  /** Sissili */
  BfSis = 'BF_SIS',
  /** Sanmatenga */
  BfSmt = 'BF_SMT',
  /** Sanguié */
  BfSng = 'BF_SNG',
  /** Soum */
  BfSom = 'BF_SOM',
  /** Sourou */
  BfSor = 'BF_SOR',
  /** Tapoa */
  BfTap = 'BF_TAP',
  /** Tui */
  BfTui = 'BF_TUI',
  /** Yagha */
  BfYag = 'BF_YAG',
  /** Yatenga */
  BfYat = 'BF_YAT',
  /** Ziro */
  BfZir = 'BF_ZIR',
  /** Zondoma */
  BfZon = 'BF_ZON',
  /** Zoundwéogo */
  BfZou = 'BF_ZOU',
  /** Sofija-Grad */
  Bg_01 = 'BG_01',
  /** Burgas */
  Bg_02 = 'BG_02',
  /** Varna */
  Bg_03 = 'BG_03',
  /** Loveč */
  Bg_04 = 'BG_04',
  /** Montana */
  Bg_05 = 'BG_05',
  /** Plovdiv */
  Bg_06 = 'BG_06',
  /** Ruse */
  Bg_07 = 'BG_07',
  /** Sofija */
  Bg_08 = 'BG_08',
  /** Haskovo */
  Bg_09 = 'BG_09',
  /** Al Ḩadd */
  Bh_01 = 'BH_01',
  /** Al Muḩarraq */
  Bh_02 = 'BH_02',
  /** Al Manāmah */
  Bh_03 = 'BH_03',
  /** Jidd Ḩafş */
  Bh_04 = 'BH_04',
  /** Al Minţaqah ash Shamālīyah */
  Bh_05 = 'BH_05',
  /** Sitrah */
  Bh_06 = 'BH_06',
  /** Al Minţaqah al Wusţa */
  Bh_07 = 'BH_07',
  /** Madīnat ‘Īsá */
  Bh_08 = 'BH_08',
  /** Ar Rifā‘ */
  Bh_09 = 'BH_09',
  /** Al Minţaqah al Gharbīyah */
  Bh_10 = 'BH_10',
  /** Minţaqat Juzur Ḩawār */
  Bh_11 = 'BH_11',
  /** Madīnat Ḩamad */
  Bh_12 = 'BH_12',
  /** Bubanza */
  BiBb = 'BI_BB',
  /** Bujumbura */
  BiBj = 'BI_BJ',
  /** Bururi */
  BiBr = 'BI_BR',
  /** Cankuzo */
  BiCa = 'BI_CA',
  /** Cibitoke */
  BiCi = 'BI_CI',
  /** Gitega */
  BiGi = 'BI_GI',
  /** Kirundo */
  BiKi = 'BI_KI',
  /** Karuzi */
  BiKr = 'BI_KR',
  /** Kayanza */
  BiKy = 'BI_KY',
  /** Makamba */
  BiMa = 'BI_MA',
  /** Muramvya */
  BiMu = 'BI_MU',
  /** Muyinga */
  BiMy = 'BI_MY',
  /** Ngozi */
  BiNg = 'BI_NG',
  /** Rutana */
  BiRt = 'BI_RT',
  /** Ruyigi */
  BiRy = 'BI_RY',
  /** Atakora */
  BjAk = 'BJ_AK',
  /** Atlantique */
  BjAq = 'BJ_AQ',
  /** Borgou */
  BjBo = 'BJ_BO',
  /** Mono */
  BjMo = 'BJ_MO',
  /** Ouémé */
  BjOu = 'BJ_OU',
  /** Zou */
  BjZo = 'BJ_ZO',
  /** Bermuda */
  BmBm = 'BM_BM',
  /** Belait */
  BnBe = 'BN_BE',
  /** Brunei-Muara */
  BnBm = 'BN_BM',
  /** Temburong */
  BnTe = 'BN_TE',
  /** Tutong */
  BnTu = 'BN_TU',
  /** El Beni */
  BoB = 'BO_B',
  /** Cochabamba */
  BoC = 'BO_C',
  /** Chuquisaca */
  BoH = 'BO_H',
  /** La Paz */
  BoL = 'BO_L',
  /** Pando */
  BoN = 'BO_N',
  /** Oruro */
  BoO = 'BO_O',
  /** Potosi */
  BoP = 'BO_P',
  /** Santa Cruz */
  BoS = 'BO_S',
  /** Tarija */
  BoT = 'BO_T',
  /** Acre */
  BrAc = 'BR_AC',
  /** Alagoas */
  BrAl = 'BR_AL',
  /** Amazonas */
  BrAm = 'BR_AM',
  /** Amapá */
  BrAp = 'BR_AP',
  /** Bahia */
  BrBa = 'BR_BA',
  /** Ceará */
  BrCe = 'BR_CE',
  /** Distrito Federal */
  BrDf = 'BR_DF',
  /** Espírito Santo */
  BrEs = 'BR_ES',
  /** Goiás */
  BrGo = 'BR_GO',
  /** Maranhāo */
  BrMa = 'BR_MA',
  /** Minas Gerais */
  BrMg = 'BR_MG',
  /** Mato Grosso do Sul */
  BrMs = 'BR_MS',
  /** Mato Grosso */
  BrMt = 'BR_MT',
  /** Pará */
  BrPa = 'BR_PA',
  /** Paraíba */
  BrPb = 'BR_PB',
  /** Pernambuco */
  BrPe = 'BR_PE',
  /** Piauí */
  BrPi = 'BR_PI',
  /** Paraná */
  BrPr = 'BR_PR',
  /** Rio de Janeiro */
  BrRj = 'BR_RJ',
  /** Rio Grande do Norte */
  BrRn = 'BR_RN',
  /** Roraima */
  BrRr = 'BR_RR',
  /** Rio Grande do Sul */
  BrRs = 'BR_RS',
  /** Rondônia */
  BrR_0 = 'BR_R_0',
  /** Santa Catarina */
  BrSc = 'BR_SC',
  /** Sergipe */
  BrSe = 'BR_SE',
  /** São Paulo */
  BrSp = 'BR_SP',
  /** Tocantins */
  BrTo = 'BR_TO',
  /** Acklins and Crooked Islands */
  BsAc = 'BS_AC',
  /** Bimini */
  BsBi = 'BS_BI',
  /** Cat Island */
  BsCi = 'BS_CI',
  /** Exuma */
  BsEx = 'BS_EX',
  /** Fresh Creek */
  BsFc = 'BS_FC',
  /** Freeport */
  BsFp = 'BS_FP',
  /** Governor's Harbour */
  BsGh = 'BS_GH',
  /** Green Turtle Cay */
  BsGt = 'BS_GT',
  /** Harbour Island */
  BsHi = 'BS_HI',
  /** High Rock */
  BsHr = 'BS_HR',
  /** Inagua */
  BsIn = 'BS_IN',
  /** Kemps Bay */
  BsKb = 'BS_KB',
  /** Long Island */
  BsLi = 'BS_LI',
  /** Mayaguana */
  BsMg = 'BS_MG',
  /** Marsh Harbour */
  BsMh = 'BS_MH',
  /** Nicholls Town and Berry Islands */
  BsNb = 'BS_NB',
  /** New Providence */
  BsNp = 'BS_NP',
  /** Ragged Island */
  BsRi = 'BS_RI',
  /** Rock Sound */
  BsRs = 'BS_RS',
  /** Sandy Point */
  BsSp = 'BS_SP',
  /** San Salvador and Rum Cay */
  BsSr = 'BS_SR',
  /** Paro */
  Bt_11 = 'BT_11',
  /** Chhukha */
  Bt_12 = 'BT_12',
  /** Ha */
  Bt_13 = 'BT_13',
  /** Samtse */
  Bt_14 = 'BT_14',
  /** Thimphu */
  Bt_15 = 'BT_15',
  /** Tsirang */
  Bt_21 = 'BT_21',
  /** Dagana */
  Bt_22 = 'BT_22',
  /** Punakha */
  Bt_23 = 'BT_23',
  /** Wangdue Phodrang */
  Bt_24 = 'BT_24',
  /** Sarpang */
  Bt_31 = 'BT_31',
  /** Trongsa */
  Bt_32 = 'BT_32',
  /** Bumthang */
  Bt_33 = 'BT_33',
  /** Zhemgang */
  Bt_34 = 'BT_34',
  /** Trashigang */
  Bt_41 = 'BT_41',
  /** Monggar */
  Bt_42 = 'BT_42',
  /** Pemagatshel */
  Bt_43 = 'BT_43',
  /** Lhuentse */
  Bt_44 = 'BT_44',
  /** Samdrup Jongkha */
  Bt_45 = 'BT_45',
  /** Gasa */
  BtGa = 'BT_GA',
  /** Trashi Yangtse */
  BtTy = 'BT_TY',
  /** Bouvet Island */
  BvBv = 'BV_BV',
  /** Central [Serowe-Palapye] */
  BwCe = 'BW_CE',
  /** Chobe */
  BwCh = 'BW_CH',
  /** Ghanzi */
  BwGh = 'BW_GH',
  /** Kgalagadi */
  BwKg = 'BW_KG',
  /** Kgatleng */
  BwKl = 'BW_KL',
  /** Kweneng */
  BwKw = 'BW_KW',
  /** North-East */
  BwNe = 'BW_NE',
  /** Ngamiland [North-West] */
  BwNg = 'BW_NG',
  /** South-East */
  BwSe = 'BW_SE',
  /** Southern [Ngwaketse] */
  BwSo = 'BW_SO',
  /** Brestskaya voblasts' */
  ByBr = 'BY_BR',
  /** Homyel'skaya voblasts’ */
  ByHo = 'BY_HO',
  /** Hrodnenskaya voblasts' */
  ByHr = 'BY_HR',
  /** Mahilyowskaya voblasts' */
  ByMa = 'BY_MA',
  /** Minskaya voblasts' */
  ByMi = 'BY_MI',
  /** Vitsyebskaya voblasts' */
  ByVi = 'BY_VI',
  /** Belize */
  BzBz = 'BZ_BZ',
  /** Cayo */
  BzCy = 'BZ_CY',
  /** Corozal */
  BzCzl = 'BZ_CZL',
  /** Orange Walk */
  BzOw = 'BZ_OW',
  /** Stann Creek */
  BzSc = 'BZ_SC',
  /** Toledo */
  BzTol = 'BZ_TOL',
  /** Alberta */
  CaAb = 'CA_AB',
  /** British Columbia (Colombie-Britannique) */
  CaBc = 'CA_BC',
  /** Manitoba */
  CaMb = 'CA_MB',
  /** New Brunswick (Nouveau-Brunswick) */
  CaNb = 'CA_NB',
  /** Newfoundland and Labrador (Terre-Neuve) */
  CaNl = 'CA_NL',
  /** Nova Scotia (Nouvelle-Écosse) */
  CaNs = 'CA_NS',
  /** Northwest Territories (Territoires du Nord-Ouest) */
  CaNt = 'CA_NT',
  /** Nunavut */
  CaNu = 'CA_NU',
  /** Ontario */
  CaOn = 'CA_ON',
  /** Prince Edward Island (Île-du-Prince-Édouard) */
  CaPe = 'CA_PE',
  /** Quebec (Québec) */
  CaQc = 'CA_QC',
  /** Saskatchewan */
  CaSk = 'CA_SK',
  /** Yukon Territory (Teritoire du Yukon) */
  CaYt = 'CA_YT',
  /** Cocos (Keeling) Islands */
  CcCc = 'CC_CC',
  /** Bas-Congo */
  CdBc = 'CD_BC',
  /** Bandundu */
  CdBn = 'CD_BN',
  /** Équateur */
  CdEq = 'CD_EQ',
  /** Haut-Congo */
  CdHc = 'CD_HC',
  /** Katanga */
  CdKa = 'CD_KA',
  /** Kasai-Oriental */
  CdKe = 'CD_KE',
  /** Kinshasa */
  CdKn = 'CD_KN',
  /** Kasai-Occidental */
  CdKw = 'CD_KW',
  /** Maniema */
  CdMa = 'CD_MA',
  /** Nord-Kivu */
  CdNk = 'CD_NK',
  /** Sud-Kivu */
  CdSk = 'CD_SK',
  /** Ouham */
  CfAc = 'CF_AC',
  /** Bamingui-Bangoran */
  CfBb = 'CF_BB',
  /** Bangui */
  CfBgf = 'CF_BGF',
  /** Basse-Kotto */
  CfBk = 'CF_BK',
  /** Haute-Kotto */
  CfHk = 'CF_HK',
  /** Haut-Mbomou */
  CfHm = 'CF_HM',
  /** Mambéré-Kadéï */
  CfHs = 'CF_HS',
  /** Nana-Grébizi */
  CfKb = 'CF_KB',
  /** Kémo */
  CfKg = 'CF_KG',
  /** Lobaye */
  CfLb = 'CF_LB',
  /** Mbomou */
  CfMb = 'CF_MB',
  /** Ombella-Mpoko */
  CfMp = 'CF_MP',
  /** Nana-Mambéré */
  CfNm = 'CF_NM',
  /** Ouham-Pendé */
  CfOp = 'CF_OP',
  /** Sangha-Mbaéré */
  CfSe = 'CF_SE',
  /** Ouaka */
  CfUk = 'CF_UK',
  /** Vakaga */
  CfVk = 'CF_VK',
  /** Lékoumou */
  Cg_2 = 'CG_2',
  /** Kouilou */
  Cg_5 = 'CG_5',
  /** Likouala */
  Cg_7 = 'CG_7',
  /** Cuvette */
  Cg_8 = 'CG_8',
  /** Niari */
  Cg_9 = 'CG_9',
  /** Bouenza */
  Cg_11 = 'CG_11',
  /** Pool */
  Cg_12 = 'CG_12',
  /** Sangha */
  Cg_13 = 'CG_13',
  /** Plateaux */
  Cg_14 = 'CG_14',
  /** Cuvette-Ouest */
  Cg_15 = 'CG_15',
  /** Brazzaville */
  CgBzv = 'CG_BZV',
  /** Aargau */
  ChAg = 'CH_AG',
  /** Appenzell Inner-Rhoden */
  ChAi = 'CH_AI',
  /** Appenzell Ausser-Rhoden */
  ChAr = 'CH_AR',
  /** Bern */
  ChBe = 'CH_BE',
  /** Basel-Landschaft */
  ChBl = 'CH_BL',
  /** Basel-Stadt */
  ChBs = 'CH_BS',
  /** Freiburg */
  ChFr = 'CH_FR',
  /** Geneve */
  ChGe = 'CH_GE',
  /** Glarus */
  ChGl = 'CH_GL',
  /** Graubünden */
  ChGr = 'CH_GR',
  /** Jura */
  ChJu = 'CH_JU',
  /** Luzern */
  ChLu = 'CH_LU',
  /** Neuchatel */
  ChNe = 'CH_NE',
  /** Nidwalden */
  ChNw = 'CH_NW',
  /** Obwalden */
  ChOw = 'CH_OW',
  /** Sankt Gallen */
  ChSg = 'CH_SG',
  /** Schaffhausen */
  ChSh = 'CH_SH',
  /** Solothurn */
  ChSo = 'CH_SO',
  /** Schwyz */
  ChSz = 'CH_SZ',
  /** Thurgau */
  ChTg = 'CH_TG',
  /** Ticino */
  ChTi = 'CH_TI',
  /** Uri */
  ChUr = 'CH_UR',
  /** Vaud */
  ChVd = 'CH_VD',
  /** Wallis */
  ChVs = 'CH_VS',
  /** Zug */
  ChZg = 'CH_ZG',
  /** Zürich */
  ChZh = 'CH_ZH',
  /** Lagunes (Région des) */
  Ci_01 = 'CI_01',
  /** Haut-Sassandra (Région du) */
  Ci_02 = 'CI_02',
  /** Savanes (Région des) */
  Ci_03 = 'CI_03',
  /** Vallée du Bandama (Région de la) */
  Ci_04 = 'CI_04',
  /** Moyen-Comoé (Région du) */
  Ci_05 = 'CI_05',
  /** 18 Montagnes (Région des) */
  Ci_06 = 'CI_06',
  /** Lacs (Région des) */
  Ci_07 = 'CI_07',
  /** Zanzan (Région du) */
  Ci_08 = 'CI_08',
  /** Bas-Sassandra (Région du) */
  Ci_09 = 'CI_09',
  /** Denguélé (Région du) */
  Ci_10 = 'CI_10',
  /** Nzi-Comoé (Région) */
  Ci_11 = 'CI_11',
  /** Marahoué (Région de la) */
  Ci_12 = 'CI_12',
  /** Sud-Comoé (Région du) */
  Ci_13 = 'CI_13',
  /** Worodougou (Région du) */
  Ci_14 = 'CI_14',
  /** Sud-Bandama (Région du) */
  Ci_15 = 'CI_15',
  /** Agnébi (Région de l') */
  Ci_16 = 'CI_16',
  /** Cook Islands */
  CkCk = 'CK_CK',
  /** Aisén del General Carlos Ibáñiez del Campo */
  ClAi = 'CL_AI',
  /** Antofagasta */
  ClAn = 'CL_AN',
  /** Araucanía */
  ClAr = 'CL_AR',
  /** Atacama */
  ClAt = 'CL_AT',
  /** Bío-Bío */
  ClBi = 'CL_BI',
  /** Coquimbo */
  ClCo = 'CL_CO',
  /** Libertador General Bernardo O'Higgins */
  ClLi = 'CL_LI',
  /** Los Lagos */
  ClLl = 'CL_LL',
  /** Magallanes */
  ClMa = 'CL_MA',
  /** Maule */
  ClMl = 'CL_ML',
  /** Regíon Metropolitana de Santiago */
  ClRm = 'CL_RM',
  /** Tarapacá */
  ClTa = 'CL_TA',
  /** Valparaiso */
  ClVs = 'CL_VS',
  /** Adamaoua */
  CmAd = 'CM_AD',
  /** Centre */
  CmCe = 'CM_CE',
  /** Far North */
  CmEn = 'CM_EN',
  /** Est */
  CmEs = 'CM_ES',
  /** Littoral */
  CmLt = 'CM_LT',
  /** North */
  CmNo = 'CM_NO',
  /** North-West */
  CmNw = 'CM_NW',
  /** West */
  CmOu = 'CM_OU',
  /** South */
  CmSu = 'CM_SU',
  /** South-West */
  CmSw = 'CM_SW',
  /** Beijing */
  Cn_11 = 'CN_11',
  /** Tianjin */
  Cn_12 = 'CN_12',
  /** Hebei */
  Cn_13 = 'CN_13',
  /** Shanxi */
  Cn_14 = 'CN_14',
  /** Nei Monggol */
  Cn_15 = 'CN_15',
  /** Liaoning */
  Cn_21 = 'CN_21',
  /** Jilin */
  Cn_22 = 'CN_22',
  /** Heilongjiang */
  Cn_23 = 'CN_23',
  /** Shanghai */
  Cn_31 = 'CN_31',
  /** Jiangsu */
  Cn_32 = 'CN_32',
  /** Zhejiang */
  Cn_33 = 'CN_33',
  /** Anhui */
  Cn_34 = 'CN_34',
  /** Fujian */
  Cn_35 = 'CN_35',
  /** Jiangxi */
  Cn_36 = 'CN_36',
  /** Shandong */
  Cn_37 = 'CN_37',
  /** Henan */
  Cn_41 = 'CN_41',
  /** Hubei */
  Cn_42 = 'CN_42',
  /** Hunan */
  Cn_43 = 'CN_43',
  /** Guangdong */
  Cn_44 = 'CN_44',
  /** Guangxi */
  Cn_45 = 'CN_45',
  /** Hainan */
  Cn_46 = 'CN_46',
  /** Chongqing */
  Cn_50 = 'CN_50',
  /** Sichuan */
  Cn_51 = 'CN_51',
  /** Guizhou */
  Cn_52 = 'CN_52',
  /** Yunnan */
  Cn_53 = 'CN_53',
  /** Xizang */
  Cn_54 = 'CN_54',
  /** Shaanxi */
  Cn_61 = 'CN_61',
  /** Gansu */
  Cn_62 = 'CN_62',
  /** Qinghai */
  Cn_63 = 'CN_63',
  /** Ningxia */
  Cn_64 = 'CN_64',
  /** Xinjiang */
  Cn_65 = 'CN_65',
  /** Taiwan */
  Cn_71 = 'CN_71',
  /** Hong Kong */
  Cn_91 = 'CN_91',
  /** Amazonas */
  CoAma = 'CO_AMA',
  /** Antioguia */
  CoAnt = 'CO_ANT',
  /** Arauca */
  CoAra = 'CO_ARA',
  /** Atlántico */
  CoAtl = 'CO_ATL',
  /** Bolívar */
  CoBol = 'CO_BOL',
  /** Boyacá */
  CoBoy = 'CO_BOY',
  /** Caldas */
  CoCal = 'CO_CAL',
  /** Caquetá */
  CoCaq = 'CO_CAQ',
  /** Casanare */
  CoCas = 'CO_CAS',
  /** Cauca */
  CoCau = 'CO_CAU',
  /** Cesar */
  CoCes = 'CO_CES',
  /** Chocó */
  CoCho = 'CO_CHO',
  /** Córdoba */
  CoCor = 'CO_COR',
  /** Cundinamarca */
  CoCun = 'CO_CUN',
  /** Distrito Capital de Santa Fe de Bogota */
  CoDc = 'CO_DC',
  /** Guainía */
  CoGua = 'CO_GUA',
  /** Guaviare */
  CoGuv = 'CO_GUV',
  /** Huila */
  CoHui = 'CO_HUI',
  /** La Guajira */
  CoLag = 'CO_LAG',
  /** Magdalena */
  CoMag = 'CO_MAG',
  /** Meta */
  CoMet = 'CO_MET',
  /** Nariño */
  CoNar = 'CO_NAR',
  /** Norte de Santander */
  CoNsa = 'CO_NSA',
  /** Putumayo */
  CoPut = 'CO_PUT',
  /** Quindío */
  CoQui = 'CO_QUI',
  /** Risaralda */
  CoRis = 'CO_RIS',
  /** Santander */
  CoSan = 'CO_SAN',
  /** San Andrés, Providencia y Santa Catalina */
  CoSap = 'CO_SAP',
  /** Sucre */
  CoSuc = 'CO_SUC',
  /** Tolima */
  CoTol = 'CO_TOL',
  /** Valle del Cauca */
  CoVac = 'CO_VAC',
  /** Vaupés */
  CoVau = 'CO_VAU',
  /** Vichada */
  CoVid = 'CO_VID',
  /** Alajuela */
  CrA = 'CR_A',
  /** Cartago */
  CrC = 'CR_C',
  /** Guanacaste */
  CrG = 'CR_G',
  /** Heredia */
  CrH = 'CR_H',
  /** Limón */
  CrL = 'CR_L',
  /** Puntarenas */
  CrP = 'CR_P',
  /** San José */
  CrSj = 'CR_SJ',
  /** Pinar del Río */
  Cu_01 = 'CU_01',
  /** La Habana */
  Cu_02 = 'CU_02',
  /** Ciudad de La Habana */
  Cu_03 = 'CU_03',
  /** Matanzas */
  Cu_04 = 'CU_04',
  /** Villa Clara */
  Cu_05 = 'CU_05',
  /** Sancti Spíritus */
  Cu_07 = 'CU_07',
  /** Camagüey */
  Cu_09 = 'CU_09',
  /** Las Tunas */
  Cu_10 = 'CU_10',
  /** Holguín */
  Cu_11 = 'CU_11',
  /** Granma */
  Cu_12 = 'CU_12',
  /** Santiago de Cuba */
  Cu_13 = 'CU_13',
  /** Guantánamo */
  Cu_14 = 'CU_14',
  /** Isla de la Juventud */
  Cu_99 = 'CU_99',
  /** Ilhas de Barlavento */
  CvB = 'CV_B',
  /** Ilhas de Sotavento */
  CvS = 'CV_S',
  /** Christmas Island */
  CxCx = 'CX_CX',
  /** Lefkosia (Lefkoşa) */
  Cy_01 = 'CY_01',
  /** Lemesos (Leymosun) */
  Cy_02 = 'CY_02',
  /** Larnaka */
  Cy_03 = 'CY_03',
  /** Ammochostos (Mağusa) */
  Cy_04 = 'CY_04',
  /** Pafos (Baf) */
  Cy_05 = 'CY_05',
  /** Keryneia (Girne) */
  Cy_06 = 'CY_06',
  /** Jihočeský kraj */
  CzCjc = 'CZ_CJC',
  /** Jihomoravský kraj */
  CzCjm = 'CZ_CJM',
  /** Severočeský kraj */
  CzCsc = 'CZ_CSC',
  /** Severomoravský kraj */
  CzCsm = 'CZ_CSM',
  /** Středočeský kraj */
  CzCst = 'CZ_CST',
  /** Východočeský kraj */
  CzCvc = 'CZ_CVC',
  /** Západočeský kraj */
  CzCzc = 'CZ_CZC',
  /** Praha */
  CzPrg = 'CZ_PRG',
  /** Brandenburg */
  DeBb = 'DE_BB',
  /** Berlin */
  DeBe = 'DE_BE',
  /** Baden-Württemberg */
  DeBw = 'DE_BW',
  /** Bayern */
  DeBy = 'DE_BY',
  /** Bremen */
  DeHb = 'DE_HB',
  /** Hessen */
  DeHe = 'DE_HE',
  /** Hamburg */
  DeHh = 'DE_HH',
  /** Mecklenburg-Vorpommern */
  DeMv = 'DE_MV',
  /** Niedersachsen */
  DeNi = 'DE_NI',
  /** Nordrhein-Westfalen */
  DeNw = 'DE_NW',
  /** Rheinland-Pfalz */
  DeRp = 'DE_RP',
  /** Schleswig-Holstein */
  DeSh = 'DE_SH',
  /** Saarland */
  DeSl = 'DE_SL',
  /** Sachsen */
  DeSn = 'DE_SN',
  /** Sachsen-Anhalt */
  DeSt = 'DE_ST',
  /** Thüringen */
  DeTh = 'DE_TH',
  /** Ali Sabieh */
  DjAs = 'DJ_AS',
  /** Dikhil */
  DjDi = 'DJ_DI',
  /** Djibouti */
  DjDj = 'DJ_DJ',
  /** Obock */
  DjOb = 'DJ_OB',
  /** Tadjoura */
  DjTa = 'DJ_TA',
  /** Kǿbenhavn */
  Dk_015 = 'DK_015',
  /** Frederiksborg */
  Dk_020 = 'DK_020',
  /** Roskilde */
  Dk_025 = 'DK_025',
  /** Vestsjælland */
  Dk_030 = 'DK_030',
  /** Storstrǿm */
  Dk_035 = 'DK_035',
  /** Bornholm */
  Dk_040 = 'DK_040',
  /** Fyn */
  Dk_042 = 'DK_042',
  /** Sǿnderjylland */
  Dk_050 = 'DK_050',
  /** Ribe */
  Dk_055 = 'DK_055',
  /** Vejle */
  Dk_060 = 'DK_060',
  /** Ringkǿbing */
  Dk_065 = 'DK_065',
  /** Århus */
  Dk_070 = 'DK_070',
  /** Viborg */
  Dk_076 = 'DK_076',
  /** Nordjylland */
  Dk_080 = 'DK_080',
  /** Kǿbenhavn */
  Dk_101 = 'DK_101',
  /** Frederiksberg */
  Dk_147 = 'DK_147',
  /** Dominica */
  DmDm = 'DM_DM',
  /** La Altagracia */
  DoAl = 'DO_AL',
  /** Azua */
  DoAz = 'DO_AZ',
  /** Barahona */
  DoBh = 'DO_BH',
  /** Bahoruco */
  DoBr = 'DO_BR',
  /** San Cristóbal */
  DoCr = 'DO_CR',
  /** Dajabón */
  DoDa = 'DO_DA',
  /** Distrito National (Santo Domingo) */
  DoDn = 'DO_DN',
  /** Duarte */
  DoDu = 'DO_DU',
  /** La Estrelleta [Elías Piña] */
  DoEp = 'DO_EP',
  /** Hato Mayor */
  DoHm = 'DO_HM',
  /** Independencia */
  DoIn = 'DO_IN',
  /** San Juan */
  DoJu = 'DO_JU',
  /** Monte Cristi */
  DoMc = 'DO_MC',
  /** Monseñor Nouel */
  DoMn = 'DO_MN',
  /** Monte Plata */
  DoMp = 'DO_MP',
  /** María Trinidad Sánchez */
  DoMt = 'DO_MT',
  /** San Pedro de Macorís */
  DoPm = 'DO_PM',
  /** Pedernales */
  DoPn = 'DO_PN',
  /** Puerto Plata */
  DoPp = 'DO_PP',
  /** Peravia */
  DoPr = 'DO_PR',
  /** La Romana */
  DoRo = 'DO_RO',
  /** Salcedo */
  DoSc = 'DO_SC',
  /** El Seibo */
  DoSe = 'DO_SE',
  /** Samaná */
  DoSm = 'DO_SM',
  /** Santiago Rodríguez */
  DoSr = 'DO_SR',
  /** Santiago */
  DoSt = 'DO_ST',
  /** Sanchez Ramírez */
  DoSz = 'DO_SZ',
  /** Valverde */
  DoVa = 'DO_VA',
  /** La Vega */
  DoVe = 'DO_VE',
  /** Adrar */
  Dz_01 = 'DZ_01',
  /** Chlef */
  Dz_02 = 'DZ_02',
  /** Laghouat */
  Dz_03 = 'DZ_03',
  /** Oum el Bouaghi */
  Dz_04 = 'DZ_04',
  /** Batna */
  Dz_05 = 'DZ_05',
  /** Béjaïa */
  Dz_06 = 'DZ_06',
  /** Biskra */
  Dz_07 = 'DZ_07',
  /** Béchar */
  Dz_08 = 'DZ_08',
  /** Blida */
  Dz_09 = 'DZ_09',
  /** Bouira */
  Dz_10 = 'DZ_10',
  /** Tamanghasset */
  Dz_11 = 'DZ_11',
  /** Tébessa */
  Dz_12 = 'DZ_12',
  /** Tlemcen */
  Dz_13 = 'DZ_13',
  /** Tiaret */
  Dz_14 = 'DZ_14',
  /** Tizi Ouzou */
  Dz_15 = 'DZ_15',
  /** Alger */
  Dz_16 = 'DZ_16',
  /** Djelfa */
  Dz_17 = 'DZ_17',
  /** Jijel */
  Dz_18 = 'DZ_18',
  /** Sétif */
  Dz_19 = 'DZ_19',
  /** Saïda */
  Dz_20 = 'DZ_20',
  /** Skikda */
  Dz_21 = 'DZ_21',
  /** Sidi Bel Abbès */
  Dz_22 = 'DZ_22',
  /** Guelma */
  Dz_24 = 'DZ_24',
  /** Constantine */
  Dz_25 = 'DZ_25',
  /** Médéa */
  Dz_26 = 'DZ_26',
  /** Mostaganem */
  Dz_27 = 'DZ_27',
  /** Msila */
  Dz_28 = 'DZ_28',
  /** Mascara */
  Dz_29 = 'DZ_29',
  /** Ouargla */
  Dz_30 = 'DZ_30',
  /** Oran */
  Dz_31 = 'DZ_31',
  /** El Bayadh */
  Dz_32 = 'DZ_32',
  /** Illizi */
  Dz_33 = 'DZ_33',
  /** Bordj Bou Arréridj */
  Dz_34 = 'DZ_34',
  /** Boumerdès */
  Dz_35 = 'DZ_35',
  /** El Tarf */
  Dz_36 = 'DZ_36',
  /** Tindouf */
  Dz_37 = 'DZ_37',
  /** Tissemsilt */
  Dz_38 = 'DZ_38',
  /** El Oued */
  Dz_39 = 'DZ_39',
  /** Khenchela */
  Dz_40 = 'DZ_40',
  /** Souk Ahras */
  Dz_41 = 'DZ_41',
  /** Tipaza */
  Dz_42 = 'DZ_42',
  /** Mila */
  Dz_43 = 'DZ_43',
  /** Aïn Defla */
  Dz_44 = 'DZ_44',
  /** Naama */
  Dz_45 = 'DZ_45',
  /** Aïn Témouchent */
  Dz_46 = 'DZ_46',
  /** Ghardaïa */
  Dz_47 = 'DZ_47',
  /** Relizane */
  Dz_48 = 'DZ_48',
  /** Azuay */
  EcA = 'EC_A',
  /** Bolívar */
  EcB = 'EC_B',
  /** Carchi */
  EcC = 'EC_C',
  /** Esmeraldas */
  EcE = 'EC_E',
  /** Cañar */
  EcF = 'EC_F',
  /** Guayas */
  EcG = 'EC_G',
  /** Chimborazo */
  EcH = 'EC_H',
  /** Imbabura */
  EcI = 'EC_I',
  /** Loja */
  EcL = 'EC_L',
  /** Manabí */
  EcM = 'EC_M',
  /** Napo */
  EcN = 'EC_N',
  /** El Oro */
  EcO = 'EC_O',
  /** Pichincha */
  EcP = 'EC_P',
  /** Los Ríos */
  EcR = 'EC_R',
  /** Morona-Santiago */
  EcS = 'EC_S',
  /** Tungurahua */
  EcT = 'EC_T',
  /** Sucumbíos */
  EcU = 'EC_U',
  /** Galápagos */
  EcW = 'EC_W',
  /** Cotopaxi */
  EcX = 'EC_X',
  /** Pastaza */
  EcY = 'EC_Y',
  /** Zarnora-Chinchipe */
  EcZ = 'EC_Z',
  /** Harjumaa */
  Ee_37 = 'EE_37',
  /** Hiiumaa */
  Ee_39 = 'EE_39',
  /** Ida-Virumaa */
  Ee_44 = 'EE_44',
  /** Jōgevamaa */
  Ee_49 = 'EE_49',
  /** Järvamaa */
  Ee_51 = 'EE_51',
  /** Läänemaa */
  Ee_57 = 'EE_57',
  /** Lääne-Virumaa */
  Ee_59 = 'EE_59',
  /** Pōlvamaa */
  Ee_65 = 'EE_65',
  /** Pärnumaa */
  Ee_67 = 'EE_67',
  /** Raplamaa */
  Ee_70 = 'EE_70',
  /** Saaremaa */
  Ee_74 = 'EE_74',
  /** Tartumaa */
  Ee_78 = 'EE_78',
  /** Valgamaa */
  Ee_82 = 'EE_82',
  /** Viljandimaa */
  Ee_84 = 'EE_84',
  /** Vōrumaa */
  Ee_86 = 'EE_86',
  /** Al Iskandarīyah */
  EgAlx = 'EG_ALX',
  /** Aswān */
  EgAsn = 'EG_ASN',
  /** Asyūţ */
  EgAst = 'EG_AST',
  /** Al Baḩr al Aḩmar */
  EgBa = 'EG_BA',
  /** Al Buḩayrah */
  EgBh = 'EG_BH',
  /** Banī Suwayf */
  EgBns = 'EG_BNS',
  /** Al Qāhirah */
  EgC = 'EG_C',
  /** Ad Daqahlīyah */
  EgDk = 'EG_DK',
  /** Dumyāţ */
  EgDt = 'EG_DT',
  /** Al Fayyūm */
  EgFym = 'EG_FYM',
  /** Al Gharbīyah */
  EgGh = 'EG_GH',
  /** Al Jīzah */
  EgGz = 'EG_GZ',
  /** Al Ismā‘īlīyah */
  EgIs = 'EG_IS',
  /** Janūb Sīnā' */
  EgJs = 'EG_JS',
  /** Al Qalyūbīyah */
  EgKb = 'EG_KB',
  /** Kafr ash Shaykh */
  EgKfs = 'EG_KFS',
  /** Qinā */
  EgKn = 'EG_KN',
  /** Al Minyā */
  EgMn = 'EG_MN',
  /** Al Minūfīyah */
  EgMnf = 'EG_MNF',
  /** Maţrūḩ */
  EgMt = 'EG_MT',
  /** Būr Sa‘īd */
  EgPts = 'EG_PTS',
  /** Sūhāj */
  EgShg = 'EG_SHG',
  /** Ash Sharqīyah */
  EgShr = 'EG_SHR',
  /** Shamāl Sīnā' */
  EgSin = 'EG_SIN',
  /** As Suways */
  EgSuz = 'EG_SUZ',
  /** Al Wādī al Jadīd */
  EgWad = 'EG_WAD',
  /** Western Sahara */
  EhEh = 'EH_EH',
  /** Akele Guzai [Akalä Guzay] */
  ErAg = 'ER_AG',
  /** Asmara [Asmära] */
  ErAs = 'ER_AS',
  /** Barka */
  ErBa = 'ER_BA',
  /** Denkalia [Dänkali] */
  ErDe = 'ER_DE',
  /** Gash-Setit [Gaš enna Sätit] */
  ErGs = 'ER_GS',
  /** Hamasien [Hamasén] */
  ErHa = 'ER_HA',
  /** Sahel */
  ErSa = 'ER_SA',
  /** Semhar [Sämhar] */
  ErSm = 'ER_SM',
  /** Senhit [Sänhet] */
  ErSn = 'ER_SN',
  /** Seraye [Särayé] */
  ErSr = 'ER_SR',
  /** Andalucía */
  EsAn = 'ES_AN',
  /** Aragón */
  EsAr = 'ES_AR',
  /** Castilla y León */
  EsCl = 'ES_CL',
  /** Castilla-La Mancha */
  EsCm = 'ES_CM',
  /** Canarias */
  EsCn = 'ES_CN',
  /** Cataluña */
  EsCt = 'ES_CT',
  /** Extremadura */
  EsEx = 'ES_EX',
  /** Galicia */
  EsGa = 'ES_GA',
  /** La Rioja */
  EsLo = 'ES_LO',
  /** Madrid, Comunidad de */
  EsM = 'ES_M',
  /** Murcia, Región de */
  EsMu = 'ES_MU',
  /** Navarra, Comunidad Foral de */
  EsNa = 'ES_NA',
  /** Asturias, Principado de */
  EsO = 'ES_O',
  /** Islas Baleares */
  EsPm = 'ES_PM',
  /** País Vasco */
  EsPv = 'ES_PV',
  /** Cantabria */
  EsS = 'ES_S',
  /** Valenciana, Comunidad */
  EsVc = 'ES_VC',
  /** Addis Ababa [Addis Abeba] */
  EtAa = 'ET_AA',
  /** Afar */
  EtAf = 'ET_AF',
  /** Amara [Amhara] */
  EtAm = 'ET_AM',
  /** Benshangul-Gumaz [Bénishangul] */
  EtBe = 'ET_BE',
  /** Gambela Peoples [Gambéla] */
  EtGa = 'ET_GA',
  /** Harari People [Harer] */
  EtHa = 'ET_HA',
  /** Oromia [Oromo] */
  EtOr = 'ET_OR',
  /** Southern Nations, Nationalities and Peoples */
  EtSn = 'ET_SN',
  /** Somali */
  EtSo = 'ET_SO',
  /** Tigrai [Tegré] */
  EtTi = 'ET_TI',
  /** Ahvenanmaan lääni */
  FiAl = 'FI_AL',
  /** Etelä-Suomen lääni */
  FiEs = 'FI_ES',
  /** Itä-Suomen lääni */
  FiIs = 'FI_IS',
  /** Lapin lääni */
  FiLl = 'FI_LL',
  /** Länsi-Suomen lääni */
  FiLs = 'FI_LS',
  /** Oulun lääni */
  FiOl = 'FI_OL',
  /** Central */
  FjC = 'FJ_C',
  /** Eastern */
  FjE = 'FJ_E',
  /** Northern */
  FjN = 'FJ_N',
  /** Rotuma */
  FjR = 'FJ_R',
  /** Western */
  FjW = 'FJ_W',
  /** Falkland Islands (Malvinas) */
  FkFk = 'FK_FK',
  /** Kosrae */
  FmKsa = 'FM_KSA',
  /** Pohnpei */
  FmPni = 'FM_PNI',
  /** chuuk */
  FmTrk = 'FM_TRK',
  /** Yap */
  FmYap = 'FM_YAP',
  /** Faroe Islands */
  FoFo = 'FO_FO',
  /** Alsace */
  FrA = 'FR_A',
  /** Aquitaine */
  FrB = 'FR_B',
  /** Auvergne */
  FrC = 'FR_C',
  /** Bourgogne */
  FrD = 'FR_D',
  /** Bretagne */
  FrE = 'FR_E',
  /** Centre */
  FrF = 'FR_F',
  /** Champagne-Ardenne */
  FrG = 'FR_G',
  /** Guyane (francaise) */
  FrGf = 'FR_GF',
  /** Guadeloupe */
  FrGp = 'FR_GP',
  /** Corse */
  FrH = 'FR_H',
  /** Franche-Comté */
  FrI = 'FR_I',
  /** Île-de-France */
  FrJ = 'FR_J',
  /** Languedoc-Roussillon */
  FrK = 'FR_K',
  /** Limousin */
  FrL = 'FR_L',
  /** Lorraine */
  FrM = 'FR_M',
  /** Martinique */
  FrMq = 'FR_MQ',
  /** Midi-Pyrénées */
  FrN = 'FR_N',
  /** Nouvelle-Calédonie */
  FrNc = 'FR_NC',
  /** Nord-Pas-de-Calais */
  FrO = 'FR_O',
  /** Basse-Normandie */
  FrP = 'FR_P',
  /** Polynésie française */
  FrPf = 'FR_PF',
  /** Saint-Pierre-et-Miquelon */
  FrPm = 'FR_PM',
  /** Haute-Normandie */
  FrQ = 'FR_Q',
  /** Pays de la Loire */
  FrR = 'FR_R',
  /** Réunion */
  FrRe = 'FR_RE',
  /** Picardie */
  FrS = 'FR_S',
  /** Poitou-Charentes */
  FrT = 'FR_T',
  /** Terres Australes */
  FrTf = 'FR_TF',
  /** Provence-Alpes-Côte d'Azur */
  FrU = 'FR_U',
  /** Rhône-Alpes */
  FrV = 'FR_V',
  /** Wallis et Futuna */
  FrWf = 'FR_WF',
  /** Mayotte */
  FrYt = 'FR_YT',
  /** Estuaire */
  Ga_1 = 'GA_1',
  /** Haut-Ogooué */
  Ga_2 = 'GA_2',
  /** Moyen-Ogooué */
  Ga_3 = 'GA_3',
  /** Ngounié */
  Ga_4 = 'GA_4',
  /** Nyanga */
  Ga_5 = 'GA_5',
  /** Ogooué-Ivindo */
  Ga_6 = 'GA_6',
  /** Ogooué-Lolo */
  Ga_7 = 'GA_7',
  /** Ogooué-Maritime */
  Ga_8 = 'GA_8',
  /** Woleu-Ntem */
  Ga_9 = 'GA_9',
  /** Caerphilly [Caerffili] */
  GbCay = 'GB_CAY',
  /** Channel Islands */
  GbCha = 'GB_CHA',
  /** Cheshire East */
  GbChe = 'GB_CHE',
  /** England */
  GbEng = 'GB_ENG',
  /** East Sussex */
  GbEsx = 'GB_ESX',
  /** Gloucestershire */
  GbGls = 'GB_GLS',
  /** Hampshire */
  GbHam = 'GB_HAM',
  /** Highland */
  GbHld = 'GB_HLD',
  /** Hertfordshire */
  GbHrt = 'GB_HRT',
  /** Isle of Man */
  GbIom = 'GB_IOM',
  /** Lancashire */
  GbLan = 'GB_LAN',
  /** Norfolk */
  GbNfk = 'GB_NFK',
  /** Northern Ireland */
  GbNir = 'GB_NIR',
  /** Northamptonshire */
  GbNth = 'GB_NTH',
  /** Oxfordshire */
  GbOxf = 'GB_OXF',
  /** Scotland */
  GbSct = 'GB_SCT',
  /** Shropshire */
  GbShr = 'GB_SHR',
  /** Somerset */
  GbSom = 'GB_SOM',
  /** Staffordshire */
  GbSts = 'GB_STS',
  /** Swansea */
  GbSwa = 'GB_SWA',
  /** The Vale of Glamorgan [Bro Morgannwg] */
  GbVgl = 'GB_VGL',
  /** Wiltshire */
  GbWil = 'GB_WIL',
  /** Wales [Cymru] */
  GbWls = 'GB_WLS',
  /** West Sussex */
  GbWsx = 'GB_WSX',
  /** Grenada */
  GdGd = 'GD_GD',
  /** Abashis Raioni */
  Ge_01 = 'GE_01',
  /** Adigenis Raioni */
  Ge_02 = 'GE_02',
  /** Akhalgoris Raioni */
  Ge_03 = 'GE_03',
  /** Akhalk'alak'is Raioni */
  Ge_04 = 'GE_04',
  /** Akhalts'ikhis Raioni */
  Ge_05 = 'GE_05',
  /** Akhmetis Raioni */
  Ge_06 = 'GE_06',
  /** Ambrolauris Raioni */
  Ge_07 = 'GE_07',
  /** Aspindzis Raioni */
  Ge_08 = 'GE_08',
  /** Baghdat'is Raioni */
  Ge_09 = 'GE_09',
  /** Bolnisis Raioni */
  Ge_10 = 'GE_10',
  /** Borjomis Raioni */
  Ge_11 = 'GE_11',
  /** Ch'khorotsqus Raioni */
  Ge_12 = 'GE_12',
  /** Ch'okhatauris Raioni */
  Ge_13 = 'GE_13',
  /** Dedop'listsqaros Raioni */
  Ge_14 = 'GE_14',
  /** Dmanisis Raioni */
  Ge_15 = 'GE_15',
  /** Dushet'is Raioni */
  Ge_16 = 'GE_16',
  /** Galis Raioni */
  Ge_17 = 'GE_17',
  /** Gardabnis Raioni */
  Ge_18 = 'GE_18',
  /** Goris Raioni */
  Ge_19 = 'GE_19',
  /** Gudaut'is Raioni */
  Ge_20 = 'GE_20',
  /** Gulrip'shis Raioni */
  Ge_21 = 'GE_21',
  /** Gurjaanis Raioni */
  Ge_22 = 'GE_22',
  /** Javis Raioni */
  Ge_23 = 'GE_23',
  /** K'arelis Raioni */
  Ge_24 = 'GE_24',
  /** Kaspis Raioni */
  Ge_25 = 'GE_25',
  /** K'edis Raioni */
  Ge_26 = 'GE_26',
  /** Kharagaulis Raioni */
  Ge_27 = 'GE_27',
  /** Khashuris Raioni */
  Ge_28 = 'GE_28',
  /** Khelvach'auris Raioni */
  Ge_29 = 'GE_29',
  /** Khobis Raioni */
  Ge_30 = 'GE_30',
  /** Khonis Raioni */
  Ge_31 = 'GE_31',
  /** Khulos Raioni */
  Ge_32 = 'GE_32',
  /** K'obuletis Raioni */
  Ge_33 = 'GE_33',
  /** Lagodekhis Raioni */
  Ge_34 = 'GE_34',
  /** Lanch'khut'is Raioni */
  Ge_35 = 'GE_35',
  /** Lentekhis Raioni */
  Ge_36 = 'GE_36',
  /** Marneulis Raioni */
  Ge_37 = 'GE_37',
  /** Martvilis Raioni */
  Ge_38 = 'GE_38',
  /** Mestiis Raioni */
  Ge_39 = 'GE_39',
  /** Mts'khet'is Raioni */
  Ge_40 = 'GE_40',
  /** Ninotsmindis Raioni */
  Ge_41 = 'GE_41',
  /** Och'amch'iris Raioni */
  Ge_42 = 'GE_42',
  /** Onis Raioni */
  Ge_43 = 'GE_43',
  /** Ozurget'is Raioni */
  Ge_44 = 'GE_44',
  /** Qazbegis Raioni */
  Ge_45 = 'GE_45',
  /** Qvarlis Raioni */
  Ge_46 = 'GE_46',
  /** Sach'kheris Raioni */
  Ge_47 = 'GE_47',
  /** Sagarejos Raioni */
  Ge_48 = 'GE_48',
  /** Samtrediis Raioni */
  Ge_49 = 'GE_49',
  /** Senakis Raioni */
  Ge_50 = 'GE_50',
  /** Shuakhevis Raioni */
  Ge_51 = 'GE_51',
  /** Sighnaghis Raioni */
  Ge_52 = 'GE_52',
  /** Sokhumis Raioni */
  Ge_53 = 'GE_53',
  /** T'elavis Raioni */
  Ge_54 = 'GE_54',
  /** T'erjolis Raioni */
  Ge_55 = 'GE_55',
  /** T'et'ritsqaros Raioni */
  Ge_56 = 'GE_56',
  /** T'ianet'is Raioni */
  Ge_57 = 'GE_57',
  /** Ts'ageris Raioni */
  Ge_58 = 'GE_58',
  /** Tsalenjikhis Raioni */
  Ge_59 = 'GE_59',
  /** Tsalkis Raioni */
  Ge_60 = 'GE_60',
  /** Vanis Raioni */
  Ge_61 = 'GE_61',
  /** Zestap'onis Raioni */
  Ge_62 = 'GE_62',
  /** Zugdidis Raioni */
  Ge_63 = 'GE_63',
  /** Ap'khazet'is Avtonomiuri Respublika [Abkhazia] */
  GeAb = 'GE_AB',
  /** Acharis Avtonomiuri Respublika [Ajaria] */
  GeAj = 'GE_AJ',
  /** Bat'umi */
  GeBus = 'GE_BUS',
  /** Chiat'ura */
  GeChi = 'GE_CHI',
  /** Gagra */
  GeGag = 'GE_GAG',
  /** Gori */
  GeGor = 'GE_GOR',
  /** K'ut'aisi */
  GeKut = 'GE_KUT',
  /** P'ot'i */
  GePti = 'GE_PTI',
  /** Rust'avi */
  GeRus = 'GE_RUS',
  /** Sokhumi */
  GeSui = 'GE_SUI',
  /** T'bilisi */
  GeTbs = 'GE_TBS',
  /** Tqibuli */
  GeTqi = 'GE_TQI',
  /** Tqvarch'eli */
  GeTqv = 'GE_TQV',
  /** Tsqalmbo */
  GeTsq = 'GE_TSQ',
  /** Zugdidi */
  GeZug = 'GE_ZUG',
  /** French Guiana */
  GfGf = 'GF_GF',
  /** Greater Accra */
  GhAa = 'GH_AA',
  /** Ashanti */
  GhAh = 'GH_AH',
  /** Brong-Ahafo */
  GhBa = 'GH_BA',
  /** Central */
  GhCp = 'GH_CP',
  /** Eastern */
  GhEp = 'GH_EP',
  /** Northern */
  GhNp = 'GH_NP',
  /** Volta */
  GhTv = 'GH_TV',
  /** Upper East */
  GhUe = 'GH_UE',
  /** Upper West */
  GhUw = 'GH_UW',
  /** Western */
  GhWp = 'GH_WP',
  /** Gibraltar */
  GiGi = 'GI_GI',
  /** Greenland */
  GlGl = 'GL_GL',
  /** Banjul */
  GmB = 'GM_B',
  /** Lower River */
  GmL = 'GM_L',
  /** MacCarthy Island */
  GmM = 'GM_M',
  /** North Bank */
  GmN = 'GM_N',
  /** Upper River */
  GmU = 'GM_U',
  /** Western */
  GmW = 'GM_W',
  /** Bake, Gouvernorat de */
  GnB = 'GN_B',
  /** Conakry, Gouvernorat de */
  GnC = 'GN_C',
  /** Kindia, Gouvernorat de */
  GnD = 'GN_D',
  /** Faranah, Gouvernorat de */
  GnF = 'GN_F',
  /** Kankan, Gouvernorat de */
  GnK = 'GN_K',
  /** Labé, Gouvernorat de */
  GnL = 'GN_L',
  /** Mamou, Gouvernorat de */
  GnM = 'GN_M',
  /** Nzérékoré, Gouvernorat de */
  GnN = 'GN_N',
  /** Guadeloupe */
  GpGp = 'GP_GP',
  /** Región Continental */
  GqC = 'GQ_C',
  /** Región Insular */
  GqI = 'GQ_I',
  /** Anatoliki Makedonia kai Thraki */
  GrI = 'GR_I',
  /** Kentriki Makedonia */
  GrIi = 'GR_II',
  /** Dytiki Makedonia */
  GrIii = 'GR_III',
  /** Ipeiros */
  GrIv = 'GR_IV',
  /** Attiki */
  GrIx = 'GR_IX',
  /** Thessalia */
  GrV = 'GR_V',
  /** Ionioi Nisoi */
  GrVi = 'GR_VI',
  /** Dytiki Ellada */
  GrVii = 'GR_VII',
  /** Sterea Ellada */
  GrViii = 'GR_VIII',
  /** Peloponnisos */
  GrX = 'GR_X',
  /** Voreio Aigaio */
  GrXi = 'GR_XI',
  /** Notio Aigaio */
  GrXii = 'GR_XII',
  /** Kriti */
  GrXiii = 'GR_XIII',
  /** S.Georgia & S.Sandwich Islands */
  GsGs = 'GS_GS',
  /** Alta Verapaz */
  GtAv = 'GT_AV',
  /** Baja Verapaz */
  GtBv = 'GT_BV',
  /** Chimaltenango */
  GtCm = 'GT_CM',
  /** Chiquimula */
  GtCq = 'GT_CQ',
  /** Escuintla */
  GtEs = 'GT_ES',
  /** Guatemala */
  GtGu = 'GT_GU',
  /** Huehuetenango */
  GtHu = 'GT_HU',
  /** Izabal */
  GtIz = 'GT_IZ',
  /** Jalapa */
  GtJa = 'GT_JA',
  /** Jutiapa */
  GtJu = 'GT_JU',
  /** Petén */
  GtPe = 'GT_PE',
  /** El Progreso */
  GtPr = 'GT_PR',
  /** Quiché */
  GtQc = 'GT_QC',
  /** Quezaltenango */
  GtQz = 'GT_QZ',
  /** Retalhuleu */
  GtRe = 'GT_RE',
  /** Sacatepéquez */
  GtSa = 'GT_SA',
  /** San Marcos */
  GtSm = 'GT_SM',
  /** Sololá */
  GtSo = 'GT_SO',
  /** Santa Rosa */
  GtSr = 'GT_SR',
  /** Suchitepéquez */
  GtSu = 'GT_SU',
  /** Totonicapán */
  GtTo = 'GT_TO',
  /** Zacapa */
  GtZa = 'GT_ZA',
  /** Guam */
  GuGu = 'GU_GU',
  /** Bafatá */
  GwBa = 'GW_BA',
  /** Bolama */
  GwBl = 'GW_BL',
  /** Biombo */
  GwBm = 'GW_BM',
  /** Bissau */
  GwBs = 'GW_BS',
  /** Cacheu */
  GwCa = 'GW_CA',
  /** Gabú */
  GwGa = 'GW_GA',
  /** Oio */
  GwOi = 'GW_OI',
  /** Quinara */
  GwQu = 'GW_QU',
  /** Barima-Waini */
  GyBa = 'GY_BA',
  /** Cuyuni-Mazaruni */
  GyCu = 'GY_CU',
  /** Demerara-Mahaica */
  GyDe = 'GY_DE',
  /** East Berbice-Corentyne */
  GyEb = 'GY_EB',
  /** Essequibo Islands-West Demerara */
  GyEs = 'GY_ES',
  /** Mahaica-Berbice */
  GyMa = 'GY_MA',
  /** Pomeroon-Supenaam */
  GyPm = 'GY_PM',
  /** Potaro-Siparuni */
  GyPt = 'GY_PT',
  /** Upper Demerara-Berbice */
  GyUd = 'GY_UD',
  /** Upper Takutu-Upper Essequibo */
  GyUt = 'GY_UT',
  /** Hong Kong */
  HkHk = 'HK_HK',
  /** Heard & McDonald Islands */
  HmHm = 'HM_HM',
  /** Atlántida */
  HnAt = 'HN_AT',
  /** Choluteca */
  HnCh = 'HN_CH',
  /** Colón */
  HnCl = 'HN_CL',
  /** Comayagua */
  HnCm = 'HN_CM',
  /** Copán */
  HnCp = 'HN_CP',
  /** Cortés */
  HnCr = 'HN_CR',
  /** El Paraíso */
  HnEp = 'HN_EP',
  /** Francisco Morazán */
  HnFm = 'HN_FM',
  /** Gracias a Dios */
  HnGd = 'HN_GD',
  /** Islas de la Bahía */
  HnIb = 'HN_IB',
  /** Intibucá */
  HnIn = 'HN_IN',
  /** Lempira */
  HnLe = 'HN_LE',
  /** La Paz */
  HnLp = 'HN_LP',
  /** Ocotepeque */
  HnOc = 'HN_OC',
  /** Olancho */
  HnOl = 'HN_OL',
  /** Santa Bárbara */
  HnSb = 'HN_SB',
  /** Valle */
  HnVa = 'HN_VA',
  /** Yoro */
  HnYo = 'HN_YO',
  /** Zagrebačka županija */
  Hr_01 = 'HR_01',
  /** Krapinsko-zagorska županija */
  Hr_02 = 'HR_02',
  /** Sisaško-moslavačka županija */
  Hr_03 = 'HR_03',
  /** Karlovačka županija */
  Hr_04 = 'HR_04',
  /** Varaždinska županija */
  Hr_05 = 'HR_05',
  /** Koprivničkco-križevačka županija */
  Hr_06 = 'HR_06',
  /** Bjelovarsko-bilogorska županija */
  Hr_07 = 'HR_07',
  /** Primorsko-goranska županija */
  Hr_08 = 'HR_08',
  /** Ličko-senjska županija */
  Hr_09 = 'HR_09',
  /** Virovitičko-podravska županija */
  Hr_10 = 'HR_10',
  /** Požeško-slavonska županija */
  Hr_11 = 'HR_11',
  /** Brodsko-posavska županija */
  Hr_12 = 'HR_12',
  /** Zadarska županija */
  Hr_13 = 'HR_13',
  /** Osječko-baranjska županija */
  Hr_14 = 'HR_14',
  /** Šibensko-kninska županija */
  Hr_15 = 'HR_15',
  /** Vukovarsko-srijemska županija */
  Hr_16 = 'HR_16',
  /** Splitsko-dalmatinska županija */
  Hr_17 = 'HR_17',
  /** Istarska županija */
  Hr_18 = 'HR_18',
  /** Dubrovačko-neretvanska županija */
  Hr_19 = 'HR_19',
  /** Medjimurska županija */
  Hr_20 = 'HR_20',
  /** Artibonite */
  HtAr = 'HT_AR',
  /** Centre */
  HtCe = 'HT_CE',
  /** Grande-Anse */
  HtGa = 'HT_GA',
  /** Nord */
  HtNd = 'HT_ND',
  /** Nord-Est */
  HtNe = 'HT_NE',
  /** Nord-Ouest */
  HtNo = 'HT_NO',
  /** Ouest */
  HtOu = 'HT_OU',
  /** Sud */
  HtSd = 'HT_SD',
  /** Sud-Est */
  HtSe = 'HT_SE',
  /** Baranya */
  HuBa = 'HU_BA',
  /** Békéscsaba */
  HuBc = 'HU_BC',
  /** Békés */
  HuBe = 'HU_BE',
  /** Bács-Kiskun */
  HuBk = 'HU_BK',
  /** Budapest */
  HuBu = 'HU_BU',
  /** Borsod-Abaúj-Zemplén */
  HuBz = 'HU_BZ',
  /** Csongrád */
  HuCs = 'HU_CS',
  /** Debrecen */
  HuDe = 'HU_DE',
  /** Dunaújváros */
  HuDu = 'HU_DU',
  /** Eger */
  HuEg = 'HU_EG',
  /** Fejér */
  HuFe = 'HU_FE',
  /** Gyór-Moson-Sopron */
  HuGs = 'HU_GS',
  /** Gyór */
  HuGy = 'HU_GY',
  /** Hajdú-Bihar */
  HuHb = 'HU_HB',
  /** Heves */
  HuHe = 'HU_HE',
  /** Hódmezóvásárhely */
  HuHv = 'HU_HV',
  /** Jasz-Nagykun-Szolnok */
  HuJn = 'HU_JN',
  /** Komárom-Esztergom */
  HuKe = 'HU_KE',
  /** Kecskemét */
  HuKm = 'HU_KM',
  /** Kaposvár */
  HuKv = 'HU_KV',
  /** Miskolc */
  HuMi = 'HU_MI',
  /** Nagykanizsa */
  HuNk = 'HU_NK',
  /** Nógrád */
  HuNo = 'HU_NO',
  /** Nyíregyháza */
  HuNy = 'HU_NY',
  /** Pest */
  HuPe = 'HU_PE',
  /** Pécs */
  HuPs = 'HU_PS',
  /** Szeged */
  HuSd = 'HU_SD',
  /** Székesfehérvár */
  HuSf = 'HU_SF',
  /** Szombathely */
  HuSh = 'HU_SH',
  /** Szolnok */
  HuSk = 'HU_SK',
  /** Sopron */
  HuSn = 'HU_SN',
  /** Somogy */
  HuSo = 'HU_SO',
  /** Szekszárd */
  HuSs = 'HU_SS',
  /** Salgótarján */
  HuSt = 'HU_ST',
  /** Szabolcs-Szatmár-Bereg */
  HuSz = 'HU_SZ',
  /** Tatabánya */
  HuTb = 'HU_TB',
  /** Tolna */
  HuTo = 'HU_TO',
  /** Vas */
  HuVa = 'HU_VA',
  /** Veszprém */
  HuVe = 'HU_VE',
  /** Veszprém */
  HuVm = 'HU_VM',
  /** Zala */
  HuZa = 'HU_ZA',
  /** Zalaegerszeg */
  HuZe = 'HU_ZE',
  /** Irian Jaya */
  IdIju = 'ID_IJU',
  /** Jawa */
  IdJwu = 'ID_JWU',
  /** Kalimantan */
  IdKau = 'ID_KAU',
  /** Maluku */
  IdMau = 'ID_MAU',
  /** Nusa Tenggara */
  IdNuu = 'ID_NUU',
  /** Sulawesi */
  IdSlu = 'ID_SLU',
  /** Sumatera */
  IdSmu = 'ID_SMU',
  /** Connaught (Connacht) */
  IeCp = 'IE_CP',
  /** Leinster (Laighin) */
  IeLp = 'IE_LP',
  /** Munster (An Mhumhain) */
  IeM = 'IE_M',
  /** Ulster (Ulaidh) */
  IeUp = 'IE_UP',
  /** HaZafon (Esh Shamālī) */
  Il_2 = 'IL_2',
  /** HaDarom (El Janūbī) */
  IlD = 'IL_D',
  /** Hefa (Heifā) */
  IlHa = 'IL_HA',
  /** Yerushalayim (Al Quds) */
  IlJm = 'IL_JM',
  /** HaMerkaz (El Awsat) */
  IlM = 'IL_M',
  /** Tel-Aviv (Tell Abīb) */
  IlTa = 'IL_TA',
  /** Andaman and Nicobar Islands */
  InAn = 'IN_AN',
  /** Andhra Pradesh */
  InAp = 'IN_AP',
  /** Arunachal Pradesh */
  InAr = 'IN_AR',
  /** Assam */
  InAs = 'IN_AS',
  /** Bihar */
  InBr = 'IN_BR',
  /** Chandigarh */
  InCh = 'IN_CH',
  /** Daman and Diu */
  InDd = 'IN_DD',
  /** Delhi */
  InDl = 'IN_DL',
  /** Dadra and Nagar Haveli */
  InDn = 'IN_DN',
  /** Goa */
  InGa = 'IN_GA',
  /** Gujarat */
  InGj = 'IN_GJ',
  /** Himachal Pradesh */
  InHp = 'IN_HP',
  /** Haryana */
  InHr = 'IN_HR',
  /** Jammu and Kashmir */
  InJk = 'IN_JK',
  /** Karnataka */
  InKa = 'IN_KA',
  /** Kerala */
  InKl = 'IN_KL',
  /** Lakshadweep */
  InLd = 'IN_LD',
  /** Maharashtra */
  InMh = 'IN_MH',
  /** Meghalaya */
  InMl = 'IN_ML',
  /** Manipur */
  InMn = 'IN_MN',
  /** Madhya Pradesh */
  InMp = 'IN_MP',
  /** Mizoram */
  InMz = 'IN_MZ',
  /** Nagaland */
  InNl = 'IN_NL',
  /** Orissa */
  InOr = 'IN_OR',
  /** Punjab */
  InPb = 'IN_PB',
  /** Pondicherry */
  InPy = 'IN_PY',
  /** Rajasthan */
  InRj = 'IN_RJ',
  /** Sikkim */
  InSk = 'IN_SK',
  /** Tamil Nadu */
  InTn = 'IN_TN',
  /** Tripura */
  InTr = 'IN_TR',
  /** Uttar Pradesh */
  InUp = 'IN_UP',
  /** West Bengal */
  InWb = 'IN_WB',
  /** British Indian Ocean Territory */
  IoIo = 'IO_IO',
  /** Al Anbār */
  IqAn = 'IQ_AN',
  /** Arbīl */
  IqAr = 'IQ_AR',
  /** Al Başrah */
  IqBa = 'IQ_BA',
  /** Bābil */
  IqBb = 'IQ_BB',
  /** Baghdād */
  IqBg = 'IQ_BG',
  /** Dahūk */
  IqDa = 'IQ_DA',
  /** Diyālá */
  IqDi = 'IQ_DI',
  /** Dhī Qār */
  IqDq = 'IQ_DQ',
  /** Karbalā' */
  IqKa = 'IQ_KA',
  /** Maysān */
  IqMa = 'IQ_MA',
  /** Al Muthanná */
  IqMu = 'IQ_MU',
  /** An Najaf */
  IqNa = 'IQ_NA',
  /** Nīnawá */
  IqNi = 'IQ_NI',
  /** Al Qādisīyah */
  IqQa = 'IQ_QA',
  /** Şalāḩ ad Dīn */
  IqSd = 'IQ_SD',
  /** As Sulaymānīyah */
  IqSu = 'IQ_SU',
  /** At Ta'mīm */
  IqTs = 'IQ_TS',
  /** Wāsiţ */
  IqWa = 'IQ_WA',
  /** Āzarbāyjān-e-Sharqī */
  Ir_01 = 'IR_01',
  /** Āzarbāyjān-e-Gharbī */
  Ir_02 = 'IR_02',
  /** Ardabīl */
  Ir_03 = 'IR_03',
  /** Eşfahān */
  Ir_04 = 'IR_04',
  /** Īlām */
  Ir_05 = 'IR_05',
  /** Būshehr */
  Ir_06 = 'IR_06',
  /** Tehrān */
  Ir_07 = 'IR_07',
  /** Chahār Maḩāll vā Bakhtīārī */
  Ir_08 = 'IR_08',
  /** Khorāsān */
  Ir_09 = 'IR_09',
  /** Khūzestān */
  Ir_10 = 'IR_10',
  /** Zanjān */
  Ir_11 = 'IR_11',
  /** Semnān */
  Ir_12 = 'IR_12',
  /** Sīstān va Balūchestān */
  Ir_13 = 'IR_13',
  /** Fārs */
  Ir_14 = 'IR_14',
  /** Kermān */
  Ir_15 = 'IR_15',
  /** Kordestān */
  Ir_16 = 'IR_16',
  /** Kermānshāhān */
  Ir_17 = 'IR_17',
  /** Kohkīlūyeh va Būyer Aḩmadī */
  Ir_18 = 'IR_18',
  /** Gīlān */
  Ir_19 = 'IR_19',
  /** Lorestān */
  Ir_20 = 'IR_20',
  /** Māzandarān */
  Ir_21 = 'IR_21',
  /** Markazī */
  Ir_22 = 'IR_22',
  /** Hormozgān */
  Ir_23 = 'IR_23',
  /** Hamadān */
  Ir_24 = 'IR_24',
  /** Yazd */
  Ir_25 = 'IR_25',
  /** Qom */
  Ir_26 = 'IR_26',
  /** Reykjavīk */
  Is_0 = 'IS_0',
  /** Höfudborgarsvædi utan Reykjavíkur */
  Is_1 = 'IS_1',
  /** Sudurnes */
  Is_2 = 'IS_2',
  /** Vesturland */
  Is_3 = 'IS_3',
  /** Vestfirdir */
  Is_4 = 'IS_4',
  /** Nordurland vestra */
  Is_5 = 'IS_5',
  /** Nordurland eystra */
  Is_6 = 'IS_6',
  /** Austurland */
  Is_7 = 'IS_7',
  /** Sudurland */
  Is_8 = 'IS_8',
  /** Piemonte */
  It_21 = 'IT_21',
  /** Valle d'Aosta (Vallée d'Aoste) */
  It_23 = 'IT_23',
  /** Lombardia */
  It_25 = 'IT_25',
  /** Trentino-Alte Adige (Trentino-Südtirol) */
  It_32 = 'IT_32',
  /** Veneto */
  It_34 = 'IT_34',
  /** Friuli-Venezia Giulia */
  It_36 = 'IT_36',
  /** Liguria */
  It_42 = 'IT_42',
  /** Emilia-Romagna */
  It_45 = 'IT_45',
  /** Toscana */
  It_52 = 'IT_52',
  /** Umbria */
  It_55 = 'IT_55',
  /** Marche */
  It_57 = 'IT_57',
  /** Lazio */
  It_62 = 'IT_62',
  /** Abruzzo */
  It_65 = 'IT_65',
  /** Molise */
  It_67 = 'IT_67',
  /** Campania */
  It_72 = 'IT_72',
  /** Puglia */
  It_75 = 'IT_75',
  /** Basilicata */
  It_77 = 'IT_77',
  /** Calabria */
  It_78 = 'IT_78',
  /** Sicilia */
  It_82 = 'IT_82',
  /** Sardegna */
  It_88 = 'IT_88',
  /** Kingston */
  Jm_01 = 'JM_01',
  /** Saint Andrew */
  Jm_02 = 'JM_02',
  /** Saint Thomas */
  Jm_03 = 'JM_03',
  /** Portland */
  Jm_04 = 'JM_04',
  /** Saint Mary */
  Jm_05 = 'JM_05',
  /** Saint Ann */
  Jm_06 = 'JM_06',
  /** Trelawny */
  Jm_07 = 'JM_07',
  /** Saint James */
  Jm_08 = 'JM_08',
  /** Hanover */
  Jm_09 = 'JM_09',
  /** Westmoreland */
  Jm_10 = 'JM_10',
  /** Saint Elizabeth */
  Jm_11 = 'JM_11',
  /** Manchester */
  Jm_12 = 'JM_12',
  /** Clarendon */
  Jm_13 = 'JM_13',
  /** Saint Catherine */
  Jm_14 = 'JM_14',
  /** ‘Ajlūn */
  JoAj = 'JO_AJ',
  /** ‘Ammān */
  JoAm = 'JO_AM',
  /** Al 'Aqaba */
  JoAq = 'JO_AQ',
  /** Aţ Ţafīlah */
  JoAt = 'JO_AT',
  /** Az Zarqā' */
  JoAz = 'JO_AZ',
  /** Al Balqā' */
  JoBa = 'JO_BA',
  /** Irbid */
  JoIr = 'JO_IR',
  /** Jarash */
  JoJa = 'JO_JA',
  /** Al Karak */
  JoKa = 'JO_KA',
  /** Al Mafraq */
  JoMa = 'JO_MA',
  /** Mādaba */
  JoMd = 'JO_MD',
  /** Ma‘ān */
  JoMn = 'JO_MN',
  /** Hokkaidô [Hokkaido] */
  Jp_01 = 'JP_01',
  /** Aomori */
  Jp_02 = 'JP_02',
  /** Iwate */
  Jp_03 = 'JP_03',
  /** Miyagi */
  Jp_04 = 'JP_04',
  /** Akita */
  Jp_05 = 'JP_05',
  /** Yamagata */
  Jp_06 = 'JP_06',
  /** Hukusima [Fukushima] */
  Jp_07 = 'JP_07',
  /** Ibaraki */
  Jp_08 = 'JP_08',
  /** Totigi [Tochigi] */
  Jp_09 = 'JP_09',
  /** Gunma */
  Jp_10 = 'JP_10',
  /** Saitama */
  Jp_11 = 'JP_11',
  /** Tiba [Chiba] */
  Jp_12 = 'JP_12',
  /** Tôkyô [Tokyo] */
  Jp_13 = 'JP_13',
  /** Kanagawa */
  Jp_14 = 'JP_14',
  /** Niigata */
  Jp_15 = 'JP_15',
  /** Toyama */
  Jp_16 = 'JP_16',
  /** Isikawa [Ishikawa] */
  Jp_17 = 'JP_17',
  /** Hukui [Fukui] */
  Jp_18 = 'JP_18',
  /** Yamanasi [Yamanashi] */
  Jp_19 = 'JP_19',
  /** Nagano */
  Jp_20 = 'JP_20',
  /** Gihu [Gifu] */
  Jp_21 = 'JP_21',
  /** Sizuoka [Shizuoka] */
  Jp_22 = 'JP_22',
  /** Aiti [Aichi] */
  Jp_23 = 'JP_23',
  /** Mie */
  Jp_24 = 'JP_24',
  /** Siga [Shiga] */
  Jp_25 = 'JP_25',
  /** Kyôto [Kyoto] */
  Jp_26 = 'JP_26',
  /** Ôsaka [Osaka] */
  Jp_27 = 'JP_27',
  /** Hyôgo [Hyogo] */
  Jp_28 = 'JP_28',
  /** Nara */
  Jp_29 = 'JP_29',
  /** Wakayama */
  Jp_30 = 'JP_30',
  /** Tottori */
  Jp_31 = 'JP_31',
  /** Okayama */
  Jp_33 = 'JP_33',
  /** Hirosima [Hiroshima] */
  Jp_34 = 'JP_34',
  /** Yamaguti [Yamaguchi] */
  Jp_35 = 'JP_35',
  /** Tokusima [Tokushima] */
  Jp_36 = 'JP_36',
  /** Kagawa */
  Jp_37 = 'JP_37',
  /** Ehime */
  Jp_38 = 'JP_38',
  /** Kôti [Kochi] */
  Jp_39 = 'JP_39',
  /** Hukuoka [Fukuoka] */
  Jp_40 = 'JP_40',
  /** Saga */
  Jp_41 = 'JP_41',
  /** Nagasaki */
  Jp_42 = 'JP_42',
  /** Kumamoto */
  Jp_43 = 'JP_43',
  /** Ôita [Oita] */
  Jp_44 = 'JP_44',
  /** Miyazaki */
  Jp_45 = 'JP_45',
  /** Kagosima [Kagoshima] */
  Jp_46 = 'JP_46',
  /** Okinawa */
  Jp_47 = 'JP_47',
  /** Nairobi Municipality */
  Ke_110 = 'KE_110',
  /** Central (Kati) */
  Ke_200 = 'KE_200',
  /** Coast (Pwani) */
  Ke_300 = 'KE_300',
  /** Eastern (Mashariki) */
  Ke_400 = 'KE_400',
  /** North-Eastern (Kaskazini Mashariki) */
  Ke_500 = 'KE_500',
  /** Nyanza */
  Ke_600 = 'KE_600',
  /** Rift Valley */
  Ke_700 = 'KE_700',
  /** Western (Magharibi) */
  Ke_900 = 'KE_900',
  /** Chu (Chuyskaya oblast') */
  KgC = 'KG_C',
  /** Jalal-Abad (Dzhalal-Abadskaya oblast') */
  KgJ = 'KG_J',
  /** Naryn (Narynskaya Oblast’) */
  KgN = 'KG_N',
  /** Osh (Oshskaya oblast') */
  KgO = 'KG_O',
  /** Talas (Talasskaya oblast') */
  KgT = 'KG_T',
  /** Ysyk-Köl (Issyk-Kul'skaya oblast') */
  KgY = 'KG_Y',
  /** Banteay Mean Chey [Bântéay Méanchey] */
  Kh_1 = 'KH_1',
  /** Baat Dambang [Bătdâmbâng] */
  Kh_2 = 'KH_2',
  /** Kampong Chaam [Kâmpóng Cham] */
  Kh_3 = 'KH_3',
  /** Kampong Chhnang [Kâmpóng Chhnăng] */
  Kh_4 = 'KH_4',
  /** Kampong Spueu [Kâmpóng Spœ] */
  Kh_5 = 'KH_5',
  /** Kampong Thum [Kâmpóng Thum] */
  Kh_6 = 'KH_6',
  /** Kampot [Kâmpôt] */
  Kh_7 = 'KH_7',
  /** Kandaal [Kândal] */
  Kh_8 = 'KH_8',
  /** Kracheh [Krâchéh] */
  Kh_10 = 'KH_10',
  /** Mond01 Kiri [Môndól Kiri] */
  Kh_11 = 'KH_11',
  /** Phnom Penh [Phnum Pénh] */
  Kh_12 = 'KH_12',
  /** Preah Vihear [Preăh Vihéar] */
  Kh_13 = 'KH_13',
  /** Prey Veaeng [Prey Vêng] */
  Kh_14 = 'KH_14',
  /** Pousaat [Poŭthĭsăt] */
  Kh_15 = 'KH_15',
  /** Rotanak Kiri [Rôtânôkiri] */
  Kh_16 = 'KH_16',
  /** Siem Reab [Siĕmréab] */
  Kh_17 = 'KH_17',
  /** Krong Preah Sihanouk [Krŏng Preăh Sihanouk] */
  Kh_18 = 'KH_18',
  /** Stueng Traeng [Stœng Trêng] */
  Kh_19 = 'KH_19',
  /** Svaay Rieng [Svay Riĕng] */
  Kh_20 = 'KH_20',
  /** Taakaev [Takêv] */
  Kh_21 = 'KH_21',
  /** Otdar Mean Chey [Ŏtdâr Méanchey] */
  Kh_22 = 'KH_22',
  /** Krong Kaeb [Krŏng Kêb] */
  Kh_23 = 'KH_23',
  /** Gilbert Islands */
  KiG = 'KI_G',
  /** Line Islands */
  KiL = 'KI_L',
  /** Phoenix Islands */
  KiP = 'KI_P',
  /** Anjouan (Ndzouani) */
  KmA = 'KM_A',
  /** Grande Comore (Ngazidja) */
  KmG = 'KM_G',
  /** Mohéli (Moili) */
  KmM = 'KM_M',
  /** Saint Kitts & Nevis */
  KnKn = 'KN_KN',
  /** Chagang-do */
  KpCha = 'KP_CHA',
  /** Hamgyongbuk-do */
  KpHab = 'KP_HAB',
  /** Hamgyongnam-do */
  KpHan = 'KP_HAN',
  /** Hwanghaebuk-do */
  KpHwb = 'KP_HWB',
  /** Hwanghaenam-do */
  KpHwn = 'KP_HWN',
  /** Kaesong-si */
  KpKae = 'KP_KAE',
  /** Kangwon-do */
  KpKan = 'KP_KAN',
  /** Nampo-si */
  KpNam = 'KP_NAM',
  /** Pyonganbuk-do */
  KpPyb = 'KP_PYB',
  /** Pyongannam-do */
  KpPyn = 'KP_PYN',
  /** Pyongyang-si */
  KpPyo = 'KP_PYO',
  /** Yanggang-do */
  KpYan = 'KP_YAN',
  /** Seoul Teugbyeolsi [ Seoul-T’ŭkpyŏlshi] */
  Kr_11 = 'KR_11',
  /** Busan Gwang'yeogsi [Pusan-Kwangyŏkshi] */
  Kr_26 = 'KR_26',
  /** Daegu Gwang'yeogsi [Taegu-Kwangyŏkshi) */
  Kr_27 = 'KR_27',
  /** Incheon Gwang'yeogsi [Inchŏn-Kwangyŏkshi] */
  Kr_28 = 'KR_28',
  /** Gwangju Gwang'yeogsi [Kwangju-Kwangyŏkshi] */
  Kr_29 = 'KR_29',
  /** Daejeon Gwang'yeogsi [Taejŏn-Kwangyŏkshi] */
  Kr_30 = 'KR_30',
  /** Ulsan Gwang'yeogsi [Ulsan-Kwangyŏkshi] */
  Kr_31 = 'KR_31',
  /** Gyeonggido [Kyŏnggi-do] */
  Kr_41 = 'KR_41',
  /** Gang'weondo [Kang-won-do] */
  Kr_42 = 'KR_42',
  /** Chungcheongbugdo [Ch'ungch'ŏngbuk-do] */
  Kr_43 = 'KR_43',
  /** Chungcheongnamdo [Ch'ungch'ŏngnam-do] */
  Kr_44 = 'KR_44',
  /** Jeonrabugdo [Chŏllabuk-do) */
  Kr_45 = 'KR_45',
  /** Jeonranamdo [Chŏllanam-do] */
  Kr_46 = 'KR_46',
  /** Gyeongsangbugdo [Kyŏngsangbuk-do] */
  Kr_47 = 'KR_47',
  /** Gyeongsangnamdo [Kyŏngsangnam-do] */
  Kr_48 = 'KR_48',
  /** Jejudo [Cheju-do] */
  Kr_49 = 'KR_49',
  /** Al Aḩmadi */
  KwAh = 'KW_AH',
  /** Al Farwānīyah */
  KwFa = 'KW_FA',
  /** Ḩawallī */
  KwHa = 'KW_HA',
  /** Al Jahrah */
  KwJa = 'KW_JA',
  /** Al Kuwayt */
  KwKu = 'KW_KU',
  /** Cayman Islands */
  KyKy = 'KY_KY',
  /** Aqmola oblysy (Akmolinskaya oblast') */
  KzAkm = 'KZ_AKM',
  /** Aqtöbe oblysy (Aktyubinskaya oblast') */
  KzAkt = 'KZ_AKT',
  /** Almaty */
  KzAla = 'KZ_ALA',
  /** Almaty oblysy (Almatinskaya oblast') */
  KzAlm = 'KZ_ALM',
  /** Atyraü oblysy (Atyrauskaya oblast') */
  KzAty = 'KZ_ATY',
  /** Bayqonyr (Baykonyr) */
  KzBay = 'KZ_BAY',
  /** Qaraghandy oblysy (Karagandinskaya oblast') */
  KzKar = 'KZ_KAR',
  /** Qostanay oblysy (Kustanayskaya oblast') */
  KzKus = 'KZ_KUS',
  /** Qyzylorda oblysy (Kzylordinskaya oblast') */
  KzKzy = 'KZ_KZY',
  /** Mangghystaū oblysy (Mangystauskaya oblast') */
  KzMan = 'KZ_MAN',
  /** Pavlodar oblysy (Pavlodarskaya oblast') */
  KzPav = 'KZ_PAV',
  /** Soltüstik Kazakstan oblysy (Severo-Kazakhstanskaya oblast') */
  KzSev = 'KZ_SEV',
  /** Shyghys Kazakstan oblysy (Vostochno-Kazakhstanskaya oblast') */
  KzVos = 'KZ_VOS',
  /** Ongtüstik Kazakstan oblysy (Yuzhno-Kazakhstanskaya oblast') */
  KzYuz = 'KZ_YUZ',
  /** Batys Kazakstan oblysy (Zapadno-Kazakhstanskaya oblast') */
  KzZap = 'KZ_ZAP',
  /** Zhambyl oblysy (Zhambylskaya Oblast') */
  KzZha = 'KZ_ZHA',
  /** Attapu [Attopeu] */
  LaAt = 'LA_AT',
  /** Bokèo */
  LaBk = 'LA_BK',
  /** Bolikhamxai [Borikhane] */
  LaBl = 'LA_BL',
  /** Champasak [Champassak] */
  LaCh = 'LA_CH',
  /** Houaphan */
  LaHo = 'LA_HO',
  /** Khammouan */
  LaKh = 'LA_KH',
  /** Louang Namtha */
  LaLm = 'LA_LM',
  /** Louangphabang [Louang Prabang] */
  LaLp = 'LA_LP',
  /** Oudômxai [Oudomsai] */
  LaOu = 'LA_OU',
  /** Phôngsali [Phong Saly] */
  LaPh = 'LA_PH',
  /** Salavan [Saravane] */
  LaSl = 'LA_SL',
  /** Savannakhét */
  LaSv = 'LA_SV',
  /** Vientiane */
  LaVi = 'LA_VI',
  /** Vientiane */
  LaVt = 'LA_VT',
  /** Xaignabouli [Sayaboury] */
  LaXa = 'LA_XA',
  /** Xékong [Sékong] */
  LaXe = 'LA_XE',
  /** Xiangkhoang [Xieng Khouang] */
  LaXi = 'LA_XI',
  /** Loubnâne ech Chemâli (Ash Shamāl) */
  LbAs = 'LB_AS',
  /** Beiroût (Bayrūt) */
  LbBa = 'LB_BA',
  /** El Béqaa (Al Biqā') */
  LbBi = 'LB_BI',
  /** Loubnâne ej Jnoûbi (Al Janūb) */
  LbJa = 'LB_JA',
  /** Jabal Loubnâne (Jabal Lubnān) */
  LbJl = 'LB_JL',
  /** Nabatîyé (An Nabaţīyah */
  LbNa = 'LB_NA',
  /** Saint Lucia */
  LcLc = 'LC_LC',
  /** Liechtenstein */
  LiLi = 'LI_LI',
  /** Basnahira Palata (Western Province) */
  Lk_1 = 'LK_1',
  /** Madhyama Palata (Central Province) */
  Lk_2 = 'LK_2',
  /** Dakunu Palata (Southern Province) */
  Lk_3 = 'LK_3',
  /** Uturu Palata (Northern Province) */
  Lk_4 = 'LK_4',
  /** Negenahira Palata (Eastern Province) */
  Lk_5 = 'LK_5',
  /** Wayamba Palata (North Western Province) */
  Lk_6 = 'LK_6',
  /** Uturumeda Palata (North Central Province) */
  Lk_7 = 'LK_7',
  /** Uva Palata */
  Lk_8 = 'LK_8',
  /** Sabaragamuwa Palata */
  Lk_9 = 'LK_9',
  /** Bong */
  LrBg = 'LR_BG',
  /** Bomi */
  LrBm = 'LR_BM',
  /** Grand Cape Mount */
  LrCm = 'LR_CM',
  /** Grand Bassa */
  LrGb = 'LR_GB',
  /** Grand Gedeh */
  LrGg = 'LR_GG',
  /** Grand Kru */
  LrGk = 'LR_GK',
  /** Lofa */
  LrLo = 'LR_LO',
  /** Margibi */
  LrMg = 'LR_MG',
  /** Montserrado */
  LrMo = 'LR_MO',
  /** Maryland */
  LrMy = 'LR_MY',
  /** Nimba */
  LrNi = 'LR_NI',
  /** Rivercess */
  LrRi = 'LR_RI',
  /** Sinoe */
  LrSi = 'LR_SI',
  /** Maseru */
  LsA = 'LS_A',
  /** Butha-Buthe */
  LsB = 'LS_B',
  /** Leribe */
  LsC = 'LS_C',
  /** Berea */
  LsD = 'LS_D',
  /** Mafeteng */
  LsE = 'LS_E',
  /** Mohale's Hoek */
  LsF = 'LS_F',
  /** Quthing */
  LsG = 'LS_G',
  /** Qacha's Nek */
  LsH = 'LS_H',
  /** Mokhotlong */
  LsJ = 'LS_J',
  /** Thaba-Tseka */
  LsK = 'LS_K',
  /** Alytaus Apskritis */
  LtAl = 'LT_AL',
  /** Klaipėdos Apskritis */
  LtKl = 'LT_KL',
  /** Kauno Apskritis */
  LtKu = 'LT_KU',
  /** Marijampolės Apskritis */
  LtMr = 'LT_MR',
  /** Panevėžio Apskritis */
  LtPn = 'LT_PN',
  /** Šiauliu Apskritis */
  LtSa = 'LT_SA',
  /** Tauragės Apskritis */
  LtTa = 'LT_TA',
  /** Telšiu Apskritis */
  LtTe = 'LT_TE',
  /** Utenos Apskritis */
  LtUt = 'LT_UT',
  /** Vilniaus Apskritis */
  LtVl = 'LT_VL',
  /** Diekirch */
  LuD = 'LU_D',
  /** Grevenmacher */
  LuG = 'LU_G',
  /** Luxembourg (Luxemburg) */
  LuL = 'LU_L',
  /** Aizkraukles Aprinkis */
  LvAi = 'LV_AI',
  /** Alūksnes Aprinkis */
  LvAl = 'LV_AL',
  /** Balvu Aprinkis */
  LvBl = 'LV_BL',
  /** Bauskas Aprinkis */
  LvBu = 'LV_BU',
  /** Cēsu Aprinkis */
  LvCe = 'LV_CE',
  /** Daugavpils Aprinkis */
  LvDa = 'LV_DA',
  /** Daugavpils */
  LvDgv = 'LV_DGV',
  /** Dobeles Aprinkis */
  LvDo = 'LV_DO',
  /** Gulbenes Aprinkis */
  LvGu = 'LV_GU',
  /** Jelgava */
  LvJel = 'LV_JEL',
  /** Jēkabpils Aprinkis */
  LvJk = 'LV_JK',
  /** Jelgavas Aprinkis */
  LvJl = 'LV_JL',
  /** Jūrmala */
  LvJur = 'LV_JUR',
  /** Krāslavas Aprinkis */
  LvKr = 'LV_KR',
  /** Kuldīgas Aprinkis */
  LvKu = 'LV_KU',
  /** Liepājas Aprinkis */
  LvLe = 'LV_LE',
  /** Limbažu Aprinkis */
  LvLm = 'LV_LM',
  /** Liepāja */
  LvLpx = 'LV_LPX',
  /** Ludzas Aprinkis */
  LvLu = 'LV_LU',
  /** Madonas Aprinkis */
  LvMa = 'LV_MA',
  /** Ogres Aprinkis */
  LvOg = 'LV_OG',
  /** Preilu Aprinkis */
  LvPr = 'LV_PR',
  /** Rēzeknes Aprinkis */
  LvRe = 'LV_RE',
  /** Rēzekne */
  LvRez = 'LV_REZ',
  /** Rīgas Aprinkis */
  LvRi = 'LV_RI',
  /** Rīga */
  LvRix = 'LV_RIX',
  /** Saldus Aprinkis */
  LvSa = 'LV_SA',
  /** Talsu Aprinkis */
  LvTa = 'LV_TA',
  /** Tukuma Aprinkis */
  LvTu = 'LV_TU',
  /** Ventspils Aprinkis */
  LvVe = 'LV_VE',
  /** Ventspils */
  LvVen = 'LV_VEN',
  /** Valkas Aprinkis */
  LvVk = 'LV_VK',
  /** Valmieras Aprinkis */
  LvVm = 'LV_VM',
  /** Banghāzī */
  LyBa = 'LY_BA',
  /** Al Buţnān */
  LyBu = 'LY_BU',
  /** Fazzān */
  LyFa = 'LY_FA',
  /** Al Jabal al Akhḑar */
  LyJa = 'LY_JA',
  /** Al Jabal al Gharbī */
  LyJg = 'LY_JG',
  /** Al Jufrah */
  LyJu = 'LY_JU',
  /** Mişrātah */
  LyMi = 'LY_MI',
  /** Naggaza */
  LyNa = 'LY_NA',
  /** Sawfajjin */
  LySf = 'LY_SF',
  /** Ţarābulus */
  LyTb = 'LY_TB',
  /** Al Wāḩah */
  LyWa = 'LY_WA',
  /** Al Wusţá */
  LyWu = 'LY_WU',
  /** Az Zāwiyah */
  LyZa = 'LY_ZA',
  /** Centre */
  MaCe = 'MA_CE',
  /** Centre-Nord */
  MaCn = 'MA_CN',
  /** Centre-Sud */
  MaCs = 'MA_CS',
  /** Est */
  MaEs = 'MA_ES',
  /** Nord-Ouest */
  MaNo = 'MA_NO',
  /** Sud */
  MaSu = 'MA_SU',
  /** Tensift */
  MaTs = 'MA_TS',
  /** Monaco */
  McMc = 'MC_MC',
  /** Anenii Noi */
  MdAne = 'MD_ANE',
  /** Bălţi */
  MdBal = 'MD_BAL',
  /** Basarabeasca */
  MdBas = 'MD_BAS',
  /** Brinceni */
  MdBri = 'MD_BRI',
  /** Cahul */
  MdCah = 'MD_CAH',
  /** Căinari */
  MdCai = 'MD_CAI',
  /** Călăraşi */
  MdCal = 'MD_CAL',
  /** Camenca */
  MdCam = 'MD_CAM',
  /** Cantemir */
  MdCan = 'MD_CAN',
  /** Căuşeni */
  MdCas = 'MD_CAS',
  /** Chişinău */
  MdChi = 'MD_CHI',
  /** Cahul */
  MdChl = 'MD_CHL',
  /** Ciadîr-Lunga */
  MdCia = 'MD_CIA',
  /** Cimişlia */
  MdCim = 'MD_CIM',
  /** Comrat */
  MdCom = 'MD_COM',
  /** Criuleni */
  MdCri = 'MD_CRI',
  /** Dubăsari */
  MdDbi = 'MD_DBI',
  /** Donduşeni */
  MdDon = 'MD_DON',
  /** Drochia */
  MdDro = 'MD_DRO',
  /** Dubăsari */
  MdDub = 'MD_DUB',
  /** Edineţ */
  MdEdi = 'MD_EDI',
  /** Făleşti */
  MdFal = 'MD_FAL',
  /** Floreşti */
  MdFlo = 'MD_FLO',
  /** Glodeni */
  MdGlo = 'MD_GLO',
  /** Grigoriopol */
  MdGri = 'MD_GRI',
  /** Hînceşti */
  MdHin = 'MD_HIN',
  /** Ialoveni */
  MdIal = 'MD_IAL',
  /** Leova */
  MdLeo = 'MD_LEO',
  /** Nisporeni */
  MdNis = 'MD_NIS',
  /** Ocniţa */
  MdOcn = 'MD_OCN',
  /** Orhei */
  MdOhi = 'MD_OHI',
  /** Orhei */
  MdOrh = 'MD_ORH',
  /** Rezina */
  MdRez = 'MD_REZ',
  /** Rîbniţa */
  MdRib = 'MD_RIB',
  /** Rîşcani */
  MdRis = 'MD_RIS',
  /** Rîbniţa */
  MdRit = 'MD_RIT',
  /** Sîngerei */
  MdSin = 'MD_SIN',
  /** Slobozia */
  MdSlo = 'MD_SLO',
  /** Soroca */
  MdSoa = 'MD_SOA',
  /** Soroca */
  MdSoc = 'MD_SOC',
  /** Şoldăneşti */
  MdSol = 'MD_SOL',
  /** Ştefan Vodă */
  MdSte = 'MD_STE',
  /** Străşeni */
  MdStr = 'MD_STR',
  /** Taraclia */
  MdTar = 'MD_TAR',
  /** Teleneşti */
  MdTel = 'MD_TEL',
  /** Tighina */
  MdTig = 'MD_TIG',
  /** Tiraspol */
  MdTir = 'MD_TIR',
  /** Ungheni */
  MdUgi = 'MD_UGI',
  /** Ungheni */
  MdUng = 'MD_UNG',
  /** Vulcăneşti */
  MdVul = 'MD_VUL',
  /** Andrijevica */
  Me_01 = 'ME_01',
  /** Bar */
  Me_02 = 'ME_02',
  /** Berane */
  Me_03 = 'ME_03',
  /** Bijelo Polje */
  Me_04 = 'ME_04',
  /** Budva */
  Me_05 = 'ME_05',
  /** Cetinje */
  Me_06 = 'ME_06',
  /** Danilovgrad */
  Me_07 = 'ME_07',
  /** Herceg-Novi */
  Me_08 = 'ME_08',
  /** Kolasin */
  Me_09 = 'ME_09',
  /** Kotor */
  Me_10 = 'ME_10',
  /** Mojkovac */
  Me_11 = 'ME_11',
  /** Niksic */
  Me_12 = 'ME_12',
  /** Plav */
  Me_13 = 'ME_13',
  /** Pljevlja */
  Me_14 = 'ME_14',
  /** Pluzine */
  Me_15 = 'ME_15',
  /** Podgorica */
  Me_16 = 'ME_16',
  /** Rozaje */
  Me_17 = 'ME_17',
  /** Savnik */
  Me_18 = 'ME_18',
  /** Tivat */
  Me_19 = 'ME_19',
  /** Ulcinj */
  Me_20 = 'ME_20',
  /** Zabljak */
  Me_21 = 'ME_21',
  /** Gusinje */
  Me_22 = 'ME_22',
  /** Petnjica */
  Me_23 = 'ME_23',
  /** Tuzi */
  Me_24 = 'ME_24',
  /** Toamasina */
  MgA = 'MG_A',
  /** Antsiranana */
  MgD = 'MG_D',
  /** Fianarantsoa */
  MgF = 'MG_F',
  /** Mahajanga */
  MgM = 'MG_M',
  /** Antananarivo */
  MgT = 'MG_T',
  /** Toliara */
  MgU = 'MG_U',
  /** Ralik chain */
  MhL = 'MH_L',
  /** Ratak chain */
  MhT = 'MH_T',
  /** Macedonia */
  MkMk = 'MK_MK',
  /** Kayes */
  Ml_1 = 'ML_1',
  /** Koulikoro */
  Ml_2 = 'ML_2',
  /** Sikasso */
  Ml_3 = 'ML_3',
  /** Ségou */
  Ml_4 = 'ML_4',
  /** Mopti */
  Ml_5 = 'ML_5',
  /** Tombouctou */
  Ml_6 = 'ML_6',
  /** Gao */
  Ml_7 = 'ML_7',
  /** Kidal */
  Ml_8 = 'ML_8',
  /** Bamako */
  MlBko = 'ML_BKO',
  /** Sagaing */
  Mm_01 = 'MM_01',
  /** Bago */
  Mm_02 = 'MM_02',
  /** Magway */
  Mm_03 = 'MM_03',
  /** Mandalay */
  Mm_04 = 'MM_04',
  /** Tanintharyi */
  Mm_05 = 'MM_05',
  /** Yangon */
  Mm_06 = 'MM_06',
  /** Ayeyarwady */
  Mm_07 = 'MM_07',
  /** Kachin */
  Mm_11 = 'MM_11',
  /** Kayah */
  Mm_12 = 'MM_12',
  /** Kayin */
  Mm_13 = 'MM_13',
  /** Chin */
  Mm_14 = 'MM_14',
  /** Mon */
  Mm_15 = 'MM_15',
  /** Rakhine */
  Mm_16 = 'MM_16',
  /** Shan */
  Mm_17 = 'MM_17',
  /** Orhon */
  Mn_035 = 'MN_035',
  /** Darhan uul */
  Mn_037 = 'MN_037',
  /** Hentiy */
  Mn_039 = 'MN_039',
  /** Hövsgöl */
  Mn_041 = 'MN_041',
  /** Hovd */
  Mn_043 = 'MN_043',
  /** Uvs */
  Mn_046 = 'MN_046',
  /** Töv */
  Mn_047 = 'MN_047',
  /** Selenge */
  Mn_049 = 'MN_049',
  /** Sühbaatar */
  Mn_051 = 'MN_051',
  /** Ömnögovĭ */
  Mn_053 = 'MN_053',
  /** Övörhangay */
  Mn_055 = 'MN_055',
  /** Dzavhan */
  Mn_057 = 'MN_057',
  /** Dundgovĭ */
  Mn_059 = 'MN_059',
  /** Dornod */
  Mn_061 = 'MN_061',
  /** Dornogovĭ */
  Mn_063 = 'MN_063',
  /** Govĭ-Sümber */
  Mn_064 = 'MN_064',
  /** Govĭ-Altay */
  Mn_065 = 'MN_065',
  /** Bulgan */
  Mn_067 = 'MN_067',
  /** Bayanhongor */
  Mn_069 = 'MN_069',
  /** Bayan-Ölgiy */
  Mn_071 = 'MN_071',
  /** Arhangay */
  Mn_073 = 'MN_073',
  /** Ulaanbaatar */
  Mn_1 = 'MN_1',
  /** Macau */
  MoMo = 'MO_MO',
  /** Northern Mariana Islands */
  MpMp = 'MP_MP',
  /** Martinique */
  MqMq = 'MQ_MQ',
  /** Hodh ech Chargui */
  Mr_01 = 'MR_01',
  /** Hodh el Gharbi */
  Mr_02 = 'MR_02',
  /** Assaba */
  Mr_03 = 'MR_03',
  /** Gorgol */
  Mr_04 = 'MR_04',
  /** Brakna */
  Mr_05 = 'MR_05',
  /** Trarza */
  Mr_06 = 'MR_06',
  /** Adrar */
  Mr_07 = 'MR_07',
  /** Dakhlet Nouādhibou */
  Mr_08 = 'MR_08',
  /** Tagant */
  Mr_09 = 'MR_09',
  /** Guidimaka */
  Mr_10 = 'MR_10',
  /** Tiris Zemmour */
  Mr_11 = 'MR_11',
  /** Inchiri */
  Mr_12 = 'MR_12',
  /** Nouakchott */
  MrNkc = 'MR_NKC',
  /** Montserrat */
  MsMs = 'MS_MS',
  /** Malta */
  MtMt = 'MT_MT',
  /** Agalega Islands */
  MuAg = 'MU_AG',
  /** Black River */
  MuBl = 'MU_BL',
  /** Beau Bassin-Rose Hill */
  MuBr = 'MU_BR',
  /** Cargados Carajos Shoals [Saint Brandon Islands] */
  MuCc = 'MU_CC',
  /** Curepipe */
  MuCu = 'MU_CU',
  /** Flacq */
  MuFl = 'MU_FL',
  /** Grand Port */
  MuGp = 'MU_GP',
  /** Moka */
  MuMo = 'MU_MO',
  /** Pamplemousses */
  MuPa = 'MU_PA',
  /** Port Louis */
  MuPl = 'MU_PL',
  /** Plaines Wilhems */
  MuPw = 'MU_PW',
  /** Quatre Bornes */
  MuQb = 'MU_QB',
  /** Rodrigues Island */
  MuRo = 'MU_RO',
  /** Rivière du Rempart */
  MuRr = 'MU_RR',
  /** Savanne */
  MuSa = 'MU_SA',
  /** Vacoas-Phoenix */
  MuVp = 'MU_VP',
  /** Seenu */
  Mv_01 = 'MV_01',
  /** Alif */
  Mv_02 = 'MV_02',
  /** Lhaviyani */
  Mv_03 = 'MV_03',
  /** Vaavu */
  Mv_04 = 'MV_04',
  /** Laamu */
  Mv_05 = 'MV_05',
  /** Haa Alif */
  Mv_07 = 'MV_07',
  /** Thaa */
  Mv_08 = 'MV_08',
  /** Meemu */
  Mv_12 = 'MV_12',
  /** Raa */
  Mv_13 = 'MV_13',
  /** Faafu */
  Mv_14 = 'MV_14',
  /** Dhaalu */
  Mv_17 = 'MV_17',
  /** Baa */
  Mv_20 = 'MV_20',
  /** Haa Dhaalu */
  Mv_23 = 'MV_23',
  /** Shaviyani */
  Mv_24 = 'MV_24',
  /** Noonu */
  Mv_25 = 'MV_25',
  /** Kaafu */
  Mv_26 = 'MV_26',
  /** Gaaf Alif */
  Mv_27 = 'MV_27',
  /** Gaafu Dhaalu */
  Mv_28 = 'MV_28',
  /** Gnaviyani */
  Mv_29 = 'MV_29',
  /** Male */
  MvMle = 'MV_MLE',
  /** Central */
  MwC = 'MW_C',
  /** Northern */
  MwN = 'MW_N',
  /** Southern */
  MwS = 'MW_S',
  /** Aguascalientes */
  MxAgu = 'MX_AGU',
  /** Baja California */
  MxBcn = 'MX_BCN',
  /** Baja California Sur */
  MxBcs = 'MX_BCS',
  /** Campeche */
  MxCam = 'MX_CAM',
  /** Chihuahua */
  MxChh = 'MX_CHH',
  /** Chiapas */
  MxChp = 'MX_CHP',
  /** Coahuila */
  MxCoa = 'MX_COA',
  /** Colima */
  MxCol = 'MX_COL',
  /** Distrito Federal */
  MxDif = 'MX_DIF',
  /** Durango */
  MxDur = 'MX_DUR',
  /** Guerrero */
  MxGro = 'MX_GRO',
  /** Guanajuato */
  MxGua = 'MX_GUA',
  /** Hidalgo */
  MxHid = 'MX_HID',
  /** Jalisco */
  MxJal = 'MX_JAL',
  /** México */
  MxMex = 'MX_MEX',
  /** Michoacán */
  MxMic = 'MX_MIC',
  /** Morelos */
  MxMor = 'MX_MOR',
  /** Nayarit */
  MxNay = 'MX_NAY',
  /** Nuevo León */
  MxNle = 'MX_NLE',
  /** Oaxaca */
  MxOax = 'MX_OAX',
  /** Puebla */
  MxPue = 'MX_PUE',
  /** Queretaro */
  MxQue = 'MX_QUE',
  /** Quintana Roo */
  MxRoo = 'MX_ROO',
  /** Sinaloa */
  MxSin = 'MX_SIN',
  /** San Luis Potosí */
  MxSlp = 'MX_SLP',
  /** Sonora */
  MxSon = 'MX_SON',
  /** Tabasco */
  MxTab = 'MX_TAB',
  /** Tamaulipas */
  MxTam = 'MX_TAM',
  /** Tlaxcala */
  MxTla = 'MX_TLA',
  /** Veracruz */
  MxVer = 'MX_VER',
  /** Yucatán */
  MxYuc = 'MX_YUC',
  /** Zacatecas */
  MxZac = 'MX_ZAC',
  /** Perak */
  MyA = 'MY_A',
  /** Selangor */
  MyB = 'MY_B',
  /** Pahang */
  MyC = 'MY_C',
  /** Kelantan */
  MyD = 'MY_D',
  /** Johor */
  MyJ = 'MY_J',
  /** Kedah */
  MyK = 'MY_K',
  /** Wilayah Persekutuan Labuan */
  MyL = 'MY_L',
  /** Melaka */
  MyM = 'MY_M',
  /** Negeri Sembilan */
  MyN = 'MY_N',
  /** Pulau Pinang */
  MyP = 'MY_P',
  /** Perlis */
  MyR = 'MY_R',
  /** Sabah */
  MySa = 'MY_SA',
  /** Sarawak */
  MySk = 'MY_SK',
  /** Terengganu */
  MyT = 'MY_T',
  /** Wilayah Persekutuan Kuala Lumpur */
  MyW = 'MY_W',
  /** Niassa */
  MzA = 'MZ_A',
  /** Manica */
  MzB = 'MZ_B',
  /** Gaza */
  MzG = 'MZ_G',
  /** Inhambane */
  MzI = 'MZ_I',
  /** Maputo */
  MzL = 'MZ_L',
  /** Maputo */
  MzMpm = 'MZ_MPM',
  /** Nampula */
  MzN = 'MZ_N',
  /** Cabo Delgado */
  MzP = 'MZ_P',
  /** Zambézia */
  MzQ = 'MZ_Q',
  /** Sofala */
  MzS = 'MZ_S',
  /** Tete */
  MzT = 'MZ_T',
  /** Caprivi */
  NaCa = 'NA_CA',
  /** Erongo */
  NaEr = 'NA_ER',
  /** Hardap */
  NaHa = 'NA_HA',
  /** Karas */
  NaKa = 'NA_KA',
  /** Khomas */
  NaKh = 'NA_KH',
  /** Kunene */
  NaKu = 'NA_KU',
  /** Otjozondjupa */
  NaOd = 'NA_OD',
  /** Omaheke */
  NaOh = 'NA_OH',
  /** Okavango */
  NaOk = 'NA_OK',
  /** Oshana */
  NaOn = 'NA_ON',
  /** Omusati */
  NaOs = 'NA_OS',
  /** Oshikoto */
  NaOt = 'NA_OT',
  /** Ohangwena */
  NaOw = 'NA_OW',
  /** New Caledonia */
  NcNc = 'NC_NC',
  /** Agadez */
  Ne_1 = 'NE_1',
  /** Diffa */
  Ne_2 = 'NE_2',
  /** Dosso */
  Ne_3 = 'NE_3',
  /** Maradi */
  Ne_4 = 'NE_4',
  /** Tahoua */
  Ne_5 = 'NE_5',
  /** Tillaberi */
  Ne_6 = 'NE_6',
  /** Zinder */
  Ne_7 = 'NE_7',
  /** Niamey */
  Ne_8 = 'NE_8',
  /** Norfolk Island */
  NfNf = 'NF_NF',
  /** Abia */
  NgAb = 'NG_AB',
  /** Adamawa */
  NgAd = 'NG_AD',
  /** Akwa Ibom */
  NgAk = 'NG_AK',
  /** Anambra */
  NgAn = 'NG_AN',
  /** Bauchi */
  NgBa = 'NG_BA',
  /** Benue */
  NgBe = 'NG_BE',
  /** Borno */
  NgBo = 'NG_BO',
  /** Cross River */
  NgCr = 'NG_CR',
  /** Delta */
  NgDe = 'NG_DE',
  /** Edo */
  NgEd = 'NG_ED',
  /** Enugu */
  NgEn = 'NG_EN',
  /** Abuja Capital Territory */
  NgFc = 'NG_FC',
  /** Imo */
  NgIm = 'NG_IM',
  /** Jigawa */
  NgJi = 'NG_JI',
  /** Kaduna */
  NgKd = 'NG_KD',
  /** Kebbi */
  NgKe = 'NG_KE',
  /** Kano */
  NgKn = 'NG_KN',
  /** Kogi */
  NgKo = 'NG_KO',
  /** Katsina */
  NgKt = 'NG_KT',
  /** Kwara */
  NgKw = 'NG_KW',
  /** Lagos */
  NgLa = 'NG_LA',
  /** Niger */
  NgNi = 'NG_NI',
  /** Ogun */
  NgOg = 'NG_OG',
  /** Ondo */
  NgOn = 'NG_ON',
  /** Osun */
  NgOs = 'NG_OS',
  /** Oyo */
  NgOy = 'NG_OY',
  /** Plateau */
  NgPl = 'NG_PL',
  /** Rivers */
  NgRi = 'NG_RI',
  /** Sokoto */
  NgSo = 'NG_SO',
  /** Taraba */
  NgTa = 'NG_TA',
  /** Yobe */
  NgYo = 'NG_YO',
  /** Boaco */
  NiBo = 'NI_BO',
  /** Carazo */
  NiCa = 'NI_CA',
  /** Chinandega */
  NiCi = 'NI_CI',
  /** Chontales */
  NiCo = 'NI_CO',
  /** Estelí */
  NiEs = 'NI_ES',
  /** Granada */
  NiGr = 'NI_GR',
  /** Jinotega */
  NiJi = 'NI_JI',
  /** León */
  NiLe = 'NI_LE',
  /** Madriz */
  NiMd = 'NI_MD',
  /** Manaqua */
  NiMn = 'NI_MN',
  /** Masaya */
  NiMs = 'NI_MS',
  /** Matagalpa */
  NiMt = 'NI_MT',
  /** Nueva Segovia */
  NiNs = 'NI_NS',
  /** Rivas */
  NiRi = 'NI_RI',
  /** Río San Juan */
  NiSj = 'NI_SJ',
  /** Zelaya */
  NiZe = 'NI_ZE',
  /** Drenthe */
  NlDr = 'NL_DR',
  /** Flevoland */
  NlFl = 'NL_FL',
  /** Friesland */
  NlFr = 'NL_FR',
  /** Gelderland */
  NlGe = 'NL_GE',
  /** Groningen */
  NlGr = 'NL_GR',
  /** Limburg */
  NlLi = 'NL_LI',
  /** Noord-Brabant */
  NlNb = 'NL_NB',
  /** Noord-Holland */
  NlNh = 'NL_NH',
  /** Overijssel */
  NlOv = 'NL_OV',
  /** Utrecht */
  NlUt = 'NL_UT',
  /** Zeeland */
  NlZe = 'NL_ZE',
  /** Zuid-Holland */
  NlZh = 'NL_ZH',
  /** Østfold */
  No_01 = 'NO_01',
  /** Akershus */
  No_02 = 'NO_02',
  /** Oslo */
  No_03 = 'NO_03',
  /** Hedmark */
  No_04 = 'NO_04',
  /** Oppland */
  No_05 = 'NO_05',
  /** Buskerud */
  No_06 = 'NO_06',
  /** Vestfold */
  No_07 = 'NO_07',
  /** Telemark */
  No_08 = 'NO_08',
  /** Aust-Agder */
  No_09 = 'NO_09',
  /** Vest-Agder */
  No_10 = 'NO_10',
  /** Rogaland */
  No_11 = 'NO_11',
  /** Hordaland */
  No_12 = 'NO_12',
  /** Sogn og Fjordane */
  No_14 = 'NO_14',
  /** Møre og Romsdal */
  No_15 = 'NO_15',
  /** Sør-Trøndelag */
  No_16 = 'NO_16',
  /** Nord-Trøndelag */
  No_17 = 'NO_17',
  /** Nordland */
  No_18 = 'NO_18',
  /** Troms */
  No_19 = 'NO_19',
  /** Finnmark */
  No_20 = 'NO_20',
  /** Svalbard (Arctic Region) */
  No_21 = 'NO_21',
  /** Jan Mayen (Arctic Region) */
  No_22 = 'NO_22',
  /** Madhyamanchal */
  Np_1 = 'NP_1',
  /** Madhya Pashchimanchal */
  Np_2 = 'NP_2',
  /** Pashchimanchal */
  Np_3 = 'NP_3',
  /** Purwanchal */
  Np_4 = 'NP_4',
  /** Sudur Pashchimanchal */
  Np_5 = 'NP_5',
  /** Nauru */
  NrNr = 'NR_NR',
  /** Niue */
  NuNu = 'NU_NU',
  /** North Island */
  NzN = 'NZ_N',
  /** South Island */
  NzS = 'NZ_S',
  /** Al Bāţinah */
  OmBa = 'OM_BA',
  /** Ad Dākhilīyah */
  OmDa = 'OM_DA',
  /** Al Janūbīyah [Zufār] */
  OmJa = 'OM_JA',
  /** Masqaţ */
  OmMa = 'OM_MA',
  /** Musandam */
  OmMu = 'OM_MU',
  /** Ash Sharqīyah */
  OmSh = 'OM_SH',
  /** Al Wusţā */
  OmWu = 'OM_WU',
  /** Az Zāhirah */
  OmZa = 'OM_ZA',
  /** Comarca de San Blas */
  Pa_0 = 'PA_0',
  /** Botas del Toro */
  Pa_1 = 'PA_1',
  /** Coclé */
  Pa_2 = 'PA_2',
  /** Colón */
  Pa_3 = 'PA_3',
  /** Chiriquī */
  Pa_4 = 'PA_4',
  /** Darién */
  Pa_5 = 'PA_5',
  /** Herrera */
  Pa_6 = 'PA_6',
  /** Los Santos */
  Pa_7 = 'PA_7',
  /** Panamá */
  Pa_8 = 'PA_8',
  /** Veraguas */
  Pa_9 = 'PA_9',
  /** Amazonas */
  PeAma = 'PE_AMA',
  /** Ancash */
  PeAnc = 'PE_ANC',
  /** Apurímac */
  PeApu = 'PE_APU',
  /** Arequipa */
  PeAre = 'PE_ARE',
  /** Ayacucho */
  PeAya = 'PE_AYA',
  /** Cajamarca */
  PeCaj = 'PE_CAJ',
  /** El Callao */
  PeCal = 'PE_CAL',
  /** Cuzco [Cusco] */
  PeCus = 'PE_CUS',
  /** Huánuco */
  PeHuc = 'PE_HUC',
  /** Huancavelica */
  PeHuv = 'PE_HUV',
  /** Ica */
  PeIca = 'PE_ICA',
  /** Junín */
  PeJun = 'PE_JUN',
  /** La Libertad */
  PeLal = 'PE_LAL',
  /** Lambayeque */
  PeLam = 'PE_LAM',
  /** Lima */
  PeLim = 'PE_LIM',
  /** Loreto */
  PeLor = 'PE_LOR',
  /** Madre de Dios */
  PeMdd = 'PE_MDD',
  /** Moquegua */
  PeMoq = 'PE_MOQ',
  /** Pasco */
  PePas = 'PE_PAS',
  /** Piura */
  PePiu = 'PE_PIU',
  /** Puno */
  PePun = 'PE_PUN',
  /** San Martín */
  PeSam = 'PE_SAM',
  /** Tacna */
  PeTac = 'PE_TAC',
  /** Tumbes */
  PeTum = 'PE_TUM',
  /** Ucayali */
  PeUca = 'PE_UCA',
  /** French Polynesia */
  PfPf = 'PF_PF',
  /** Chimbu */
  PgCpk = 'PG_CPK',
  /** Central */
  PgCpm = 'PG_CPM',
  /** East New Britain */
  PgEbr = 'PG_EBR',
  /** Eastern Highlands */
  PgEhg = 'PG_EHG',
  /** Enga */
  PgEpw = 'PG_EPW',
  /** East Sepik */
  PgEsw = 'PG_ESW',
  /** Gulf */
  PgGpk = 'PG_GPK',
  /** Milne Bay */
  PgMba = 'PG_MBA',
  /** Morobe */
  PgMpl = 'PG_MPL',
  /** Madang */
  PgMpm = 'PG_MPM',
  /** Manus */
  PgMrl = 'PG_MRL',
  /** National Capital District (Port Moresby) */
  PgNcd = 'PG_NCD',
  /** New Ireland */
  PgNik = 'PG_NIK',
  /** Northern */
  PgNpp = 'PG_NPP',
  /** North Solomons */
  PgNsa = 'PG_NSA',
  /** Sandaun [West Sepik] */
  PgSan = 'PG_SAN',
  /** Southern Highlands */
  PgShm = 'PG_SHM',
  /** West New Britain */
  PgWbk = 'PG_WBK',
  /** Western Highlands */
  PgWhm = 'PG_WHM',
  /** Western */
  PgWpd = 'PG_WPD',
  /** Philippines */
  PhPh = 'PH_PH',
  /** Baluchistan (Balochistān) */
  PkBa = 'PK_BA',
  /** Islamabad */
  PkIs = 'PK_IS',
  /** Azad Kashmir */
  PkJk = 'PK_JK',
  /** Northern Areas */
  PkNa = 'PK_NA',
  /** North-West Frontier */
  PkNw = 'PK_NW',
  /** Punjab */
  PkPb = 'PK_PB',
  /** Sind (Sindh) */
  PkSd = 'PK_SD',
  /** Federally Administered Tribal Areas */
  PkTa = 'PK_TA',
  /** Bielsko */
  PlBb = 'PL_BB',
  /** Białystok */
  PlBk = 'PL_BK',
  /** Biała Podlaska */
  PlBp = 'PL_BP',
  /** Bydgoszcz */
  PlBy = 'PL_BY',
  /** Chełm */
  PlCh = 'PL_CH',
  /** Ciechanów */
  PlCi = 'PL_CI',
  /** Czestochowa */
  PlCz = 'PL_CZ',
  /** Elblag */
  PlEl = 'PL_EL',
  /** Gdańsk */
  PlGd = 'PL_GD',
  /** Gorzów */
  PlGo = 'PL_GO',
  /** Jelenia Gera */
  PlJg = 'PL_JG',
  /** Katowice */
  PlKa = 'PL_KA',
  /** Kielce */
  PlKi = 'PL_KI',
  /** Kalisz */
  PlKl = 'PL_KL',
  /** Konin */
  PlKn = 'PL_KN',
  /** Koszalin */
  PlKo = 'PL_KO',
  /** Kraków */
  PlKr = 'PL_KR',
  /** Krosno */
  PlKs = 'PL_KS',
  /** Łódź */
  PlLd = 'PL_LD',
  /** Leszno */
  PlLe = 'PL_LE',
  /** Legnica */
  PlLg = 'PL_LG',
  /** Łomia */
  PlLo = 'PL_LO',
  /** Lublin */
  PlLu = 'PL_LU',
  /** Nowy Sacz */
  PlNs = 'PL_NS',
  /** Olsztyn */
  PlOl = 'PL_OL',
  /** Opole */
  PlOp = 'PL_OP',
  /** Ostrołeka */
  PlOs = 'PL_OS',
  /** Piła */
  PlPi = 'PL_PI',
  /** Płock */
  PlPl = 'PL_PL',
  /** Poznań */
  PlPo = 'PL_PO',
  /** Przemyśl */
  PlPr = 'PL_PR',
  /** Piotrków */
  PlPt = 'PL_PT',
  /** Radom */
  PlRa = 'PL_RA',
  /** Rzeszów */
  PlRz = 'PL_RZ',
  /** Siedlce */
  PlSe = 'PL_SE',
  /** Sieradz */
  PlSi = 'PL_SI',
  /** Skierniewice */
  PlSk = 'PL_SK',
  /** Słupsk */
  PlSl = 'PL_SL',
  /** Suwałki */
  PlSu = 'PL_SU',
  /** Szczecin */
  PlSz = 'PL_SZ',
  /** Tarnów */
  PlTa = 'PL_TA',
  /** Tarnobrzeg */
  PlTg = 'PL_TG',
  /** Toruń */
  PlTo = 'PL_TO',
  /** Warszawa */
  PlWa = 'PL_WA',
  /** Wałbrzych */
  PlWb = 'PL_WB',
  /** Włocławek */
  PlWl = 'PL_WL',
  /** Wrocław */
  PlWr = 'PL_WR',
  /** Zamość */
  PlZa = 'PL_ZA',
  /** Zielona Góra */
  PlZg = 'PL_ZG',
  /** St. Pierre & Miquelon */
  PmPm = 'PM_PM',
  /** Pitcairn */
  PnPn = 'PN_PN',
  /** Puerto Rico */
  PrPr = 'PR_PR',
  /** Aveiro */
  Pt_01 = 'PT_01',
  /** Beja */
  Pt_02 = 'PT_02',
  /** Braga */
  Pt_03 = 'PT_03',
  /** Bragança */
  Pt_04 = 'PT_04',
  /** Castelo Branco */
  Pt_05 = 'PT_05',
  /** Coimbra */
  Pt_06 = 'PT_06',
  /** Évora */
  Pt_07 = 'PT_07',
  /** Faro */
  Pt_08 = 'PT_08',
  /** Guarda */
  Pt_09 = 'PT_09',
  /** Leiria */
  Pt_10 = 'PT_10',
  /** Lisboa */
  Pt_11 = 'PT_11',
  /** Portalegre */
  Pt_12 = 'PT_12',
  /** Porto */
  Pt_13 = 'PT_13',
  /** Santarém */
  Pt_14 = 'PT_14',
  /** Setúbal */
  Pt_15 = 'PT_15',
  /** Viana do Castelo */
  Pt_16 = 'PT_16',
  /** Vila Real */
  Pt_17 = 'PT_17',
  /** Viseu */
  Pt_18 = 'PT_18',
  /** Regiāo Autónoma dos Açores */
  Pt_20 = 'PT_20',
  /** Regiāo Autónoma da Madeira */
  Pt_30 = 'PT_30',
  /** Palau */
  PwPw = 'PW_PW',
  /** Concepción */
  Py_1 = 'PY_1',
  /** San Pedro */
  Py_2 = 'PY_2',
  /** Cordillera */
  Py_3 = 'PY_3',
  /** Guairá */
  Py_4 = 'PY_4',
  /** Caaguazú */
  Py_5 = 'PY_5',
  /** Caazapá */
  Py_6 = 'PY_6',
  /** Itapúa */
  Py_7 = 'PY_7',
  /** Misiones */
  Py_8 = 'PY_8',
  /** Paraguarī */
  Py_9 = 'PY_9',
  /** Alto Parang */
  Py_10 = 'PY_10',
  /** Central */
  Py_11 = 'PY_11',
  /** Neembucú */
  Py_12 = 'PY_12',
  /** Amambay */
  Py_13 = 'PY_13',
  /** Canindeyú */
  Py_14 = 'PY_14',
  /** Presidente Hayes */
  Py_15 = 'PY_15',
  /** Alto Paraguay */
  Py_16 = 'PY_16',
  /** Boquerón */
  Py_19 = 'PY_19',
  /** Asunción */
  PyAsu = 'PY_ASU',
  /** Ad Dawḩah */
  QaDa = 'QA_DA',
  /** Al Ghuwayrīyah */
  QaGh = 'QA_GH',
  /** Jarīyān al Bāţnah */
  QaJb = 'QA_JB',
  /** Al Jumaylīyah */
  QaJu = 'QA_JU',
  /** Al Khawr */
  QaKh = 'QA_KH',
  /** Madīnat ash Shamāl */
  QaMs = 'QA_MS',
  /** Ar Rayyān */
  QaRa = 'QA_RA',
  /** Umm Şalāl */
  QaUs = 'QA_US',
  /** Al Wakrah */
  QaWa = 'QA_WA',
  /** Reunion */
  ReRe = 'RE_RE',
  /** Alba */
  RoAb = 'RO_AB',
  /** Argeş */
  RoAg = 'RO_AG',
  /** Arad */
  RoAr = 'RO_AR',
  /** Bucureşti */
  RoB = 'RO_B',
  /** Bacău */
  RoBc = 'RO_BC',
  /** Bihor */
  RoBh = 'RO_BH',
  /** Bistriţa-Năsăud */
  RoBn = 'RO_BN',
  /** Brăila */
  RoBr = 'RO_BR',
  /** Botoşani */
  RoBt = 'RO_BT',
  /** Braşov */
  RoBv = 'RO_BV',
  /** Buzău */
  RoBz = 'RO_BZ',
  /** Cluj */
  RoCj = 'RO_CJ',
  /** Călăraşi */
  RoCl = 'RO_CL',
  /** Caraş-Severin */
  RoCs = 'RO_CS',
  /** Constanţa */
  RoCt = 'RO_CT',
  /** Covasna */
  RoCv = 'RO_CV',
  /** Dâmboviţa */
  RoDb = 'RO_DB',
  /** Dolj */
  RoDj = 'RO_DJ',
  /** Gorj */
  RoGj = 'RO_GJ',
  /** Galaţi */
  RoGl = 'RO_GL',
  /** Giurgiu */
  RoGr = 'RO_GR',
  /** Hunedoara */
  RoHd = 'RO_HD',
  /** Harghita */
  RoHr = 'RO_HR',
  /** Ialomiţa */
  RoIl = 'RO_IL',
  /** Iaşi */
  RoIs = 'RO_IS',
  /** Mehedinţi */
  RoMh = 'RO_MH',
  /** Maramureş */
  RoMm = 'RO_MM',
  /** Mureş */
  RoMs = 'RO_MS',
  /** Neamţ */
  RoNt = 'RO_NT',
  /** Olt */
  RoOt = 'RO_OT',
  /** Prahova */
  RoPh = 'RO_PH',
  /** Sibiu */
  RoSb = 'RO_SB',
  /** Sălaj */
  RoSj = 'RO_SJ',
  /** Satu Mare */
  RoSm = 'RO_SM',
  /** Suceava */
  RoSv = 'RO_SV',
  /** Tulcea */
  RoTl = 'RO_TL',
  /** Timiş */
  RoTm = 'RO_TM',
  /** Teleorman */
  RoTr = 'RO_TR',
  /** Vâlcea */
  RoVl = 'RO_VL',
  /** Vrancea */
  RoVn = 'RO_VN',
  /** Vaslui */
  RoVs = 'RO_VS',
  /** Adygeya, Respublika */
  RuAd = 'RU_AD',
  /** Aginskiy Buryatskiy avtonomnyy okrug */
  RuAgb = 'RU_AGB',
  /** Altay, Respublika */
  RuAl = 'RU_AL',
  /** Altayskiy kray */
  RuAlt = 'RU_ALT',
  /** Amurskaya Oblast' */
  RuAmu = 'RU_AMU',
  /** Arkhangel'skaya Oblast' */
  RuArk = 'RU_ARK',
  /** Astrakhanskaya Oblast' */
  RuAst = 'RU_AST',
  /** Bashkortostan, Respublika */
  RuBa = 'RU_BA',
  /** Belgorodskaya Oblast' */
  RuBel = 'RU_BEL',
  /** Bryanskaya Oblast' */
  RuBry = 'RU_BRY',
  /** Buryatiya, Respublika */
  RuBu = 'RU_BU',
  /** Chechenskaya Respublika */
  RuCe = 'RU_CE',
  /** Chelyabinskaya Oblast' */
  RuChe = 'RU_CHE',
  /** Chitinskaya Oblast' */
  RuChi = 'RU_CHI',
  /** Chukotskiy avtonomnyy okrug */
  RuChu = 'RU_CHU',
  /** Chuvashskaya Respublika */
  RuCu = 'RU_CU',
  /** Dagestan, Respublika */
  RuDa = 'RU_DA',
  /** Evenkiyskiy avtonomnyy okrug */
  RuEve = 'RU_EVE',
  /** Ingushskaya Respublika */
  RuIn = 'RU_IN',
  /** Irkutskaya Oblast' */
  RuIrk = 'RU_IRK',
  /** Ivanovskaya Oblast' */
  RuIva = 'RU_IVA',
  /** Kamchatskaya Oblast' */
  RuKam = 'RU_KAM',
  /** Kabardino-Balkarskaya Respublika */
  RuKb = 'RU_KB',
  /** Karachayevo-Cherkesskaya Respublika */
  RuKc = 'RU_KC',
  /** Krasnodarskiy kray */
  RuKda = 'RU_KDA',
  /** Kemerovskaya Oblast' */
  RuKem = 'RU_KEM',
  /** Kaliningradskaya Oblast' */
  RuKgd = 'RU_KGD',
  /** Kurganskaya Oblast' */
  RuKgn = 'RU_KGN',
  /** Khabarovskiy kray */
  RuKha = 'RU_KHA',
  /** Khanty-Mansiyskiy avtonomnyy okrug */
  RuKhm = 'RU_KHM',
  /** Kirovskaya Oblast' */
  RuKir = 'RU_KIR',
  /** Khakasiya, Respublika */
  RuKk = 'RU_KK',
  /** Kalmykiya, Respublika */
  RuKl = 'RU_KL',
  /** Kaluzhskaya Oblast' */
  RuKlu = 'RU_KLU',
  /** Komi, Respublika */
  RuKo = 'RU_KO',
  /** Komi-Permyatskiy avtonomnyy okrug */
  RuKop = 'RU_KOP',
  /** Koryakskiy avtonomnyy okrug */
  RuKor = 'RU_KOR',
  /** Kostromskaya Oblast' */
  RuKos = 'RU_KOS',
  /** Kareliya, Respublika */
  RuKr = 'RU_KR',
  /** Kurskaya Oblast' */
  RuKrs = 'RU_KRS',
  /** Krasnoyarskiy kray */
  RuKya = 'RU_KYA',
  /** Leningradskaya Oblast' */
  RuLen = 'RU_LEN',
  /** Lipetskaya Oblast' */
  RuLip = 'RU_LIP',
  /** Magadanskaya Oblast' */
  RuMag = 'RU_MAG',
  /** Mariy El, Respublika */
  RuMe = 'RU_ME',
  /** Mordoviya, Respublika */
  RuMo = 'RU_MO',
  /** Moskovskaya Oblast' */
  RuMos = 'RU_MOS',
  /** Moskva */
  RuMow = 'RU_MOW',
  /** Murmanskaya Oblast' */
  RuMur = 'RU_MUR',
  /** Nenetskiy avtonomnyy okrug */
  RuNen = 'RU_NEN',
  /** Novgorodskaya Oblast' */
  RuNgr = 'RU_NGR',
  /** Nizhegorodskaya Oblast' */
  RuNiz = 'RU_NIZ',
  /** Novosibirskaya Oblast' */
  RuNvs = 'RU_NVS',
  /** Omskaya Oblast' */
  RuOms = 'RU_OMS',
  /** Orenburgskaya Oblast' */
  RuOre = 'RU_ORE',
  /** Orlovskaya Oblast' */
  RuOrl = 'RU_ORL',
  /** Permskaya Oblast' */
  RuPer = 'RU_PER',
  /** Penzenskaya Oblast' */
  RuPnz = 'RU_PNZ',
  /** Primorskiy kray */
  RuPri = 'RU_PRI',
  /** Pskovskaya Oblast' */
  RuPsk = 'RU_PSK',
  /** Rostovskaya Oblast' */
  RuRos = 'RU_ROS',
  /** Ryazanskaya Oblast' */
  RuRya = 'RU_RYA',
  /** Sakha, Respublika [Yakutiya] */
  RuSa = 'RU_SA',
  /** Sakhalinskaya Oblast' */
  RuSak = 'RU_SAK',
  /** Samarskaya Oblast’ */
  RuSam = 'RU_SAM',
  /** Saratovskaya Oblast' */
  RuSar = 'RU_SAR',
  /** Severnaya Osetiya, Respublika [Alaniya] */
  RuSe = 'RU_SE',
  /** Smolenskaya Oblast' */
  RuSmo = 'RU_SMO',
  /** Sankt-Peterburg */
  RuSpe = 'RU_SPE',
  /** Stavropol 'skiy kray */
  RuSta = 'RU_STA',
  /** Sverdlovskaya Oblast' */
  RuSve = 'RU_SVE',
  /** Tatarstan, Respublika */
  RuTa = 'RU_TA',
  /** Tambovskaya Oblast' */
  RuTam = 'RU_TAM',
  /** Taymyrskiy (Dolgano-Nenetskiy) avtonomnyy okrug */
  RuTay = 'RU_TAY',
  /** Tomskaya Oblast’ */
  RuTom = 'RU_TOM',
  /** Tul'skaya Oblast' */
  RuTul = 'RU_TUL',
  /** Tverskaya Oblast' */
  RuTve = 'RU_TVE',
  /** Tyva, Respublika [Tuva] */
  RuTy = 'RU_TY',
  /** Tyumenskaya Oblast' */
  RuTyu = 'RU_TYU',
  /** Udmurtskaya Respublika */
  RuUd = 'RU_UD',
  /** Ul'yanovskaya Oblast' */
  RuUly = 'RU_ULY',
  /** Ust’-Ordynskiy Buryatskiy avtonomnyy okrug */
  RuUob = 'RU_UOB',
  /** Volgogradskaya Oblast' */
  RuVgg = 'RU_VGG',
  /** Vladimirskaya Oblast' */
  RuVla = 'RU_VLA',
  /** Vologodskaya Oblast' */
  RuVlg = 'RU_VLG',
  /** Voronezhskaya Oblast' */
  RuVor = 'RU_VOR',
  /** Yamalo-Nenetskiy avtonomnyy okrug */
  RuYan = 'RU_YAN',
  /** Yaroslavskaya Oblast' */
  RuYar = 'RU_YAR',
  /** Yevreyskaya avtonomnaya oblast' */
  RuYev = 'RU_YEV',
  /** Gitarama */
  RwB = 'RW_B',
  /** Butare */
  RwC = 'RW_C',
  /** Gikongoro */
  RwD = 'RW_D',
  /** Cyangugu */
  RwE = 'RW_E',
  /** Kibuye */
  RwF = 'RW_F',
  /** Gisenyi */
  RwG = 'RW_G',
  /** Ruhengeri */
  RwH = 'RW_H',
  /** Byumba */
  RwI = 'RW_I',
  /** Kibungo */
  RwJ = 'RW_J',
  /** Kigali-Rural (Kigali y’ Icyaro) */
  RwK = 'RW_K',
  /** Kigali-Ville (Kilgali Ngari) */
  RwL = 'RW_L',
  /** Mutara */
  RwM = 'RW_M',
  /** Makkah */
  Sa_02 = 'SA_02',
  /** Al Madīnah */
  Sa_03 = 'SA_03',
  /** Ash Sharqīyah */
  Sa_04 = 'SA_04',
  /** Al Qaşim */
  Sa_05 = 'SA_05',
  /** Ḩā'il */
  Sa_06 = 'SA_06',
  /** Tabūk */
  Sa_07 = 'SA_07',
  /** Al Ḩudūd ash Shamālīyah */
  Sa_08 = 'SA_08',
  /** Jīzān */
  Sa_09 = 'SA_09',
  /** Najrān */
  Sa_10 = 'SA_10',
  /** Al Bāḩah */
  Sa_11 = 'SA_11',
  /** Al Jawf */
  Sa_12 = 'SA_12',
  /** ‘Asīr */
  Sa_14 = 'SA_14',
  /** Ar Riyāḑ */
  SaO_1 = 'SA_O_1',
  /** Central */
  SbCe = 'SB_CE',
  /** Capital Territory (Honiara) */
  SbCt = 'SB_CT',
  /** Guadalcanal */
  SbGu = 'SB_GU',
  /** Isabel */
  SbIs = 'SB_IS',
  /** Makira */
  SbMk = 'SB_MK',
  /** Malaita */
  SbMl = 'SB_ML',
  /** Temotu */
  SbTe = 'SB_TE',
  /** Western */
  SbWe = 'SB_WE',
  /** Seychelles */
  ScSc = 'SC_SC',
  /** Ash Shamālīyah */
  Sd_01 = 'SD_01',
  /** Shamāl Dārfūr */
  Sd_02 = 'SD_02',
  /** Al Kharţūm */
  Sd_03 = 'SD_03',
  /** An Nīl */
  Sd_04 = 'SD_04',
  /** Kassalā */
  Sd_05 = 'SD_05',
  /** Al Qaḑārif */
  Sd_06 = 'SD_06',
  /** Al Jazīrah */
  Sd_07 = 'SD_07',
  /** An Nīl al Abyaḑ */
  Sd_08 = 'SD_08',
  /** Shamāl Kurdufān */
  Sd_09 = 'SD_09',
  /** Gharb Kurdufān */
  Sd_10 = 'SD_10',
  /** Janūb Dārfūr */
  Sd_11 = 'SD_11',
  /** Gharb Dārfūr */
  Sd_12 = 'SD_12',
  /** Janūb Kurdufān */
  Sd_13 = 'SD_13',
  /** Gharb Baḩr al Ghazāl */
  Sd_14 = 'SD_14',
  /** Shamāl Baḩr al Ghazāl */
  Sd_15 = 'SD_15',
  /** Gharb al Istiwā'īyah */
  Sd_16 = 'SD_16',
  /** Baḩr al Jabal */
  Sd_17 = 'SD_17',
  /** Al Buḩayrāt */
  Sd_18 = 'SD_18',
  /** Sharq al Istiwā'iyah */
  Sd_19 = 'SD_19',
  /** Jūnqalī */
  Sd_20 = 'SD_20',
  /** Wārāb */
  Sd_21 = 'SD_21',
  /** Al Waḩdah */
  Sd_22 = 'SD_22',
  /** A‘ālī an Nīl */
  Sd_23 = 'SD_23',
  /** An Nīl al Azraq */
  Sd_24 = 'SD_24',
  /** Sinnār */
  Sd_25 = 'SD_25',
  /** Al Baḩr al Aḩmar */
  Sd_26 = 'SD_26',
  /** Stockholms län */
  SeAb = 'SE_AB',
  /** Västerbottens län */
  SeAc = 'SE_AC',
  /** Norrbottens län */
  SeBd = 'SE_BD',
  /** Uppsala län */
  SeC = 'SE_C',
  /** Södermanlands län */
  SeD = 'SE_D',
  /** Östergötlands län */
  SeE = 'SE_E',
  /** Jönköpings län */
  SeF = 'SE_F',
  /** Kronobergs län */
  SeG = 'SE_G',
  /** Kalmar län */
  SeH = 'SE_H',
  /** Gotlands län */
  SeI = 'SE_I',
  /** Blekinge län */
  SeK = 'SE_K',
  /** Skåne län */
  SeM = 'SE_M',
  /** Hallands län */
  SeN = 'SE_N',
  /** Västra Götalands län */
  SeO = 'SE_O',
  /** Värmlands län */
  SeS = 'SE_S',
  /** Örebro län */
  SeT = 'SE_T',
  /** Västmanlands län */
  SeU = 'SE_U',
  /** Dalarnas län */
  SeW = 'SE_W',
  /** Gävleborgs län */
  SeX = 'SE_X',
  /** Västernorrlands län */
  SeY = 'SE_Y',
  /** Jämtlands län */
  SeZ = 'SE_Z',
  /** Singapore */
  SgSg = 'SG_SG',
  /** Ascension */
  ShAc = 'SH_AC',
  /** Saint Helena */
  ShSh = 'SH_SH',
  /** Tristan da Cunha */
  ShTa = 'SH_TA',
  /** Pomurska */
  Si_01 = 'SI_01',
  /** Podravska */
  Si_02 = 'SI_02',
  /** Koroška */
  Si_03 = 'SI_03',
  /** Savinjska */
  Si_04 = 'SI_04',
  /** Zasavska */
  Si_05 = 'SI_05',
  /** Spodnjeposavska */
  Si_06 = 'SI_06',
  /** Dolenjska */
  Si_07 = 'SI_07',
  /** Osrednjeslovenska */
  Si_08 = 'SI_08',
  /** Gorenjska */
  Si_09 = 'SI_09',
  /** Notranjsko-kraška */
  Si_10 = 'SI_10',
  /** Goriška */
  Si_11 = 'SI_11',
  /** Obalno-kraška */
  Si_12 = 'SI_12',
  /** Svalbard & Jan Mayen Islands */
  SjSj = 'SJ_SJ',
  /** Banskobystrický kraj */
  SkBc = 'SK_BC',
  /** Bratislavský kraj */
  SkBl = 'SK_BL',
  /** Košický kraj */
  SkKi = 'SK_KI',
  /** Nitriansky kraj */
  SkNi = 'SK_NI',
  /** Prešovský kraj */
  SkPv = 'SK_PV',
  /** Trnavský kraj */
  SkTa = 'SK_TA',
  /** Trenčiansky kraj */
  SkTc = 'SK_TC',
  /** Žilinský kraj */
  SkZi = 'SK_ZI',
  /** Eastern */
  SlE = 'SL_E',
  /** Northern */
  SlN = 'SL_N',
  /** Southern */
  SlS = 'SL_S',
  /** Western Area (Freetown) */
  SlW = 'SL_W',
  /** San Marino */
  SmSm = 'SM_SM',
  /** Diourbel */
  SnDb = 'SN_DB',
  /** Dakar */
  SnDk = 'SN_DK',
  /** Fatick */
  SnFk = 'SN_FK',
  /** Kolda */
  SnKd = 'SN_KD',
  /** Kaolack */
  SnKl = 'SN_KL',
  /** Louga */
  SnLg = 'SN_LG',
  /** Saint-Louis */
  SnSl = 'SN_SL',
  /** Tambacounda */
  SnTc = 'SN_TC',
  /** Thiès */
  SnTh = 'SN_TH',
  /** Ziguinchor */
  SnZg = 'SN_ZG',
  /** Awdal */
  SoAw = 'SO_AW',
  /** Bakool */
  SoBk = 'SO_BK',
  /** Banaadir */
  SoBn = 'SO_BN',
  /** Bari */
  SoBr = 'SO_BR',
  /** BaY */
  SoBy = 'SO_BY',
  /** Galguduud */
  SoGa = 'SO_GA',
  /** Gedo */
  SoGe = 'SO_GE',
  /** Hiiraan */
  SoHi = 'SO_HI',
  /** Jubbada Dhexe */
  SoJd = 'SO_JD',
  /** Jubbada Hoose */
  SoJh = 'SO_JH',
  /** Mudug */
  SoMu = 'SO_MU',
  /** Nugaal */
  SoNu = 'SO_NU',
  /** Sanaag */
  SoSa = 'SO_SA',
  /** Shabeellaha Dhexe */
  SoSd = 'SO_SD',
  /** Shabeellaha Hoose */
  SoSh = 'SO_SH',
  /** Sool */
  SoSo = 'SO_SO',
  /** Togdheer */
  SoTo = 'SO_TO',
  /** Woqooyi Galbeed */
  SoWo = 'SO_WO',
  /** Brokopondo */
  SrBr = 'SR_BR',
  /** Commewijne */
  SrCm = 'SR_CM',
  /** Coronie */
  SrCr = 'SR_CR',
  /** Marowijne */
  SrMa = 'SR_MA',
  /** Nickerie */
  SrNi = 'SR_NI',
  /** Paramaribo */
  SrPm = 'SR_PM',
  /** Para */
  SrPr = 'SR_PR',
  /** Saramacca */
  SrSa = 'SR_SA',
  /** Sipaliwini */
  SrSi = 'SR_SI',
  /** Wanica */
  SrWa = 'SR_WA',
  /** Príncipe */
  StP = 'ST_P',
  /** Sāo Tomé */
  StS = 'ST_S',
  /** Ahuachapán */
  SvAh = 'SV_AH',
  /** Cabañas */
  SvCa = 'SV_CA',
  /** Chalatenango */
  SvCh = 'SV_CH',
  /** Cuscatlán */
  SvCu = 'SV_CU',
  /** La Libertad */
  SvLi = 'SV_LI',
  /** Morazán */
  SvMo = 'SV_MO',
  /** La Paz */
  SvPa = 'SV_PA',
  /** Santa Ana */
  SvSa = 'SV_SA',
  /** San Miguel */
  SvSm = 'SV_SM',
  /** Sonsonate */
  SvSo = 'SV_SO',
  /** San Salvador */
  SvSs = 'SV_SS',
  /** Usulután */
  SvSu = 'SV_SU',
  /** San Vicente */
  SvSv = 'SV_SV',
  /** La Unión */
  SvUn = 'SV_UN',
  /** Dimashq */
  SyDi = 'SY_DI',
  /** Dar’ā */
  SyDr = 'SY_DR',
  /** Dayr az Zawr */
  SyDy = 'SY_DY',
  /** Al Ḩasakah */
  SyHa = 'SY_HA',
  /** Ḩimş */
  SyHi = 'SY_HI',
  /** Ḩalab */
  SyHl = 'SY_HL',
  /** Ḩamāh */
  SyHm = 'SY_HM',
  /** Idlib */
  SyId = 'SY_ID',
  /** Al Lādhiqīyah */
  SyLa = 'SY_LA',
  /** Al Qunayţirah */
  SyQu = 'SY_QU',
  /** Ar Raqqah */
  SyRa = 'SY_RA',
  /** Rīf Dimashq */
  SyRd = 'SY_RD',
  /** As Suwaydā' */
  SySu = 'SY_SU',
  /** Ţarţūs */
  SyTa = 'SY_TA',
  /** Hhohho */
  SzHh = 'SZ_HH',
  /** Lubombo */
  SzLu = 'SZ_LU',
  /** Manzini */
  SzMa = 'SZ_MA',
  /** Shiselweni */
  SzSh = 'SZ_SH',
  /** Turks & Caicos Islands */
  TcTc = 'TC_TC',
  /** Batha */
  TdBa = 'TD_BA',
  /** Borkou-Ennedi-Tibesti */
  TdBet = 'TD_BET',
  /** Biltine */
  TdBi = 'TD_BI',
  /** Chari-Baguirmi */
  TdCb = 'TD_CB',
  /** Guéra */
  TdGr = 'TD_GR',
  /** Kanem */
  TdKa = 'TD_KA',
  /** Lac */
  TdLc = 'TD_LC',
  /** Logone-Occidental */
  TdLo = 'TD_LO',
  /** Logone-Oriental */
  TdLr = 'TD_LR',
  /** Moyen-Chari */
  TdMc = 'TD_MC',
  /** Mayo-Kébbi */
  TdMk = 'TD_MK',
  /** Ouaddaï */
  TdOd = 'TD_OD',
  /** Salamat */
  TdSa = 'TD_SA',
  /** Tandjilé */
  TdTa = 'TD_TA',
  /** French Southern Territories */
  TfTf = 'TF_TF',
  /** Centre */
  TgC = 'TG_C',
  /** Kara */
  TgK = 'TG_K',
  /** Maritime (Région) */
  TgM = 'TG_M',
  /** Plateaux */
  TgP = 'TG_P',
  /** Savannes */
  TgS = 'TG_S',
  /** Krung Thep Maha Nakhon [Bangkok] */
  Th_10 = 'TH_10',
  /** Samut Prakan */
  Th_11 = 'TH_11',
  /** Nonthaburi */
  Th_12 = 'TH_12',
  /** Pathum Thani */
  Th_13 = 'TH_13',
  /** Phra Nakhon Si Ayutthaya */
  Th_14 = 'TH_14',
  /** Ang Thong */
  Th_15 = 'TH_15',
  /** Lop Buri */
  Th_16 = 'TH_16',
  /** Sing Buri */
  Th_17 = 'TH_17',
  /** Chai Nat */
  Th_18 = 'TH_18',
  /** Saraburi */
  Th_19 = 'TH_19',
  /** Chon Buri */
  Th_20 = 'TH_20',
  /** Rayong */
  Th_21 = 'TH_21',
  /** Chanthaburi */
  Th_22 = 'TH_22',
  /** Trat */
  Th_23 = 'TH_23',
  /** Chachoengsao */
  Th_24 = 'TH_24',
  /** Prachin Buri */
  Th_25 = 'TH_25',
  /** Nakhon Nayok */
  Th_26 = 'TH_26',
  /** Sa Kaeo */
  Th_27 = 'TH_27',
  /** Nakhon Ratchasima */
  Th_30 = 'TH_30',
  /** Buri Ram */
  Th_31 = 'TH_31',
  /** Surin */
  Th_32 = 'TH_32',
  /** Si Sa Ket */
  Th_33 = 'TH_33',
  /** Ubon Ratchathani */
  Th_34 = 'TH_34',
  /** Yasothon */
  Th_35 = 'TH_35',
  /** Chaiyaphum */
  Th_36 = 'TH_36',
  /** Amnat Charoen */
  Th_37 = 'TH_37',
  /** Nong Bua Lam Phu */
  Th_39 = 'TH_39',
  /** Khon Kaen */
  Th_40 = 'TH_40',
  /** Udon Thani */
  Th_41 = 'TH_41',
  /** Loei */
  Th_42 = 'TH_42',
  /** Nong Khai */
  Th_43 = 'TH_43',
  /** Maha Sarakham */
  Th_44 = 'TH_44',
  /** Roi Et */
  Th_45 = 'TH_45',
  /** Kalasin */
  Th_46 = 'TH_46',
  /** Sakon Nakhon */
  Th_47 = 'TH_47',
  /** Nakhon Phanom */
  Th_48 = 'TH_48',
  /** Mukdahan */
  Th_49 = 'TH_49',
  /** Chiang Mai */
  Th_50 = 'TH_50',
  /** Lamphun */
  Th_51 = 'TH_51',
  /** Lampang */
  Th_52 = 'TH_52',
  /** Uttaradit */
  Th_53 = 'TH_53',
  /** Phrae */
  Th_54 = 'TH_54',
  /** Nan */
  Th_55 = 'TH_55',
  /** Phayao */
  Th_56 = 'TH_56',
  /** Chiang Rai */
  Th_57 = 'TH_57',
  /** Mae Hong Son */
  Th_58 = 'TH_58',
  /** Nakhon Sawan */
  Th_60 = 'TH_60',
  /** Uthai Thani */
  Th_61 = 'TH_61',
  /** Kamphaeng Phet */
  Th_62 = 'TH_62',
  /** Tak */
  Th_63 = 'TH_63',
  /** Sukhothai */
  Th_64 = 'TH_64',
  /** Phitsanulok */
  Th_65 = 'TH_65',
  /** Phichit */
  Th_66 = 'TH_66',
  /** Phetchabun */
  Th_67 = 'TH_67',
  /** Ratchaburi */
  Th_70 = 'TH_70',
  /** Kanchanaburi */
  Th_71 = 'TH_71',
  /** Suphan Buri */
  Th_72 = 'TH_72',
  /** Nakhon Pathom */
  Th_73 = 'TH_73',
  /** Samut Sakhon */
  Th_74 = 'TH_74',
  /** Samut Songkhram */
  Th_75 = 'TH_75',
  /** Phetchaburi */
  Th_76 = 'TH_76',
  /** Prachuap Khiri Khan */
  Th_77 = 'TH_77',
  /** Nakhon Si Thammarat */
  Th_80 = 'TH_80',
  /** Krabi */
  Th_81 = 'TH_81',
  /** Phangnga */
  Th_82 = 'TH_82',
  /** Phuket */
  Th_83 = 'TH_83',
  /** Surat Thani */
  Th_84 = 'TH_84',
  /** Ranong */
  Th_85 = 'TH_85',
  /** Chumphon */
  Th_86 = 'TH_86',
  /** Songkhla */
  Th_90 = 'TH_90',
  /** Satun */
  Th_91 = 'TH_91',
  /** Trang */
  Th_92 = 'TH_92',
  /** Phatthalung */
  Th_93 = 'TH_93',
  /** Pattani */
  Th_94 = 'TH_94',
  /** Yala */
  Th_95 = 'TH_95',
  /** Narathiwat */
  Th_96 = 'TH_96',
  /** Phatthaya */
  ThS = 'TH_S',
  /** Gorno-Badakhshan */
  TjGb = 'TJ_GB',
  /** Karategin */
  TjKr = 'TJ_KR',
  /** Khatlon */
  TjKt = 'TJ_KT',
  /** Leninabad */
  TjLn = 'TJ_LN',
  /** Tokelau */
  TkTk = 'TK_TK',
  /** Ahal */
  TmA = 'TM_A',
  /** Balkan */
  TmB = 'TM_B',
  /** Daşhowuz */
  TmD = 'TM_D',
  /** Lebap */
  TmL = 'TM_L',
  /** Mary */
  TmM = 'TM_M',
  /** Tunis */
  Tn_11 = 'TN_11',
  /** L'Ariana */
  Tn_12 = 'TN_12',
  /** Ben Arous */
  Tn_13 = 'TN_13',
  /** Nabeul */
  Tn_21 = 'TN_21',
  /** Zaghouan */
  Tn_22 = 'TN_22',
  /** Bizerte */
  Tn_23 = 'TN_23',
  /** Béja */
  Tn_31 = 'TN_31',
  /** Jendouba */
  Tn_32 = 'TN_32',
  /** Le Kef */
  Tn_33 = 'TN_33',
  /** Siliana */
  Tn_34 = 'TN_34',
  /** Kairouan */
  Tn_41 = 'TN_41',
  /** Kasserine */
  Tn_42 = 'TN_42',
  /** Sidi Bouzid */
  Tn_43 = 'TN_43',
  /** Sousse */
  Tn_51 = 'TN_51',
  /** Monastir */
  Tn_52 = 'TN_52',
  /** Mahdia */
  Tn_53 = 'TN_53',
  /** Sfax */
  Tn_61 = 'TN_61',
  /** Gafsa */
  Tn_71 = 'TN_71',
  /** Tozeur */
  Tn_72 = 'TN_72',
  /** Kebili */
  Tn_73 = 'TN_73',
  /** Gabès */
  Tn_81 = 'TN_81',
  /** Medenine */
  Tn_82 = 'TN_82',
  /** Tataouine */
  Tn_83 = 'TN_83',
  /** Tonga */
  ToTo = 'TO_TO',
  /** East Timor */
  TpTp = 'TP_TP',
  /** Adana */
  Tr_01 = 'TR_01',
  /** Adiyaman */
  Tr_02 = 'TR_02',
  /** Afyon */
  Tr_03 = 'TR_03',
  /** Ağrı */
  Tr_04 = 'TR_04',
  /** Amasya */
  Tr_05 = 'TR_05',
  /** Ankara */
  Tr_06 = 'TR_06',
  /** Antalya */
  Tr_07 = 'TR_07',
  /** Artvin */
  Tr_08 = 'TR_08',
  /** Aydin */
  Tr_09 = 'TR_09',
  /** Manisa */
  Tr_4S = 'TR_4_S',
  /** Balıkesir */
  Tr_10 = 'TR_10',
  /** Bilecik */
  Tr_11 = 'TR_11',
  /** Bingöl */
  Tr_12 = 'TR_12',
  /** Bitlis */
  Tr_13 = 'TR_13',
  /** Bolu */
  Tr_14 = 'TR_14',
  /** Burdur */
  Tr_15 = 'TR_15',
  /** Bursa */
  Tr_16 = 'TR_16',
  /** Çanakkale */
  Tr_17 = 'TR_17',
  /** Çankırı */
  Tr_18 = 'TR_18',
  /** Çorum */
  Tr_19 = 'TR_19',
  /** Denizli */
  Tr_20 = 'TR_20',
  /** Diyarbakır */
  Tr_21 = 'TR_21',
  /** Edirne */
  Tr_22 = 'TR_22',
  /** Elaziğ */
  Tr_23 = 'TR_23',
  /** Erzincan */
  Tr_24 = 'TR_24',
  /** Erzurum */
  Tr_25 = 'TR_25',
  /** Eskişehir */
  Tr_26 = 'TR_26',
  /** Gaziantep */
  Tr_27 = 'TR_27',
  /** Giresun */
  Tr_28 = 'TR_28',
  /** Gümüşhane */
  Tr_29 = 'TR_29',
  /** Hakkari */
  Tr_30 = 'TR_30',
  /** Hatay */
  Tr_31 = 'TR_31',
  /** Isparta */
  Tr_32 = 'TR_32',
  /** İçel */
  Tr_33 = 'TR_33',
  /** İstanbul */
  Tr_34 = 'TR_34',
  /** İzmir */
  Tr_35 = 'TR_35',
  /** Kars */
  Tr_36 = 'TR_36',
  /** Kastamonu */
  Tr_37 = 'TR_37',
  /** Kayseri */
  Tr_38 = 'TR_38',
  /** Kırklareli */
  Tr_39 = 'TR_39',
  /** Kırşehir */
  Tr_40 = 'TR_40',
  /** Kocaeli */
  Tr_41 = 'TR_41',
  /** Konya */
  Tr_42 = 'TR_42',
  /** Kütahya */
  Tr_43 = 'TR_43',
  /** Malatya */
  Tr_44 = 'TR_44',
  /** Kahramanmaraş */
  Tr_46 = 'TR_46',
  /** Mardin */
  Tr_47 = 'TR_47',
  /** Muğla */
  Tr_48 = 'TR_48',
  /** Muş */
  Tr_49 = 'TR_49',
  /** Niğde */
  Tr_51 = 'TR_51',
  /** Ordu */
  Tr_52 = 'TR_52',
  /** Rize */
  Tr_53 = 'TR_53',
  /** Sakarya */
  Tr_54 = 'TR_54',
  /** Siirt */
  Tr_56 = 'TR_56',
  /** Sinop */
  Tr_57 = 'TR_57',
  /** Tekirdağ */
  Tr_59 = 'TR_59',
  /** Tokat */
  Tr_60 = 'TR_60',
  /** Trabzon */
  Tr_61 = 'TR_61',
  /** Tunceli */
  Tr_62 = 'TR_62',
  /** Şanlıurfa */
  Tr_63 = 'TR_63',
  /** Uşak */
  Tr_64 = 'TR_64',
  /** Van */
  Tr_65 = 'TR_65',
  /** Yozgat */
  Tr_66 = 'TR_66',
  /** Zonguldak */
  Tr_67 = 'TR_67',
  /** Aksaray */
  Tr_68 = 'TR_68',
  /** Bayburt */
  Tr_69 = 'TR_69',
  /** Karaman */
  Tr_70 = 'TR_70',
  /** Kırıkkale */
  Tr_71 = 'TR_71',
  /** Batman */
  Tr_72 = 'TR_72',
  /** Şirnak */
  Tr_73 = 'TR_73',
  /** Bartın */
  Tr_74 = 'TR_74',
  /** Ardahan */
  Tr_75 = 'TR_75',
  /** Iğdir */
  Tr_76 = 'TR_76',
  /** Yalova */
  Tr_77 = 'TR_77',
  /** Karabük */
  Tr_78 = 'TR_78',
  /** Kilis */
  Tr_79 = 'TR_79',
  /** Nevşehir */
  TrSo = 'TR_SO',
  /** Samsun */
  TrSs = 'TR_SS',
  /** Sivas */
  TrS_8 = 'TR_S_8',
  /** Arima */
  TtAri = 'TT_ARI',
  /** Chaguanas */
  TtCha = 'TT_CHA',
  /** Couva-Tabaquite-Talparo */
  TtCtt = 'TT_CTT',
  /** Diego Martin */
  TtDmn = 'TT_DMN',
  /** Eastern Tobago */
  TtEto = 'TT_ETO',
  /** Penal-Debe */
  TtPed = 'TT_PED',
  /** Port of Spain */
  TtPos = 'TT_POS',
  /** Princes Town */
  TtPrt = 'TT_PRT',
  /** Point Fortin */
  TtPtf = 'TT_PTF',
  /** Rio Claro-Mayaro */
  TtRcm = 'TT_RCM',
  /** San Fernando */
  TtSfo = 'TT_SFO',
  /** Sangre Grande */
  TtSge = 'TT_SGE',
  /** Siparia */
  TtSip = 'TT_SIP',
  /** San Juan-Laventille */
  TtSjl = 'TT_SJL',
  /** Tunapuna-Piarco */
  TtTup = 'TT_TUP',
  /** Western Tobago */
  TtWto = 'TT_WTO',
  /** Tuvalu */
  TvTv = 'TV_TV',
  /** Changhua */
  TwCha = 'TW_CHA',
  /** Chiayi */
  TwCyi = 'TW_CYI',
  /** Hsinchu */
  TwHsz = 'TW_HSZ',
  /** Hualien */
  TwHua = 'TW_HUA',
  /** Ilan */
  TwIla = 'TW_ILA',
  /** Keelung */
  TwKee = 'TW_KEE',
  /** Kaohsiung */
  TwKhh = 'TW_KHH',
  /** Miaoli */
  TwMia = 'TW_MIA',
  /** Nantou */
  TwNan = 'TW_NAN',
  /** Penghu */
  TwPen = 'TW_PEN',
  /** Pingtung */
  TwPif = 'TW_PIF',
  /** Taoyuan */
  TwTao = 'TW_TAO',
  /** Tainan */
  TwTnn = 'TW_TNN',
  /** Taipei */
  TwTpe = 'TW_TPE',
  /** Taitung */
  TwTtt = 'TW_TTT',
  /** Taichung */
  TwTxg = 'TW_TXG',
  /** Yunlin */
  TwYun = 'TW_YUN',
  /** Arusha */
  Tz_01 = 'TZ_01',
  /** Dar-es-Salaam */
  Tz_02 = 'TZ_02',
  /** Dodoma */
  Tz_03 = 'TZ_03',
  /** Iringa */
  Tz_04 = 'TZ_04',
  /** Kagera */
  Tz_05 = 'TZ_05',
  /** Kaskazini Pemba (Pemba North) */
  Tz_06 = 'TZ_06',
  /** Kaskazini Unguja (Zanzibar North) */
  Tz_07 = 'TZ_07',
  /** Kigoma */
  Tz_08 = 'TZ_08',
  /** Kilimanjaro */
  Tz_09 = 'TZ_09',
  /** Kusini Pemba (Pemba South) */
  Tz_10 = 'TZ_10',
  /** Kusini Unguja (Zanzibar South) */
  Tz_11 = 'TZ_11',
  /** Lindi */
  Tz_12 = 'TZ_12',
  /** Mara */
  Tz_13 = 'TZ_13',
  /** Mbeya */
  Tz_14 = 'TZ_14',
  /** Mjini Magharibi (Zanzibar West) */
  Tz_15 = 'TZ_15',
  /** Morogoro */
  Tz_16 = 'TZ_16',
  /** Mtwara */
  Tz_17 = 'TZ_17',
  /** Mwanza */
  Tz_18 = 'TZ_18',
  /** Pwani (Coast) */
  Tz_19 = 'TZ_19',
  /** Rukwa */
  Tz_20 = 'TZ_20',
  /** Ruvuma */
  Tz_21 = 'TZ_21',
  /** Shinyanga */
  Tz_22 = 'TZ_22',
  /** Singida */
  Tz_23 = 'TZ_23',
  /** Tabora */
  Tz_24 = 'TZ_24',
  /** Tanga */
  Tz_25 = 'TZ_25',
  /** Vinnyts'ka Oblast' */
  Ua_05 = 'UA_05',
  /** Volyns'ka Oblast' */
  Ua_07 = 'UA_07',
  /** Luhans'ka Oblast' */
  Ua_09 = 'UA_09',
  /** Dnipropetrovs'ka Oblast' */
  Ua_12 = 'UA_12',
  /** Donets'ka Oblast' */
  Ua_14 = 'UA_14',
  /** Zhytomyrs'ka Oblast' */
  Ua_18 = 'UA_18',
  /** Zakarpats'ka Oblast' */
  Ua_21 = 'UA_21',
  /** Zaporiz'ka Oblast' */
  Ua_23 = 'UA_23',
  /** Ivano-Frankivs'ka Oblast' */
  Ua_26 = 'UA_26',
  /** Kyïv */
  Ua_30 = 'UA_30',
  /** Kyïvs'ka Oblast' */
  Ua_32 = 'UA_32',
  /** Kirovohrads'ka Oblast' */
  Ua_35 = 'UA_35',
  /** Sevastopol' */
  Ua_40 = 'UA_40',
  /** Respublika Krym */
  Ua_43 = 'UA_43',
  /** L'vivs'ka Oblast' */
  Ua_46 = 'UA_46',
  /** Mykolaïvs'ka Oblast' */
  Ua_48 = 'UA_48',
  /** Odes'ka Oblast' */
  Ua_51 = 'UA_51',
  /** Poltavs'ka Oblast' */
  Ua_53 = 'UA_53',
  /** Rivnens'ka Oblast' */
  Ua_56 = 'UA_56',
  /** Sums'ka Oblast' */
  Ua_59 = 'UA_59',
  /** Ternopil's'ka Oblast' */
  Ua_61 = 'UA_61',
  /** Kharkivs'ka Oblast' */
  Ua_63 = 'UA_63',
  /** Khersons'ka Oblast' */
  Ua_65 = 'UA_65',
  /** Khmel'nyts'ka Oblast' */
  Ua_68 = 'UA_68',
  /** Cherkas'ka Oblast' */
  Ua_71 = 'UA_71',
  /** Chernihivs'ka Oblast' */
  Ua_74 = 'UA_74',
  /** Chernivets'ka Oblast' */
  Ua_77 = 'UA_77',
  /** Apac */
  UgApa = 'UG_APA',
  /** Arua */
  UgAru = 'UG_ARU',
  /** Bundibugyo */
  UgBun = 'UG_BUN',
  /** Bushenyi */
  UgBus = 'UG_BUS',
  /** Gulu */
  UgGul = 'UG_GUL',
  /** Hoima */
  UgHoi = 'UG_HOI',
  /** Iganga */
  UgIga = 'UG_IGA',
  /** Jinja */
  UgJin = 'UG_JIN',
  /** Kapchorwa */
  UgKap = 'UG_KAP',
  /** Kasese */
  UgKas = 'UG_KAS',
  /** Kabale */
  UgKbl = 'UG_KBL',
  /** Kabarole */
  UgKbr = 'UG_KBR',
  /** Kiboga */
  UgKib = 'UG_KIB',
  /** Kisoro */
  UgKis = 'UG_KIS',
  /** Kitgum */
  UgKit = 'UG_KIT',
  /** Kampala */
  UgKla = 'UG_KLA',
  /** Kibaale */
  UgKle = 'UG_KLE',
  /** Kalangala */
  UgKlg = 'UG_KLG',
  /** Kamuli */
  UgKli = 'UG_KLI',
  /** Kotido */
  UgKot = 'UG_KOT',
  /** Kumi */
  UgKum = 'UG_KUM',
  /** Lira */
  UgLir = 'UG_LIR',
  /** Luwero */
  UgLuw = 'UG_LUW',
  /** Mbale */
  UgMbl = 'UG_MBL',
  /** Mbarara */
  UgMbr = 'UG_MBR',
  /** Moroto */
  UgMor = 'UG_MOR',
  /** Moyo */
  UgMoy = 'UG_MOY',
  /** Mpigi */
  UgMpi = 'UG_MPI',
  /** Masindi */
  UgMsi = 'UG_MSI',
  /** Masaka */
  UgMsk = 'UG_MSK',
  /** Mubende */
  UgMub = 'UG_MUB',
  /** Mukono */
  UgMuk = 'UG_MUK',
  /** Nebbi */
  UgNeb = 'UG_NEB',
  /** Ntungamo */
  UgNtu = 'UG_NTU',
  /** Pallisa */
  UgPal = 'UG_PAL',
  /** Rakai */
  UgRak = 'UG_RAK',
  /** Rukungiri */
  UgRuk = 'UG_RUK',
  /** Soroti */
  UgSor = 'UG_SOR',
  /** Tororo */
  UgTor = 'UG_TOR',
  /** Alaska */
  UsAk = 'US_AK',
  /** Alabama */
  UsAl = 'US_AL',
  /** Arkansas */
  UsAr = 'US_AR',
  /** American Samoa */
  UsAs = 'US_AS',
  /** Arizona */
  UsAz = 'US_AZ',
  /** California */
  UsCa = 'US_CA',
  /** Colorado */
  UsCo = 'US_CO',
  /** Connecticut */
  UsCt = 'US_CT',
  /** District of Columbia */
  UsDc = 'US_DC',
  /** Delaware */
  UsDe = 'US_DE',
  /** Florida */
  UsFl = 'US_FL',
  /** Georgia */
  UsGa = 'US_GA',
  /** Guam */
  UsGu = 'US_GU',
  /** Hawaii */
  UsHi = 'US_HI',
  /** Iowa */
  UsIa = 'US_IA',
  /** Idaho */
  UsId = 'US_ID',
  /** Illinois */
  UsIl = 'US_IL',
  /** Indiana */
  UsIn = 'US_IN',
  /** Kansas */
  UsKs = 'US_KS',
  /** Kentucky */
  UsKy = 'US_KY',
  /** Louisiana */
  UsLa = 'US_LA',
  /** Massachusetts */
  UsMa = 'US_MA',
  /** Maryland */
  UsMd = 'US_MD',
  /** Maine */
  UsMe = 'US_ME',
  /** Michigan */
  UsMi = 'US_MI',
  /** Minnesota */
  UsMn = 'US_MN',
  /** Missouri */
  UsMo = 'US_MO',
  /** Northern Mariana Islands */
  UsMp = 'US_MP',
  /** Mississippi */
  UsMs = 'US_MS',
  /** Montana */
  UsMt = 'US_MT',
  /** North Carolina */
  UsNc = 'US_NC',
  /** North Dakota */
  UsNd = 'US_ND',
  /** Nebraska */
  UsNe = 'US_NE',
  /** New Hampshire */
  UsNh = 'US_NH',
  /** New Jersey */
  UsNj = 'US_NJ',
  /** New Mexico */
  UsNm = 'US_NM',
  /** Nevada */
  UsNv = 'US_NV',
  /** New York */
  UsNy = 'US_NY',
  /** Ohio */
  UsOh = 'US_OH',
  /** Oklahoma */
  UsOk = 'US_OK',
  /** Oregon */
  UsOr = 'US_OR',
  /** Pennsylvania */
  UsPa = 'US_PA',
  /** Puerto Rico */
  UsPr = 'US_PR',
  /** Rhode Island */
  UsRi = 'US_RI',
  /** South Carolina */
  UsSc = 'US_SC',
  /** South Dakota */
  UsSd = 'US_SD',
  /** Tennessee */
  UsTn = 'US_TN',
  /** Texas */
  UsTx = 'US_TX',
  /** United States Minor Outlying Islands */
  UsUm = 'US_UM',
  /** Utah */
  UsUt = 'US_UT',
  /** Virginia */
  UsVa = 'US_VA',
  /** Virgin Islands, U.S. */
  UsVi = 'US_VI',
  /** Vermont */
  UsVt = 'US_VT',
  /** Washington */
  UsWa = 'US_WA',
  /** Wisconsin */
  UsWi = 'US_WI',
  /** West Virginia */
  UsWv = 'US_WV',
  /** Wyoming */
  UsWy = 'US_WY',
  /** Artigas */
  UyAr = 'UY_AR',
  /** Canelones */
  UyCa = 'UY_CA',
  /** Cerro Largo */
  UyCl = 'UY_CL',
  /** Colonia */
  UyCo = 'UY_CO',
  /** Durazno */
  UyDu = 'UY_DU',
  /** Florida */
  UyFd = 'UY_FD',
  /** Flores */
  UyFs = 'UY_FS',
  /** Lavalleja */
  UyLa = 'UY_LA',
  /** Maldonado */
  UyMa = 'UY_MA',
  /** Montevideo */
  UyMo = 'UY_MO',
  /** Paysandú */
  UyPa = 'UY_PA',
  /** Río Negro */
  UyRn = 'UY_RN',
  /** Rocha */
  UyRo = 'UY_RO',
  /** Rivera */
  UyRv = 'UY_RV',
  /** Salto */
  UySa = 'UY_SA',
  /** San José */
  UySj = 'UY_SJ',
  /** Soriano */
  UySo = 'UY_SO',
  /** Tacuarembó */
  UyTa = 'UY_TA',
  /** Treinta y Tres */
  UyTt = 'UY_TT',
  /** Andijon (Andizhan) */
  UzAn = 'UZ_AN',
  /** Bukhoro (Bukhara) */
  UzBu = 'UZ_BU',
  /** Farghona (Fergana) */
  UzFa = 'UZ_FA',
  /** Jizzakh (Dzhizak) */
  UzJi = 'UZ_JI',
  /** Khorazm (Khorezm) */
  UzKh = 'UZ_KH',
  /** Namangan */
  UzNg = 'UZ_NG',
  /** Nawoiy (Navoi) */
  UzNw = 'UZ_NW',
  /** Qashqadaryo (Kashkadar'ya) */
  UzQa = 'UZ_QA',
  /** Qoraqalpoghiston Respublikasi (Karakalpakstan, Respublika) */
  UzQr = 'UZ_QR',
  /** Samarqand (Samarkand) */
  UzSa = 'UZ_SA',
  /** Sirdaryo (Syrdar'ya) */
  UzSi = 'UZ_SI',
  /** Surkhondaryo (Surkhandar'ya) */
  UzSu = 'UZ_SU',
  /** Toshkent (Tashkent) */
  UzTo = 'UZ_TO',
  /** Vatican City (Holy See) */
  VaVa = 'VA_VA',
  /** St. Vincent & the Grenadines */
  VcVc = 'VC_VC',
  /** Distrito Federal */
  VeA = 'VE_A',
  /** Anzoátegui */
  VeB = 'VE_B',
  /** Apure */
  VeC = 'VE_C',
  /** Aragua */
  VeD = 'VE_D',
  /** Barinas */
  VeE = 'VE_E',
  /** Bolívar */
  VeF = 'VE_F',
  /** Carabobo */
  VeG = 'VE_G',
  /** Cojedes */
  VeH = 'VE_H',
  /** Falcón */
  VeI = 'VE_I',
  /** Guárico */
  VeJ = 'VE_J',
  /** Lara */
  VeK = 'VE_K',
  /** Mérida */
  VeL = 'VE_L',
  /** Miranda */
  VeM = 'VE_M',
  /** Monagas */
  VeN = 'VE_N',
  /** Nueva Esparta */
  VeO = 'VE_O',
  /** Portuguesa */
  VeP = 'VE_P',
  /** Sucre */
  VeR = 'VE_R',
  /** Táchira */
  VeS = 'VE_S',
  /** Trujillo */
  VeT = 'VE_T',
  /** Yaracuy */
  VeU = 'VE_U',
  /** Zulia */
  VeV = 'VE_V',
  /** Dependencias Federales */
  VeW = 'VE_W',
  /** Delta Amacuro */
  VeY = 'VE_Y',
  /** Amazonas */
  VeZ = 'VE_Z',
  /** Virgin Islands (British) */
  VgVg = 'VG_VG',
  /** Virgin Islands (U.S.) */
  ViVi = 'VI_VI',
  /** Lai Chau */
  Vn_01 = 'VN_01',
  /** Lao Cai */
  Vn_02 = 'VN_02',
  /** Ha Giang */
  Vn_03 = 'VN_03',
  /** Cao Bang */
  Vn_04 = 'VN_04',
  /** Son La */
  Vn_05 = 'VN_05',
  /** Yen Bai */
  Vn_06 = 'VN_06',
  /** Tuyen Quang */
  Vn_07 = 'VN_07',
  /** Lang Son */
  Vn_09 = 'VN_09',
  /** Hoa Binh */
  Vn_14 = 'VN_14',
  /** Ha Tay */
  Vn_15 = 'VN_15',
  /** Ninh Binh */
  Vn_18 = 'VN_18',
  /** Thai Binh */
  Vn_20 = 'VN_20',
  /** Thanh Hoa */
  Vn_21 = 'VN_21',
  /** Nghe An */
  Vn_22 = 'VN_22',
  /** Ha Tinh */
  Vn_23 = 'VN_23',
  /** Quang Ninh */
  Vn_24 = 'VN_24',
  /** Quang Tri */
  Vn_25 = 'VN_25',
  /** Thua Thien-Hue */
  Vn_26 = 'VN_26',
  /** Quang Nam */
  Vn_27 = 'VN_27',
  /** Kon Turn */
  Vn_28 = 'VN_28',
  /** Quang Ngai */
  Vn_29 = 'VN_29',
  /** Gia Lai */
  Vn_30 = 'VN_30',
  /** Binh Dinh */
  Vn_31 = 'VN_31',
  /** Phu Yen */
  Vn_32 = 'VN_32',
  /** Dac Lac */
  Vn_33 = 'VN_33',
  /** Khanh Hoa */
  Vn_34 = 'VN_34',
  /** Lam Dong */
  Vn_35 = 'VN_35',
  /** Ninh Thuan */
  Vn_36 = 'VN_36',
  /** Tay Ninh */
  Vn_37 = 'VN_37',
  /** Dong Nai */
  Vn_39 = 'VN_39',
  /** Binh Thuan */
  Vn_40 = 'VN_40',
  /** Long An */
  Vn_41 = 'VN_41',
  /** Ba Ria - Vung Tau */
  Vn_43 = 'VN_43',
  /** An Giang */
  Vn_44 = 'VN_44',
  /** Dong Thap */
  Vn_45 = 'VN_45',
  /** Tien Giang */
  Vn_46 = 'VN_46',
  /** Kien Giang */
  Vn_47 = 'VN_47',
  /** Can Tho */
  Vn_48 = 'VN_48',
  /** Vinh Long */
  Vn_49 = 'VN_49',
  /** Ben Tre */
  Vn_50 = 'VN_50',
  /** Tra Vinh */
  Vn_51 = 'VN_51',
  /** Sec Trang */
  Vn_52 = 'VN_52',
  /** Bat Can */
  Vn_53 = 'VN_53',
  /** Bat Giang */
  Vn_54 = 'VN_54',
  /** Bat Lieu */
  Vn_55 = 'VN_55',
  /** Bat Ninh */
  Vn_56 = 'VN_56',
  /** Binh Duong */
  Vn_57 = 'VN_57',
  /** Binh Phuoc */
  Vn_58 = 'VN_58',
  /** Ca Mau */
  Vn_59 = 'VN_59',
  /** Da Nang, thanh pho */
  Vn_60 = 'VN_60',
  /** Hai Duong */
  Vn_61 = 'VN_61',
  /** Hai Phong, thanh pho */
  Vn_62 = 'VN_62',
  /** Ha Nam */
  Vn_63 = 'VN_63',
  /** Ha Noi, thu do */
  Vn_64 = 'VN_64',
  /** Ho Chi Minh, thanh po [Sai Gon] */
  Vn_65 = 'VN_65',
  /** Hung Yen */
  Vn_66 = 'VN_66',
  /** Nam Dinh */
  Vn_67 = 'VN_67',
  /** Phu Tho */
  Vn_68 = 'VN_68',
  /** Thai Nguyen */
  Vn_69 = 'VN_69',
  /** Vinh Yen */
  Vn_70 = 'VN_70',
  /** Malampa */
  VuMap = 'VU_MAP',
  /** Pénama */
  VuPam = 'VU_PAM',
  /** Sanma */
  VuSam = 'VU_SAM',
  /** Shéfa */
  VuSee = 'VU_SEE',
  /** Taféa */
  VuTae = 'VU_TAE',
  /** Torba */
  VuTob = 'VU_TOB',
  /** Wallis & Futuna Islands */
  WfWf = 'WF_WF',
  /** A'ana */
  WsAa = 'WS_AA',
  /** Aiga-i-le-Tai */
  WsAl = 'WS_AL',
  /** Atua */
  WsAt = 'WS_AT',
  /** Fa'asaleleaga */
  WsFa = 'WS_FA',
  /** Gaga'emauga */
  WsGe = 'WS_GE',
  /** Gagaifomauga */
  WsGi = 'WS_GI',
  /** Palauli */
  WsPa = 'WS_PA',
  /** Satupa'itea */
  WsSa = 'WS_SA',
  /** Tuamasaga */
  WsTu = 'WS_TU',
  /** Va'a-o-Fonoti */
  WsVf = 'WS_VF',
  /** Vaisigano */
  WsVs = 'WS_VS',
  /** Abyān */
  YeAb = 'YE_AB',
  /** ‘Adan */
  YeAd = 'YE_AD',
  /** Al Bayḑā' */
  YeBa = 'YE_BA',
  /** Dhamār */
  YeDh = 'YE_DH',
  /** Ḩaḑramawt */
  YeHd = 'YE_HD',
  /** Ḩajjah */
  YeHj = 'YE_HJ',
  /** Al Ḩudaydah */
  YeHu = 'YE_HU',
  /** Ibb */
  YeIb = 'YE_IB',
  /** Al Jawf */
  YeJa = 'YE_JA',
  /** Laḩij */
  YeLa = 'YE_LA',
  /** Ma'rib */
  YeMa = 'YE_MA',
  /** Al Mahrah */
  YeMr = 'YE_MR',
  /** Al Maḩwit */
  YeMw = 'YE_MW',
  /** Şa'dah */
  YeSd = 'YE_SD',
  /** Shabwah */
  YeSh = 'YE_SH',
  /** Şan‘ā' */
  YeSn = 'YE_SN',
  /** Ta‘izz */
  YeTa = 'YE_TA',
  /** Mayotte */
  YtYt = 'YT_YT',
  /** Crna Gora */
  YuCg = 'YU_CG',
  /** Kosovo-Metohija */
  YuKm = 'YU_KM',
  /** Srbija */
  YuSr = 'YU_SR',
  /** Vojvodina */
  YuVo = 'YU_VO',
  /** Eastern Cape (Oos-Kaap) */
  ZaEc = 'ZA_EC',
  /** Free State (Vrystaat) */
  ZaFs = 'ZA_FS',
  /** Gauteng */
  ZaGt = 'ZA_GT',
  /** Mpumalanga */
  ZaMp = 'ZA_MP',
  /** Northern Cape (Noord-Kaap) */
  ZaNc = 'ZA_NC',
  /** Kwazulu-Natal */
  ZaNl = 'ZA_NL',
  /** Northern Province (Noordelike Provinsie) */
  ZaNp = 'ZA_NP',
  /** North-West (Noord-Wes) */
  ZaNw = 'ZA_NW',
  /** Western Cape (Wes-Kaap) */
  ZaWc = 'ZA_WC',
  /** Western */
  Zm_01 = 'ZM_01',
  /** Central */
  Zm_02 = 'ZM_02',
  /** Eastern */
  Zm_03 = 'ZM_03',
  /** Luapula */
  Zm_04 = 'ZM_04',
  /** Northern */
  Zm_05 = 'ZM_05',
  /** North-Western */
  Zm_06 = 'ZM_06',
  /** Southern */
  Zm_07 = 'ZM_07',
  /** Copperbelt */
  Zm_08 = 'ZM_08',
  /** Lusaka */
  Zm_09 = 'ZM_09',
  /** Bulawayo */
  ZwBu = 'ZW_BU',
  /** Harare */
  ZwHa = 'ZW_HA',
  /** Manicaland */
  ZwMa = 'ZW_MA',
  /** Mashonaland Central */
  ZwMc = 'ZW_MC',
  /** Mashonaland East */
  ZwMe = 'ZW_ME',
  /** Midlands */
  ZwMi = 'ZW_MI',
  /** Matabeleland North */
  ZwMn = 'ZW_MN',
  /** Matabeleland South */
  ZwMs = 'ZW_MS',
  /** Masvingo */
  ZwMv = 'ZW_MV',
  /** Mashonaland West */
  ZwMw = 'ZW_MW'
}

export type CreateDiagnosisAggressionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisAllergyInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<DiagnosisAllergyType>;
  type_other?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDiagnosisAnxietyInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisCoccidiaInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisDemodexInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisDentalDiseaseInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisDermatophytosisRingwormInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisDiarrheaCauseUnknownInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisEarMitesInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisFelineImmunodeficiencyVirusFivInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisFelineInfectiousPeritonitisFipInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisFelineLeukemiaVirusFelvInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisGiardiaInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisHeartwormInfectionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisOtitisEarInfectionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisPanleukopeniaVirusFelineInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisParvovirusCanineInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisResolutionInput = {
  date?: InputMaybe<Scalars['Instant']['input']>;
  type?: InputMaybe<DiagnosisResolutionType>;
};

export type CreateDiagnosisResourceGuardingInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisUpperRespiratoryTractInfectionUriInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisUrinaryTractInfectionUtiInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateDiagnosisUrolithiasisBladderStonesInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateEcontractInput = {
  econtract_template_id: Scalars['UUID']['input'];
  notify_person_ids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  organization_id: Scalars['UUID']['input'];
  organization_pet_id?: InputMaybe<Scalars['UUID']['input']>;
  person_id: Scalars['UUID']['input'];
};

export type CreateEcontractInviteInput = {
  econtract_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type CreateEcontractResult = {
  __typename?: 'CreateEcontractResult';
  econtract: Econtract;
  invite: EcontractInvite;
};

export type CreateEcontractTemplateInput = {
  organization_id: Scalars['UUID']['input'];
  template_file_ref: Input_UploadedFileRef;
  template_title: Scalars['String']['input'];
};

export type CreateFileUploadInput = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMedicalEventInput = {
  date?: InputMaybe<Scalars['Instant']['input']>;
  line_items?: InputMaybe<Array<InputMaybe<CreateMedicalEventLineItemInput>>>;
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
};

export type CreateMedicalEventLineItemInput = {
  diagnosis_aggression?: InputMaybe<CreateDiagnosisAggressionInput>;
  diagnosis_allergy?: InputMaybe<CreateDiagnosisAllergyInput>;
  diagnosis_anxiety?: InputMaybe<CreateDiagnosisAnxietyInput>;
  diagnosis_coccidia?: InputMaybe<CreateDiagnosisCoccidiaInput>;
  diagnosis_demodex?: InputMaybe<CreateDiagnosisDemodexInput>;
  diagnosis_dental_disease?: InputMaybe<CreateDiagnosisDentalDiseaseInput>;
  diagnosis_dermatophytosis_ringworm?: InputMaybe<CreateDiagnosisDermatophytosisRingwormInput>;
  diagnosis_diarrhea_cause_unknown?: InputMaybe<CreateDiagnosisDiarrheaCauseUnknownInput>;
  diagnosis_ear_mites?: InputMaybe<CreateDiagnosisEarMitesInput>;
  diagnosis_feline_immunodeficiency_virus_fiv?: InputMaybe<CreateDiagnosisFelineImmunodeficiencyVirusFivInput>;
  diagnosis_feline_infectious_peritonitis_fip?: InputMaybe<CreateDiagnosisFelineInfectiousPeritonitisFipInput>;
  diagnosis_feline_leukemia_virus_felv?: InputMaybe<CreateDiagnosisFelineLeukemiaVirusFelvInput>;
  diagnosis_feline_lower_urinary_tract_disease_flutd?: InputMaybe<CreateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
  diagnosis_giardia?: InputMaybe<CreateDiagnosisGiardiaInput>;
  diagnosis_heartworm_infection?: InputMaybe<CreateDiagnosisHeartwormInfectionInput>;
  diagnosis_otitis_ear_infection?: InputMaybe<CreateDiagnosisOtitisEarInfectionInput>;
  diagnosis_panleukopenia_virus_feline?: InputMaybe<CreateDiagnosisPanleukopeniaVirusFelineInput>;
  diagnosis_parvovirus_canine?: InputMaybe<CreateDiagnosisParvovirusCanineInput>;
  diagnosis_resource_guarding?: InputMaybe<CreateDiagnosisResourceGuardingInput>;
  diagnosis_upper_respiratory_tract_infection_uri?: InputMaybe<CreateDiagnosisUpperRespiratoryTractInfectionUriInput>;
  diagnosis_urinary_tract_infection_uti?: InputMaybe<CreateDiagnosisUrinaryTractInfectionUtiInput>;
  diagnosis_urolithiasis_bladder_stones?: InputMaybe<CreateDiagnosisUrolithiasisBladderStonesInput>;
};

export type CreateMedicalEventResult = {
  __typename?: 'CreateMedicalEventResult';
  medical_event: MedicalEvent;
};

export type CreateNoteInput = {
  text: Scalars['String']['input'];
};

/** createTextTemplate input */
export type CreateTextTemplateInput = {
  organization_id: Scalars['UUID']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: Text_Template_Type;
};

/** createTextTemplate mutation result */
export type CreateTextTemplatePayload = {
  __typename?: 'CreateTextTemplatePayload';
  text_template: TextTemplate;
};

/** Currency Codes */
export enum Currency {
  /** Uae dirham */
  Aed = 'AED',
  /** Afghani */
  Afn = 'AFN',
  /** Lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands antillean guilder */
  Ang = 'ANG',
  /** Kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijan manat */
  Azn = 'AZN',
  /** Convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundi franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Ngultrum */
  Btn = 'BTN',
  /** Pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Wir euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** Wir franc */
  Chw = 'CHW',
  /** Unidad de fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Yuan renminbi */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de valor real */
  Cou = 'COU',
  /** Costa rican colon */
  Crc = 'CRC',
  /** Peso convertible */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cabo verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djibouti franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Lari */
  Gel = 'GEL',
  /** Ghana cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Quetzal */
  Gtq = 'GTQ',
  /** Guyana dollar */
  Gyd = 'GYD',
  /** Hong kong dollar */
  Hkd = 'HKD',
  /** Lempira */
  Hnl = 'HNL',
  /** Kuna */
  Hrk = 'HRK',
  /** Gourde */
  Htg = 'HTG',
  /** Forint */
  Huf = 'HUF',
  /** Rupiah */
  Idr = 'IDR',
  /** New israeli sheqel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Iceland krona */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Som */
  Kgs = 'KGS',
  /** Riel */
  Khr = 'KHR',
  /** Comorian franc  */
  Kmf = 'KMF',
  /** North korean won */
  Kpw = 'KPW',
  /** Won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman islands dollar */
  Kyd = 'KYD',
  /** Tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri lanka rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Denar */
  Mkd = 'MKD',
  /** Kyat */
  Mmk = 'MMK',
  /** Tugrik */
  Mnt = 'MNT',
  /** Pataca */
  Mop = 'MOP',
  /** Ouguiya */
  Mru = 'MRU',
  /** Mauritius rupee */
  Mur = 'MUR',
  /** Rufiyaa */
  Mvr = 'MVR',
  /** Malawi kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican unidad de inversion (udi) */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambique metical */
  Mzn = 'MZN',
  /** Namibia dollar */
  Nad = 'NAD',
  /** Naira */
  Ngn = 'NGN',
  /** Cordoba oro */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New zealand dollar */
  Nzd = 'NZD',
  /** Rial omani */
  Omr = 'OMR',
  /** Balboa */
  Pab = 'PAB',
  /** Sol */
  Pen = 'PEN',
  /** Kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistan rupee */
  Pkr = 'PKR',
  /** Zloty */
  Pln = 'PLN',
  /** Guarani */
  Pyg = 'PYG',
  /** Qatari rial */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwanda franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint helena pound */
  Shp = 'SHP',
  /** Leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinam dollar */
  Srd = 'SRD',
  /** South sudanese pound */
  Ssp = 'SSP',
  /** Dobra */
  Stn = 'STN',
  /** El salvador colon */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Lilangeni */
  Szl = 'SZL',
  /** Baht */
  Thb = 'THB',
  /** Somoni */
  Tjs = 'TJS',
  /** Turkmenistan new manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Pa’anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and tobago dollar */
  Ttd = 'TTD',
  /** New taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Hryvnia */
  Uah = 'UAH',
  /** Uganda shilling */
  Ugx = 'UGX',
  /** Us dollar */
  Usd = 'USD',
  /** Us dollar (next day) */
  Usn = 'USN',
  /** Uruguay peso en unidades indexadas (ui) */
  Uyi = 'UYI',
  /** Peso uruguayo */
  Uyu = 'UYU',
  /** Unidad previsional */
  Uyw = 'UYW',
  /** Uzbekistan sum */
  Uzs = 'UZS',
  /** Bolívar soberano */
  Ves = 'VES',
  /** Dong */
  Vnd = 'VND',
  /** Vatu */
  Vuv = 'VUV',
  /** Tala */
  Wst = 'WST',
  /** Cfa franc beac */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** Bond markets unit european composite unit (eurco) */
  Xba = 'XBA',
  /** Bond markets unit european monetary unit (e.m.u.-6) */
  Xbb = 'XBB',
  /** Bond markets unit european unit of account 9 (e.u.a.-9) */
  Xbc = 'XBC',
  /** Bond markets unit european unit of account 17 (e.u.a.-17) */
  Xbd = 'XBD',
  /** East caribbean dollar */
  Xcd = 'XCD',
  /** Sdr (special drawing right) */
  Xdr = 'XDR',
  /** Cfa franc bceao */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** Cfp franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Sucre */
  Xsu = 'XSU',
  /** Codes specifically reserved for testing purposes */
  Xts = 'XTS',
  /** Adb unit of account */
  Xua = 'XUA',
  /** The codes assigned for transactions where no currency is involved */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** Rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwe dollar */
  Zwl = 'ZWL'
}

export type CurrencyDetails = {
  __typename?: 'CurrencyDetails';
  /** Currency description */
  description?: Maybe<Scalars['String']['output']>;
  /** Number of decimal places used for minor units, e.g. 2 for USD */
  minor_units?: Maybe<Scalars['Int']['output']>;
};

export type CustomReport = {
  __typename?: 'CustomReport';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  json_blob?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DefaultVetClinicInput = {
  clinic_partner_id: Scalars['UUID']['input'];
  vet_person_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type DeleteAdoptionDocInput = {
  adoption_doc_file_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type DeleteAdoptionDocResult = {
  __typename?: 'DeleteAdoptionDocResult';
  file_id: Scalars['UUID']['output'];
};

export type DeleteDiagnosisAggressionInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisAllergyInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisAnxietyInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisCoccidiaInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisDemodexInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisDentalDiseaseInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisDermatophytosisRingwormInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisDiarrheaCauseUnknownInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisEarMitesInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisFelineImmunodeficiencyVirusFivInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisFelineInfectiousPeritonitisFipInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisFelineLeukemiaVirusFelvInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisGiardiaInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisHeartwormInfectionInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisOtitisEarInfectionInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisPanleukopeniaVirusFelineInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisParvovirusCanineInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisResourceGuardingInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisUpperRespiratoryTractInfectionUriInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisUrinaryTractInfectionUtiInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteDiagnosisUrolithiasisBladderStonesInput = {
  diagnosis_id: Scalars['UUID']['input'];
};

export type DeleteEcontractTemplateInput = {
  econtract_template_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type DeleteMedicalEventInput = {
  medical_event_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type DeleteMedicalEventLineItemInput = {
  diagnosis_aggression?: InputMaybe<DeleteDiagnosisAggressionInput>;
  diagnosis_allergy?: InputMaybe<DeleteDiagnosisAllergyInput>;
  diagnosis_anxiety?: InputMaybe<DeleteDiagnosisAnxietyInput>;
  diagnosis_coccidia?: InputMaybe<DeleteDiagnosisCoccidiaInput>;
  diagnosis_demodex?: InputMaybe<DeleteDiagnosisDemodexInput>;
  diagnosis_dental_disease?: InputMaybe<DeleteDiagnosisDentalDiseaseInput>;
  diagnosis_dermatophytosis_ringworm?: InputMaybe<DeleteDiagnosisDermatophytosisRingwormInput>;
  diagnosis_diarrhea_cause_unknown?: InputMaybe<DeleteDiagnosisDiarrheaCauseUnknownInput>;
  diagnosis_ear_mites?: InputMaybe<DeleteDiagnosisEarMitesInput>;
  diagnosis_feline_immunodeficiency_virus_fiv?: InputMaybe<DeleteDiagnosisFelineImmunodeficiencyVirusFivInput>;
  diagnosis_feline_infectious_peritonitis_fip?: InputMaybe<DeleteDiagnosisFelineInfectiousPeritonitisFipInput>;
  diagnosis_feline_leukemia_virus_felv?: InputMaybe<DeleteDiagnosisFelineLeukemiaVirusFelvInput>;
  diagnosis_feline_lower_urinary_tract_disease_flutd?: InputMaybe<DeleteDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
  diagnosis_giardia?: InputMaybe<DeleteDiagnosisGiardiaInput>;
  diagnosis_heartworm_infection?: InputMaybe<DeleteDiagnosisHeartwormInfectionInput>;
  diagnosis_otitis_ear_infection?: InputMaybe<DeleteDiagnosisOtitisEarInfectionInput>;
  diagnosis_panleukopenia_virus_feline?: InputMaybe<DeleteDiagnosisPanleukopeniaVirusFelineInput>;
  diagnosis_parvovirus_canine?: InputMaybe<DeleteDiagnosisParvovirusCanineInput>;
  diagnosis_resource_guarding?: InputMaybe<DeleteDiagnosisResourceGuardingInput>;
  diagnosis_upper_respiratory_tract_infection_uri?: InputMaybe<DeleteDiagnosisUpperRespiratoryTractInfectionUriInput>;
  diagnosis_urinary_tract_infection_uti?: InputMaybe<DeleteDiagnosisUrinaryTractInfectionUtiInput>;
  diagnosis_urolithiasis_bladder_stones?: InputMaybe<DeleteDiagnosisUrolithiasisBladderStonesInput>;
};

export type DeleteMedicalEventResult = {
  __typename?: 'DeleteMedicalEventResult';
  medical_event_id: Scalars['UUID']['output'];
};

export type DeleteNoteInput = {
  note_id: Scalars['ID']['input'];
};

/** Input for removing images from a pet. */
export type DeletePetImagesInput = {
  /** IDs of the images to delete from the pet. */
  file_ids?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** ID of the organization-pet to delete images from. */
  organization_pet_id: Scalars['UUID']['input'];
};

/** deleteTextTemplate input */
export type DeleteTextTemplateInput = {
  organization_id: Scalars['UUID']['input'];
  text_template_id: Scalars['UUID']['input'];
};

/** deleteTextTemplate mutation result */
export type DeleteTextTemplatePayload = {
  __typename?: 'DeleteTextTemplatePayload';
  text_template_id: Scalars['UUID']['output'];
};

export type Diagnosis = {
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisAggression = Diagnosis & {
  __typename?: 'DiagnosisAggression';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisAggressionOperationInput = {
  create?: InputMaybe<CreateDiagnosisAggressionInput>;
  delete?: InputMaybe<DeleteDiagnosisAggressionInput>;
  update?: InputMaybe<UpdateDiagnosisAggressionInput>;
};

export type DiagnosisAllergy = Diagnosis & {
  __typename?: 'DiagnosisAllergy';
  allergy_type?: Maybe<DiagnosisAllergyType>;
  allergy_type_other?: Maybe<Scalars['String']['output']>;
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisAllergyOperationInput = {
  create?: InputMaybe<CreateDiagnosisAllergyInput>;
  delete?: InputMaybe<DeleteDiagnosisAllergyInput>;
  update?: InputMaybe<UpdateDiagnosisAllergyInput>;
};

export enum DiagnosisAllergyType {
  /** Other */
  Other = 'OTHER'
}

export type DiagnosisAnxiety = Diagnosis & {
  __typename?: 'DiagnosisAnxiety';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisAnxietyOperationInput = {
  create?: InputMaybe<CreateDiagnosisAnxietyInput>;
  delete?: InputMaybe<DeleteDiagnosisAnxietyInput>;
  update?: InputMaybe<UpdateDiagnosisAnxietyInput>;
};

export type DiagnosisCoccidia = Diagnosis & {
  __typename?: 'DiagnosisCoccidia';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisCoccidiaOperationInput = {
  create?: InputMaybe<CreateDiagnosisCoccidiaInput>;
  delete?: InputMaybe<DeleteDiagnosisCoccidiaInput>;
  update?: InputMaybe<UpdateDiagnosisCoccidiaInput>;
};

export type DiagnosisDemodex = Diagnosis & {
  __typename?: 'DiagnosisDemodex';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisDemodexOperationInput = {
  create?: InputMaybe<CreateDiagnosisDemodexInput>;
  delete?: InputMaybe<DeleteDiagnosisDemodexInput>;
  update?: InputMaybe<UpdateDiagnosisDemodexInput>;
};

export type DiagnosisDentalDisease = Diagnosis & {
  __typename?: 'DiagnosisDentalDisease';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisDentalDiseaseOperationInput = {
  create?: InputMaybe<CreateDiagnosisDentalDiseaseInput>;
  delete?: InputMaybe<DeleteDiagnosisDentalDiseaseInput>;
  update?: InputMaybe<UpdateDiagnosisDentalDiseaseInput>;
};

export type DiagnosisDermatophytosisRingworm = Diagnosis & {
  __typename?: 'DiagnosisDermatophytosisRingworm';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisDermatophytosisRingwormOperationInput = {
  create?: InputMaybe<CreateDiagnosisDermatophytosisRingwormInput>;
  delete?: InputMaybe<DeleteDiagnosisDermatophytosisRingwormInput>;
  update?: InputMaybe<UpdateDiagnosisDermatophytosisRingwormInput>;
};

export type DiagnosisDiarrheaCauseUnknown = Diagnosis & {
  __typename?: 'DiagnosisDiarrheaCauseUnknown';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisDiarrheaCauseUnknownOperationInput = {
  create?: InputMaybe<CreateDiagnosisDiarrheaCauseUnknownInput>;
  delete?: InputMaybe<DeleteDiagnosisDiarrheaCauseUnknownInput>;
  update?: InputMaybe<UpdateDiagnosisDiarrheaCauseUnknownInput>;
};

export type DiagnosisEarMites = Diagnosis & {
  __typename?: 'DiagnosisEarMites';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisEarMitesOperationInput = {
  create?: InputMaybe<CreateDiagnosisEarMitesInput>;
  delete?: InputMaybe<DeleteDiagnosisEarMitesInput>;
  update?: InputMaybe<UpdateDiagnosisEarMitesInput>;
};

export type DiagnosisFelineImmunodeficiencyVirusFiv = Diagnosis & {
  __typename?: 'DiagnosisFelineImmunodeficiencyVirusFiv';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisFelineImmunodeficiencyVirusFivOperationInput = {
  create?: InputMaybe<CreateDiagnosisFelineImmunodeficiencyVirusFivInput>;
  delete?: InputMaybe<DeleteDiagnosisFelineImmunodeficiencyVirusFivInput>;
  update?: InputMaybe<UpdateDiagnosisFelineImmunodeficiencyVirusFivInput>;
};

export type DiagnosisFelineInfectiousPeritonitisFip = Diagnosis & {
  __typename?: 'DiagnosisFelineInfectiousPeritonitisFip';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisFelineInfectiousPeritonitisFipOperationInput = {
  create?: InputMaybe<CreateDiagnosisFelineInfectiousPeritonitisFipInput>;
  delete?: InputMaybe<DeleteDiagnosisFelineInfectiousPeritonitisFipInput>;
  update?: InputMaybe<UpdateDiagnosisFelineInfectiousPeritonitisFipInput>;
};

export type DiagnosisFelineLeukemiaVirusFelv = Diagnosis & {
  __typename?: 'DiagnosisFelineLeukemiaVirusFelv';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisFelineLeukemiaVirusFelvOperationInput = {
  create?: InputMaybe<CreateDiagnosisFelineLeukemiaVirusFelvInput>;
  delete?: InputMaybe<DeleteDiagnosisFelineLeukemiaVirusFelvInput>;
  update?: InputMaybe<UpdateDiagnosisFelineLeukemiaVirusFelvInput>;
};

export type DiagnosisFelineLowerUrinaryTractDiseaseFlutd = Diagnosis & {
  __typename?: 'DiagnosisFelineLowerUrinaryTractDiseaseFlutd';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisFelineLowerUrinaryTractDiseaseFlutdOperationInput = {
  create?: InputMaybe<CreateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
  delete?: InputMaybe<DeleteDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
  update?: InputMaybe<UpdateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
};

export type DiagnosisGiardia = Diagnosis & {
  __typename?: 'DiagnosisGiardia';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisGiardiaOperationInput = {
  create?: InputMaybe<CreateDiagnosisGiardiaInput>;
  delete?: InputMaybe<DeleteDiagnosisGiardiaInput>;
  update?: InputMaybe<UpdateDiagnosisGiardiaInput>;
};

export type DiagnosisHeartwormInfection = Diagnosis & {
  __typename?: 'DiagnosisHeartwormInfection';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisHeartwormInfectionOperationInput = {
  create?: InputMaybe<CreateDiagnosisHeartwormInfectionInput>;
  delete?: InputMaybe<DeleteDiagnosisHeartwormInfectionInput>;
  update?: InputMaybe<UpdateDiagnosisHeartwormInfectionInput>;
};

export type DiagnosisOtitisEarInfection = Diagnosis & {
  __typename?: 'DiagnosisOtitisEarInfection';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisOtitisEarInfectionOperationInput = {
  create?: InputMaybe<CreateDiagnosisOtitisEarInfectionInput>;
  delete?: InputMaybe<DeleteDiagnosisOtitisEarInfectionInput>;
  update?: InputMaybe<UpdateDiagnosisOtitisEarInfectionInput>;
};

export type DiagnosisPanleukopeniaVirusFeline = Diagnosis & {
  __typename?: 'DiagnosisPanleukopeniaVirusFeline';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisPanleukopeniaVirusFelineOperationInput = {
  create?: InputMaybe<CreateDiagnosisPanleukopeniaVirusFelineInput>;
  delete?: InputMaybe<DeleteDiagnosisPanleukopeniaVirusFelineInput>;
  update?: InputMaybe<UpdateDiagnosisPanleukopeniaVirusFelineInput>;
};

export type DiagnosisParvovirusCanine = Diagnosis & {
  __typename?: 'DiagnosisParvovirusCanine';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisParvovirusCanineOperationInput = {
  create?: InputMaybe<CreateDiagnosisParvovirusCanineInput>;
  delete?: InputMaybe<DeleteDiagnosisParvovirusCanineInput>;
  update?: InputMaybe<UpdateDiagnosisParvovirusCanineInput>;
};

export type DiagnosisResolution = {
  __typename?: 'DiagnosisResolution';
  date?: Maybe<Scalars['Instant']['output']>;
  type?: Maybe<DiagnosisResolutionType>;
};

export type DiagnosisResolutionOperationInput = {
  create?: InputMaybe<CreateDiagnosisResolutionInput>;
};

export enum DiagnosisResolutionType {
  /** Misdiagnosed */
  Misdiagnosed = 'MISDIAGNOSED',
  /** Retested Negative */
  RetestedNegative = 'RETESTED_NEGATIVE',
  /** Self Resolved */
  SelfResolved = 'SELF_RESOLVED',
  /** Treated */
  Treated = 'TREATED'
}

export type DiagnosisResourceGuarding = Diagnosis & {
  __typename?: 'DiagnosisResourceGuarding';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisResourceGuardingOperationInput = {
  create?: InputMaybe<CreateDiagnosisResourceGuardingInput>;
  delete?: InputMaybe<DeleteDiagnosisResourceGuardingInput>;
  update?: InputMaybe<UpdateDiagnosisResourceGuardingInput>;
};

export enum DiagnosisType {
  /** Aggression */
  Aggression = 'AGGRESSION',
  /** Allergy */
  Allergy = 'ALLERGY',
  /** Anxiety */
  Anxiety = 'ANXIETY',
  /** Coccidia */
  Coccidia = 'COCCIDIA',
  /** Demodex */
  Demodex = 'DEMODEX',
  /** Dental Disease */
  DentalDisease = 'DENTAL_DISEASE',
  /** Dermatophytosis Ringworm */
  DermatophytosisRingworm = 'DERMATOPHYTOSIS_RINGWORM',
  /** Diarrhea Cause Unknown */
  DiarrheaCauseUnknown = 'DIARRHEA_CAUSE_UNKNOWN',
  /** Ear Mites */
  EarMites = 'EAR_MITES',
  /** Feline Immunodeficiency Virus Fiv */
  FelineImmunodeficiencyVirusFiv = 'FELINE_IMMUNODEFICIENCY_VIRUS_FIV',
  /** Feline Infectious Peritonitis Fip */
  FelineInfectiousPeritonitisFip = 'FELINE_INFECTIOUS_PERITONITIS_FIP',
  /** Feline Leukemia Virus Felv */
  FelineLeukemiaVirusFelv = 'FELINE_LEUKEMIA_VIRUS_FELV',
  /** Feline Lower Urinary Tract Disease Flutd */
  FelineLowerUrinaryTractDiseaseFlutd = 'FELINE_LOWER_URINARY_TRACT_DISEASE_FLUTD',
  /** Giardia */
  Giardia = 'GIARDIA',
  /** Heartworm Infection */
  HeartwormInfection = 'HEARTWORM_INFECTION',
  /** Otitis Ear Infection */
  OtitisEarInfection = 'OTITIS_EAR_INFECTION',
  /** Panleukopenia Virus Feline */
  PanleukopeniaVirusFeline = 'PANLEUKOPENIA_VIRUS_FELINE',
  /** Parvovirus Canine */
  ParvovirusCanine = 'PARVOVIRUS_CANINE',
  /** Resource Guarding */
  ResourceGuarding = 'RESOURCE_GUARDING',
  /** Upper Respiratory Tract Infection Uri */
  UpperRespiratoryTractInfectionUri = 'UPPER_RESPIRATORY_TRACT_INFECTION_URI',
  /** Urinary Tract Infection Uti */
  UrinaryTractInfectionUti = 'URINARY_TRACT_INFECTION_UTI',
  /** Urolithiasis Bladder Stones */
  UrolithiasisBladderStones = 'UROLITHIASIS_BLADDER_STONES'
}

export type DiagnosisUpperRespiratoryTractInfectionUri = Diagnosis & {
  __typename?: 'DiagnosisUpperRespiratoryTractInfectionUri';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisUpperRespiratoryTractInfectionUriOperationInput = {
  create?: InputMaybe<CreateDiagnosisUpperRespiratoryTractInfectionUriInput>;
  delete?: InputMaybe<DeleteDiagnosisUpperRespiratoryTractInfectionUriInput>;
  update?: InputMaybe<UpdateDiagnosisUpperRespiratoryTractInfectionUriInput>;
};

export type DiagnosisUrinaryTractInfectionUti = Diagnosis & {
  __typename?: 'DiagnosisUrinaryTractInfectionUti';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisUrinaryTractInfectionUtiOperationInput = {
  create?: InputMaybe<CreateDiagnosisUrinaryTractInfectionUtiInput>;
  delete?: InputMaybe<DeleteDiagnosisUrinaryTractInfectionUtiInput>;
  update?: InputMaybe<UpdateDiagnosisUrinaryTractInfectionUtiInput>;
};

export type DiagnosisUrolithiasisBladderStones = Diagnosis & {
  __typename?: 'DiagnosisUrolithiasisBladderStones';
  datetime?: Maybe<Scalars['Instant']['output']>;
  description?: Maybe<Array<Maybe<Note>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  resolution?: Maybe<DiagnosisResolution>;
  share_with_adopters?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<DiagnosisType>;
};

export type DiagnosisUrolithiasisBladderStonesOperationInput = {
  create?: InputMaybe<CreateDiagnosisUrolithiasisBladderStonesInput>;
  delete?: InputMaybe<DeleteDiagnosisUrolithiasisBladderStonesInput>;
  update?: InputMaybe<UpdateDiagnosisUrolithiasisBladderStonesInput>;
};

export type Document = {
  /** Added date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** File description */
  description?: Maybe<Scalars['String']['output']>;
  /** File id */
  id?: Maybe<Scalars['String']['output']>;
  /** descriptive tags for the file */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** File URL */
  url?: Maybe<Scalars['String']['output']>;
};

/** Pawlytics dog breeds */
export enum DogBreed {
  /** Abruzzese Mastiff */
  AbruzzeseMastiff = 'ABRUZZESE_MASTIFF',
  /** Affenpinscher */
  Affenpinscher = 'AFFENPINSCHER',
  /** Afghan Hound */
  AfghanHound = 'AFGHAN_HOUND',
  /** Africanis */
  Africanis = 'AFRICANIS',
  /** Aidi */
  Aidi = 'AIDI',
  /** Airedale Terrier */
  AiredaleTerrier = 'AIREDALE_TERRIER',
  /** Akbash */
  Akbash = 'AKBASH',
  /** Akita */
  Akita = 'AKITA',
  /** Alapaha Blue Blood Bulldog */
  AlapahaBlueBloodBulldog = 'ALAPAHA_BLUE_BLOOD_BULLDOG',
  /** Alaskan Husky */
  AlaskanHusky = 'ALASKAN_HUSKY',
  /** Alaskan Klee Kai */
  AlaskanKleeKai = 'ALASKAN_KLEE_KAI',
  /** Alaskan Malamute */
  AlaskanMalamute = 'ALASKAN_MALAMUTE',
  /** Alentejo Mastiff */
  AlentejoMastiff = 'ALENTEJO_MASTIFF',
  /** Alpine Dachsbracke */
  AlpineDachsbracke = 'ALPINE_DACHSBRACKE',
  /** American Bulldog */
  AmericanBulldog = 'AMERICAN_BULLDOG',
  /** American Bully */
  AmericanBully = 'AMERICAN_BULLY',
  /** American English Coonhound */
  AmericanEnglishCoonhound = 'AMERICAN_ENGLISH_COONHOUND',
  /** American Eskimo Dog */
  AmericanEskimoDog = 'AMERICAN_ESKIMO_DOG',
  /** American Foxhound */
  AmericanFoxhound = 'AMERICAN_FOXHOUND',
  /** American Hairless Terrier */
  AmericanHairlessTerrier = 'AMERICAN_HAIRLESS_TERRIER',
  /** American Mastiff */
  AmericanMastiff = 'AMERICAN_MASTIFF',
  /** American Pit Bull Terrier */
  AmericanPitBullTerrier = 'AMERICAN_PIT_BULL_TERRIER',
  /** American Staffordshire Terrier */
  AmericanStaffordshireTerrier = 'AMERICAN_STAFFORDSHIRE_TERRIER',
  /** American Staghound */
  AmericanStaghound = 'AMERICAN_STAGHOUND',
  /** American Water Spaniel */
  AmericanWaterSpaniel = 'AMERICAN_WATER_SPANIEL',
  /** Anatolian Shepherd Dog */
  AnatolianShepherdDog = 'ANATOLIAN_SHEPHERD_DOG',
  /** Anglo-français De Petite Vénerie */
  AngloFrancaisDePetiteVenerie = 'ANGLO_FRANCAIS_DE_PETITE_VENERIE',
  /** Appenzeller Sennenhund */
  AppenzellerSennenhund = 'APPENZELLER_SENNENHUND',
  /** Ariegeois */
  Ariegeois = 'ARIEGEOIS',
  /** Ariege Pointer */
  AriegePointer = 'ARIEGE_POINTER',
  /** Armenian Gampr Dog */
  ArmenianGamprDog = 'ARMENIAN_GAMPR_DOG',
  /** Artois Hound */
  ArtoisHound = 'ARTOIS_HOUND',
  /** Aussiedoodle */
  Aussiedoodle = 'AUSSIEDOODLE',
  /** Australian Cattle Dog */
  AustralianCattleDog = 'AUSTRALIAN_CATTLE_DOG',
  /** Australian Shepherd */
  AustralianShepherd = 'AUSTRALIAN_SHEPHERD',
  /** Australian Silky Terrier */
  AustralianSilkyTerrier = 'AUSTRALIAN_SILKY_TERRIER',
  /** Australian Stumpy Tail Cattle Dog */
  AustralianStumpyTailCattleDog = 'AUSTRALIAN_STUMPY_TAIL_CATTLE_DOG',
  /** Australian Terrier */
  AustralianTerrier = 'AUSTRALIAN_TERRIER',
  /** Australian Working Kelpie */
  AustralianWorkingKelpie = 'AUSTRALIAN_WORKING_KELPIE',
  /** Austrian Black And Tan Hound */
  AustrianBlackAndTanHound = 'AUSTRIAN_BLACK_AND_TAN_HOUND',
  /** Austrian Pinscher */
  AustrianPinscher = 'AUSTRIAN_PINSCHER',
  /** Azawakh */
  Azawakh = 'AZAWAKH',
  /** Bakharwal Dog */
  BakharwalDog = 'BAKHARWAL_DOG',
  /** Barak Hound */
  BarakHound = 'BARAK_HOUND',
  /** Barbet */
  Barbet = 'BARBET',
  /** Basenji */
  Basenji = 'BASENJI',
  /** Basset Artésien Normand */
  BassetArtesienNormand = 'BASSET_ARTESIEN_NORMAND',
  /** Basset Bleu De Gascogne */
  BassetBleuDeGascogne = 'BASSET_BLEU_DE_GASCOGNE',
  /** Basset Fauve De Bretagne */
  BassetFauveDeBretagne = 'BASSET_FAUVE_DE_BRETAGNE',
  /** Basset Hound */
  BassetHound = 'BASSET_HOUND',
  /** Bavarian Mountain Hound */
  BavarianMountainHound = 'BAVARIAN_MOUNTAIN_HOUND',
  /** Beagle */
  Beagle = 'BEAGLE',
  /** Beagle-harrier */
  BeagleHarrier = 'BEAGLE_HARRIER',
  /** Beaglier */
  Beaglier = 'BEAGLIER',
  /** Bearded Collie */
  BeardedCollie = 'BEARDED_COLLIE',
  /** Beauceron */
  Beauceron = 'BEAUCERON',
  /** Bedlington Terrier */
  BedlingtonTerrier = 'BEDLINGTON_TERRIER',
  /** Belgian Laekenois */
  BelgianLaekenois = 'BELGIAN_LAEKENOIS',
  /** Belgian Malinois */
  BelgianMalinois = 'BELGIAN_MALINOIS',
  /** Belgian Sheepdog */
  BelgianSheepdog = 'BELGIAN_SHEEPDOG',
  /** Belgian Tervuren */
  BelgianTervuren = 'BELGIAN_TERVUREN',
  /** Bergamasco Shepherd */
  BergamascoShepherd = 'BERGAMASCO_SHEPHERD',
  /** Berger Blanc Suisse */
  BergerBlancSuisse = 'BERGER_BLANC_SUISSE',
  /** Berger Picard */
  BergerPicard = 'BERGER_PICARD',
  /** Berner Laufhund */
  BernerLaufhund = 'BERNER_LAUFHUND',
  /** Bernese Mountain Dog */
  BerneseMountainDog = 'BERNESE_MOUNTAIN_DOG',
  /** Bichon Frisé */
  BichonFrise = 'BICHON_FRISE',
  /** Bichon Yorkie */
  BichonYorkie = 'BICHON_YORKIE',
  /** Bichpoo */
  Bichpoo = 'BICHPOO',
  /** Billy */
  Billy = 'BILLY',
  /** Black And Tan Coonhound */
  BlackAndTanCoonhound = 'BLACK_AND_TAN_COONHOUND',
  /** Black Forest Hound */
  BlackForestHound = 'BLACK_FOREST_HOUND',
  /** Black Mouth Cur */
  BlackMouthCur = 'BLACK_MOUTH_CUR',
  /** Black Norwegian Elkhound */
  BlackNorwegianElkhound = 'BLACK_NORWEGIAN_ELKHOUND',
  /** Black Russian Terrier */
  BlackRussianTerrier = 'BLACK_RUSSIAN_TERRIER',
  /** Bloodhound */
  Bloodhound = 'BLOODHOUND',
  /** Bluetick Coonhound */
  BluetickCoonhound = 'BLUETICK_COONHOUND',
  /** Blue Lacy */
  BlueLacy = 'BLUE_LACY',
  /** Boerboel */
  Boerboel = 'BOERBOEL',
  /** Bohemian Shepherd */
  BohemianShepherd = 'BOHEMIAN_SHEPHERD',
  /** Bolognese */
  Bolognese = 'BOLOGNESE',
  /** Borador */
  Borador = 'BORADOR',
  /** Border Collie */
  BorderCollie = 'BORDER_COLLIE',
  /** Border Terrier */
  BorderTerrier = 'BORDER_TERRIER',
  /** Borzoi */
  Borzoi = 'BORZOI',
  /** Boston Terrier */
  BostonTerrier = 'BOSTON_TERRIER',
  /** Bouvier Des Ardennes */
  BouvierDesArdennes = 'BOUVIER_DES_ARDENNES',
  /** Bouvier Des Flandres */
  BouvierDesFlandres = 'BOUVIER_DES_FLANDRES',
  /** Boxer */
  Boxer = 'BOXER',
  /** Boykin Spaniel */
  BoykinSpaniel = 'BOYKIN_SPANIEL',
  /** Bracco Italiano */
  BraccoItaliano = 'BRACCO_ITALIANO',
  /** Braque D'auvergne */
  BraqueDauvergne = 'BRAQUE_DAUVERGNE',
  /** Braque Du Bourbonnais */
  BraqueDuBourbonnais = 'BRAQUE_DU_BOURBONNAIS',
  /** Braque Saint-germain */
  BraqueSaintGermain = 'BRAQUE_SAINT_GERMAIN',
  /** Brazilian Terrier */
  BrazilianTerrier = 'BRAZILIAN_TERRIER',
  /** Briard */
  Briard = 'BRIARD',
  /** Briquet Griffon Vendéen */
  BriquetGriffonVendeen = 'BRIQUET_GRIFFON_VENDEEN',
  /** Brittany */
  Brittany = 'BRITTANY',
  /** Broholmer */
  Broholmer = 'BROHOLMER',
  /** Brussels Griffon */
  BrusselsGriffon = 'BRUSSELS_GRIFFON',
  /** Bulldog */
  Bulldog = 'BULLDOG',
  /** Bullmastiff */
  Bullmastiff = 'BULLMASTIFF',
  /** Bully Kutta */
  BullyKutta = 'BULLY_KUTTA',
  /** Bull Boxer */
  BullBoxer = 'BULL_BOXER',
  /** Bull Terrier */
  BullTerrier = 'BULL_TERRIER',
  /** Cairn Terrier */
  CairnTerrier = 'CAIRN_TERRIER',
  /** Canaan Dog */
  CanaanDog = 'CANAAN_DOG',
  /** Canadian Eskimo Dog */
  CanadianEskimoDog = 'CANADIAN_ESKIMO_DOG',
  /** Cane Corso */
  CaneCorso = 'CANE_CORSO',
  /** Cao De Castro Laboreiro */
  CaoDeCastroLaboreiro = 'CAO_DE_CASTRO_LABOREIRO',
  /** Cao De Fila De Sao Miguel */
  CaoDeFilaDeSaoMiguel = 'CAO_DE_FILA_DE_SAO_MIGUEL',
  /** Cardigan Welsh Corgi */
  CardiganWelshCorgi = 'CARDIGAN_WELSH_CORGI',
  /** Carea Leonés */
  CareaLeones = 'CAREA_LEONES',
  /** Carolina Dog */
  CarolinaDog = 'CAROLINA_DOG',
  /** Carpathian Shepherd Dog */
  CarpathianShepherdDog = 'CARPATHIAN_SHEPHERD_DOG',
  /** Catahoula Leopard Dog */
  CatahoulaLeopardDog = 'CATAHOULA_LEOPARD_DOG',
  /** Catalan Sheepdog */
  CatalanSheepdog = 'CATALAN_SHEEPDOG',
  /** Caucasian Ovcharka */
  CaucasianOvcharka = 'CAUCASIAN_OVCHARKA',
  /** Cavachon */
  Cavachon = 'CAVACHON',
  /** Cavalier King Charles Spaniel */
  CavalierKingCharlesSpaniel = 'CAVALIER_KING_CHARLES_SPANIEL',
  /** Central Asian Shepherd Dog */
  CentralAsianShepherdDog = 'CENTRAL_ASIAN_SHEPHERD_DOG',
  /** česky Fousek */
  CeskyFousek = 'CESKY_FOUSEK',
  /** Cesky Terrier */
  CeskyTerrier = 'CESKY_TERRIER',
  /** Chesapeake Bay Retriever */
  ChesapeakeBayRetriever = 'CHESAPEAKE_BAY_RETRIEVER',
  /** Chien Français Blanc Et Noir */
  ChienFrancaisBlancEtNoir = 'CHIEN_FRANCAIS_BLANC_ET_NOIR',
  /** Chien Français Blanc Et Orange */
  ChienFrancaisBlancEtOrange = 'CHIEN_FRANCAIS_BLANC_ET_ORANGE',
  /** Chien Français Tricolore */
  ChienFrancaisTricolore = 'CHIEN_FRANCAIS_TRICOLORE',
  /** Chihuahua */
  Chihuahua = 'CHIHUAHUA',
  /** Chilean Fox Terrier */
  ChileanFoxTerrier = 'CHILEAN_FOX_TERRIER',
  /** Chinese Chongqing Dog */
  ChineseChongqingDog = 'CHINESE_CHONGQING_DOG',
  /** Chinese Crested */
  ChineseCrested = 'CHINESE_CRESTED',
  /** Chinese Imperial */
  ChineseImperial = 'CHINESE_IMPERIAL',
  /** Chinese Shar-pei */
  ChineseSharPei = 'CHINESE_SHAR_PEI',
  /** Chinook */
  Chinook = 'CHINOOK',
  /** Chion */
  Chion = 'CHION',
  /** Chippiparai */
  Chippiparai = 'CHIPPIPARAI',
  /** Chizer */
  Chizer = 'CHIZER',
  /** Chorkie */
  Chorkie = 'CHORKIE',
  /** Chow Chow */
  ChowChow = 'CHOW_CHOW',
  /** Cimarrón Uruguayo */
  CimarronUruguayo = 'CIMARRON_URUGUAYO',
  /** Cirneco Dell'etna */
  CirnecoDelletna = 'CIRNECO_DELLETNA',
  /** Clumber Spaniel */
  ClumberSpaniel = 'CLUMBER_SPANIEL',
  /** Cockapoo */
  Cockapoo = 'COCKAPOO',
  /** Cockerpoo */
  Cockerpoo = 'COCKERPOO',
  /** Cocker Spaniel */
  CockerSpaniel = 'COCKER_SPANIEL',
  /** Corsican Dog */
  CorsicanDog = 'CORSICAN_DOG',
  /** Coton De Tulear */
  CotonDeTulear = 'COTON_DE_TULEAR',
  /** Cretan Hound */
  CretanHound = 'CRETAN_HOUND',
  /** Croatian Sheepdog */
  CroatianSheepdog = 'CROATIAN_SHEEPDOG',
  /** Curly-coated Retriever */
  CurlyCoatedRetriever = 'CURLY_COATED_RETRIEVER',
  /** Czechoslovakian Vlcak */
  CzechoslovakianVlcak = 'CZECHOSLOVAKIAN_VLCAK',
  /** Dachshund */
  Dachshund = 'DACHSHUND',
  /** Dalmatian */
  Dalmatian = 'DALMATIAN',
  /** Dandie Dinmont Terrier */
  DandieDinmontTerrier = 'DANDIE_DINMONT_TERRIER',
  /** Danish-swedish Farmdog */
  DanishSwedishFarmdog = 'DANISH_SWEDISH_FARMDOG',
  /** Deutscher Wachtelhund */
  DeutscherWachtelhund = 'DEUTSCHER_WACHTELHUND',
  /** Deutsche Bracke */
  DeutscheBracke = 'DEUTSCHE_BRACKE',
  /** Doberman Pinscher */
  DobermanPinscher = 'DOBERMAN_PINSCHER',
  /** Dogo Argentino */
  DogoArgentino = 'DOGO_ARGENTINO',
  /** Dogue De Bordeaux */
  DogueDeBordeaux = 'DOGUE_DE_BORDEAUX',
  /** Doxiepoo */
  Doxiepoo = 'DOXIEPOO',
  /** Drentsche Patrijshond */
  DrentschePatrijshond = 'DRENTSCHE_PATRIJSHOND',
  /** Drever */
  Drever = 'DREVER',
  /** Dunker */
  Dunker = 'DUNKER',
  /** Dutch Shepherd Dog */
  DutchShepherdDog = 'DUTCH_SHEPHERD_DOG',
  /** Dutch Smoushond */
  DutchSmoushond = 'DUTCH_SMOUSHOND',
  /** East Siberian Laika */
  EastSiberianLaika = 'EAST_SIBERIAN_LAIKA',
  /** Elo */
  Elo = 'ELO',
  /** English Cocker Spaniel */
  EnglishCockerSpaniel = 'ENGLISH_COCKER_SPANIEL',
  /** English Foxhound */
  EnglishFoxhound = 'ENGLISH_FOXHOUND',
  /** English Setter */
  EnglishSetter = 'ENGLISH_SETTER',
  /** English Shepherd */
  EnglishShepherd = 'ENGLISH_SHEPHERD',
  /** English Springer Spaniel */
  EnglishSpringerSpaniel = 'ENGLISH_SPRINGER_SPANIEL',
  /** English Toy Terrier */
  EnglishToyTerrier = 'ENGLISH_TOY_TERRIER',
  /** Entlebucher Mountain Dog */
  EntlebucherMountainDog = 'ENTLEBUCHER_MOUNTAIN_DOG',
  /** épagneul Bleu De Picardie */
  EpagneulBleuDePicardie = 'EPAGNEUL_BLEU_DE_PICARDIE',
  /** Estonian Hound */
  EstonianHound = 'ESTONIAN_HOUND',
  /** Estrela Mountain Dog */
  EstrelaMountainDog = 'ESTRELA_MOUNTAIN_DOG',
  /** Eurasier */
  Eurasier = 'EURASIER',
  /** Field Spaniel */
  FieldSpaniel = 'FIELD_SPANIEL',
  /** Finnish Hound */
  FinnishHound = 'FINNISH_HOUND',
  /** Finnish Lapphund */
  FinnishLapphund = 'FINNISH_LAPPHUND',
  /** Finnish Spitz */
  FinnishSpitz = 'FINNISH_SPITZ',
  /** Flat-coated Retriever */
  FlatCoatedRetriever = 'FLAT_COATED_RETRIEVER',
  /** Formosan Mountain Dog */
  FormosanMountainDog = 'FORMOSAN_MOUNTAIN_DOG',
  /** French Bulldog */
  FrenchBulldog = 'FRENCH_BULLDOG',
  /** French Gascony Pointer */
  FrenchGasconyPointer = 'FRENCH_GASCONY_POINTER',
  /** French Pyrenean Pointer */
  FrenchPyreneanPointer = 'FRENCH_PYRENEAN_POINTER',
  /** French Spaniel */
  FrenchSpaniel = 'FRENCH_SPANIEL',
  /** Gaddi Kutta */
  GaddiKutta = 'GADDI_KUTTA',
  /** Galgo Español */
  GalgoEspanol = 'GALGO_ESPANOL',
  /** Georgian Shepherd Dog */
  GeorgianShepherdDog = 'GEORGIAN_SHEPHERD_DOG',
  /** German Longhaired Pointer */
  GermanLonghairedPointer = 'GERMAN_LONGHAIRED_POINTER',
  /** German Pinscher */
  GermanPinscher = 'GERMAN_PINSCHER',
  /** German Shepherd Dog */
  GermanShepherdDog = 'GERMAN_SHEPHERD_DOG',
  /** German Shorthaired Pointer */
  GermanShorthairedPointer = 'GERMAN_SHORTHAIRED_POINTER',
  /** German Spitz */
  GermanSpitz = 'GERMAN_SPITZ',
  /** German Wirehaired Pointer */
  GermanWirehairedPointer = 'GERMAN_WIREHAIRED_POINTER',
  /** German Wolfspitz */
  GermanWolfspitz = 'GERMAN_WOLFSPITZ',
  /** Giant Schnauzer */
  GiantSchnauzer = 'GIANT_SCHNAUZER',
  /** Glen Of Imaal Terrier */
  GlenOfImaalTerrier = 'GLEN_OF_IMAAL_TERRIER',
  /** Goldendoodle */
  Goldendoodle = 'GOLDENDOODLE',
  /** Golden Retriever */
  GoldenRetriever = 'GOLDEN_RETRIEVER',
  /** Gollie */
  Gollie = 'GOLLIE',
  /** Gordon Setter */
  GordonSetter = 'GORDON_SETTER',
  /** Grand Anglo-français Blanc Et Noir */
  GrandAngloFrancaisBlancEtNoir = 'GRAND_ANGLO_FRANCAIS_BLANC_ET_NOIR',
  /** Grand Anglo-français Blanc Et Orange */
  GrandAngloFrancaisBlancEtOrange = 'GRAND_ANGLO_FRANCAIS_BLANC_ET_ORANGE',
  /** Grand Anglo-francais Tricolore */
  GrandAngloFrancaisTricolore = 'GRAND_ANGLO_FRANCAIS_TRICOLORE',
  /** Grand Basset Griffon Vendéen */
  GrandBassetGriffonVendeen = 'GRAND_BASSET_GRIFFON_VENDEEN',
  /** Grand Bleu De Gascogne */
  GrandBleuDeGascogne = 'GRAND_BLEU_DE_GASCOGNE',
  /** Grand Gascon Saintongeois */
  GrandGasconSaintongeois = 'GRAND_GASCON_SAINTONGEOIS',
  /** Grand Griffon Vendéen */
  GrandGriffonVendeen = 'GRAND_GRIFFON_VENDEEN',
  /** Greater Swiss Mountain Dog */
  GreaterSwissMountainDog = 'GREATER_SWISS_MOUNTAIN_DOG',
  /** Great Dane */
  GreatDane = 'GREAT_DANE',
  /** Great Pyrenees */
  GreatPyrenees = 'GREAT_PYRENEES',
  /** Greek Shepherd */
  GreekShepherd = 'GREEK_SHEPHERD',
  /** Greenland Dog */
  GreenlandDog = 'GREENLAND_DOG',
  /** Greyhound */
  Greyhound = 'GREYHOUND',
  /** Griffon Bleu De Gascogne */
  GriffonBleuDeGascogne = 'GRIFFON_BLEU_DE_GASCOGNE',
  /** Griffon Fauve De Bretagne */
  GriffonFauveDeBretagne = 'GRIFFON_FAUVE_DE_BRETAGNE',
  /** Griffon Nivernais */
  GriffonNivernais = 'GRIFFON_NIVERNAIS',
  /** Haldenstøver */
  Haldenstver = 'HALDENSTVER',
  /** Hamiltonstövare */
  Hamiltonstovare = 'HAMILTONSTOVARE',
  /** Hanover Hound */
  HanoverHound = 'HANOVER_HOUND',
  /** Harrier */
  Harrier = 'HARRIER',
  /** Havanese */
  Havanese = 'HAVANESE',
  /** Hellenic Hound */
  HellenicHound = 'HELLENIC_HOUND',
  /** Himalayan Sheepdog */
  HimalayanSheepdog = 'HIMALAYAN_SHEEPDOG',
  /** Hokkaido-ken */
  HokkaidoKen = 'HOKKAIDO_KEN',
  /** Hovawart */
  Hovawart = 'HOVAWART',
  /** Hungarian Hound */
  HungarianHound = 'HUNGARIAN_HOUND',
  /** Huntaway */
  Huntaway = 'HUNTAWAY',
  /** Hygenhund */
  Hygenhund = 'HYGENHUND',
  /** Ibizan Hound */
  IbizanHound = 'IBIZAN_HOUND',
  /** Icelandic Sheepdog */
  IcelandicSheepdog = 'ICELANDIC_SHEEPDOG',
  /** Indian Pariah Dog */
  IndianPariahDog = 'INDIAN_PARIAH_DOG',
  /** Indian Spitz */
  IndianSpitz = 'INDIAN_SPITZ',
  /** Irish Red And White Setter */
  IrishRedAndWhiteSetter = 'IRISH_RED_AND_WHITE_SETTER',
  /** Irish Setter */
  IrishSetter = 'IRISH_SETTER',
  /** Irish Terrier */
  IrishTerrier = 'IRISH_TERRIER',
  /** Irish Water Spaniel */
  IrishWaterSpaniel = 'IRISH_WATER_SPANIEL',
  /** Irish Wolfhound */
  IrishWolfhound = 'IRISH_WOLFHOUND',
  /** Istrian Coarse-haired Hound */
  IstrianCoarseHairedHound = 'ISTRIAN_COARSE_HAIRED_HOUND',
  /** Istrian Short-haired Hound */
  IstrianShortHairedHound = 'ISTRIAN_SHORT_HAIRED_HOUND',
  /** Italian Greyhound */
  ItalianGreyhound = 'ITALIAN_GREYHOUND',
  /** Jack-a-bee */
  JackABee = 'JACK_A_BEE',
  /** Jack-a-poo */
  JackAPoo = 'JACK_A_POO',
  /** Jack Russell Terrier */
  JackRussellTerrier = 'JACK_RUSSELL_TERRIER',
  /** Jagdterrier */
  Jagdterrier = 'JAGDTERRIER',
  /** Jämthund */
  Jamthund = 'JAMTHUND',
  /** Japanese Chin */
  JapaneseChin = 'JAPANESE_CHIN',
  /** Japanese Spitz */
  JapaneseSpitz = 'JAPANESE_SPITZ',
  /** Kai-ken */
  KaiKen = 'KAI_KEN',
  /** Kangal Dog */
  KangalDog = 'KANGAL_DOG',
  /** Kanni */
  Kanni = 'KANNI',
  /** Karakachan Dog */
  KarakachanDog = 'KARAKACHAN_DOG',
  /** Karelian Bear Dog */
  KarelianBearDog = 'KARELIAN_BEAR_DOG',
  /** Karst Shepherd Dog */
  KarstShepherdDog = 'KARST_SHEPHERD_DOG',
  /** Keeshond */
  Keeshond = 'KEESHOND',
  /** Kerry Beagle */
  KerryBeagle = 'KERRY_BEAGLE',
  /** Kerry Blue Terrier */
  KerryBlueTerrier = 'KERRY_BLUE_TERRIER',
  /** King Charles Spaniel */
  KingCharlesSpaniel = 'KING_CHARLES_SPANIEL',
  /** King Shepherd */
  KingShepherd = 'KING_SHEPHERD',
  /** Kintamani */
  Kintamani = 'KINTAMANI',
  /** Kishu-ken */
  KishuKen = 'KISHU_KEN',
  /** Komondor */
  Komondor = 'KOMONDOR',
  /** Kooikerhondje */
  Kooikerhondje = 'KOOIKERHONDJE',
  /** Koolie */
  Koolie = 'KOOLIE',
  /** Korean Jindo */
  KoreanJindo = 'KOREAN_JINDO',
  /** Kromfohrländer */
  Kromfohrlander = 'KROMFOHRLANDER',
  /** Kuvasz */
  Kuvasz = 'KUVASZ',
  /** Kyi-leo */
  KyiLeo = 'KYI_LEO',
  /** Labradinger */
  Labradinger = 'LABRADINGER',
  /** Labradoodle */
  Labradoodle = 'LABRADOODLE',
  /** Labrador Husky */
  LabradorHusky = 'LABRADOR_HUSKY',
  /** Labrador Retriever */
  LabradorRetriever = 'LABRADOR_RETRIEVER',
  /** Lagotto Romagnolo */
  LagottoRomagnolo = 'LAGOTTO_ROMAGNOLO',
  /** Lakeland Terrier */
  LakelandTerrier = 'LAKELAND_TERRIER',
  /** Lancashire Heeler */
  LancashireHeeler = 'LANCASHIRE_HEELER',
  /** Landseer */
  Landseer = 'LANDSEER',
  /** Lapponian Herder */
  LapponianHerder = 'LAPPONIAN_HERDER',
  /** Large Münsterländer */
  LargeMunsterlander = 'LARGE_MUNSTERLANDER',
  /** Leonberger */
  Leonberger = 'LEONBERGER',
  /** Lhasa Apso */
  LhasaApso = 'LHASA_APSO',
  /** Longdog */
  Longdog = 'LONGDOG',
  /** Löwchen */
  Lowchen = 'LOWCHEN',
  /** Lurcher */
  Lurcher = 'LURCHER',
  /** Magyar Agár */
  MagyarAgar = 'MAGYAR_AGAR',
  /** Majorca Mastiff */
  MajorcaMastiff = 'MAJORCA_MASTIFF',
  /** Maltese */
  Maltese = 'MALTESE',
  /** Maltipoo */
  Maltipoo = 'MALTIPOO',
  /** Mal-shi */
  MalShi = 'MAL_SHI',
  /** Manchester Terrier */
  ManchesterTerrier = 'MANCHESTER_TERRIER',
  /** Maremma Sheepdog */
  MaremmaSheepdog = 'MAREMMA_SHEEPDOG',
  /** Mastiff */
  Mastiff = 'MASTIFF',
  /** Mcnab */
  Mcnab = 'MCNAB',
  /** Miniature Austrialian Shepherd */
  MiniatureAustrialianShepherd = 'MINIATURE_AUSTRIALIAN_SHEPHERD',
  /** Miniature Bull Terrier */
  MiniatureBullTerrier = 'MINIATURE_BULL_TERRIER',
  /** Miniature Fox Terrier */
  MiniatureFoxTerrier = 'MINIATURE_FOX_TERRIER',
  /** Miniature Pinscher */
  MiniaturePinscher = 'MINIATURE_PINSCHER',
  /** Miniature Poodle */
  MiniaturePoodle = 'MINIATURE_POODLE',
  /** Miniature Schnauzer */
  MiniatureSchnauzer = 'MINIATURE_SCHNAUZER',
  /** Miniature Shar Pei */
  MiniatureSharPei = 'MINIATURE_SHAR_PEI',
  /** Mioritic */
  Mioritic = 'MIORITIC',
  /** Montenegrin Mountain Hound */
  MontenegrinMountainHound = 'MONTENEGRIN_MOUNTAIN_HOUND',
  /** Moscow Watchdog */
  MoscowWatchdog = 'MOSCOW_WATCHDOG',
  /** Mountain Cur */
  MountainCur = 'MOUNTAIN_CUR',
  /** Mountain Feist */
  MountainFeist = 'MOUNTAIN_FEIST',
  /** Mudhol Hound */
  MudholHound = 'MUDHOL_HOUND',
  /** Mudi */
  Mudi = 'MUDI',
  /** Neapolitan Mastiff */
  NeapolitanMastiff = 'NEAPOLITAN_MASTIFF',
  /** Newfoundland */
  Newfoundland = 'NEWFOUNDLAND',
  /** New Guinea Singing Dog */
  NewGuineaSingingDog = 'NEW_GUINEA_SINGING_DOG',
  /** New Zealand Heading Dog */
  NewZealandHeadingDog = 'NEW_ZEALAND_HEADING_DOG',
  /** Niederlaufhund */
  Niederlaufhund = 'NIEDERLAUFHUND',
  /** Nippon Terrier */
  NipponTerrier = 'NIPPON_TERRIER',
  /** Nordic Spitz */
  NordicSpitz = 'NORDIC_SPITZ',
  /** Norfolk Terrier */
  NorfolkTerrier = 'NORFOLK_TERRIER',
  /** Northern Inuit Dog */
  NorthernInuitDog = 'NORTHERN_INUIT_DOG',
  /** Norwegian Buhund */
  NorwegianBuhund = 'NORWEGIAN_BUHUND',
  /** Norwegian Elkhound */
  NorwegianElkhound = 'NORWEGIAN_ELKHOUND',
  /** Norwegian Lundehund */
  NorwegianLundehund = 'NORWEGIAN_LUNDEHUND',
  /** Norwich Terrier */
  NorwichTerrier = 'NORWICH_TERRIER',
  /** Nova Scotia Duck Tolling Retriever */
  NovaScotiaDuckTollingRetriever = 'NOVA_SCOTIA_DUCK_TOLLING_RETRIEVER',
  /** Olde English Bulldogge */
  OldeEnglishBulldogge = 'OLDE_ENGLISH_BULLDOGGE',
  /** Old Croatian Sighthound */
  OldCroatianSighthound = 'OLD_CROATIAN_SIGHTHOUND',
  /** Old Danish Pointer */
  OldDanishPointer = 'OLD_DANISH_POINTER',
  /** Old English Sheepdog */
  OldEnglishSheepdog = 'OLD_ENGLISH_SHEEPDOG',
  /** Otterhound */
  Otterhound = 'OTTERHOUND',
  /** Papillon */
  Papillon = 'PAPILLON',
  /** Parson Russell Terrier */
  ParsonRussellTerrier = 'PARSON_RUSSELL_TERRIER',
  /** Patterdale Terrier */
  PatterdaleTerrier = 'PATTERDALE_TERRIER',
  /** Pekingese */
  Pekingese = 'PEKINGESE',
  /** Pembroke Welsh Corgi */
  PembrokeWelshCorgi = 'PEMBROKE_WELSH_CORGI',
  /** Perro De Pastor Mallorquin */
  PerroDePastorMallorquin = 'PERRO_DE_PASTOR_MALLORQUIN',
  /** Perro De Presa Canario */
  PerroDePresaCanario = 'PERRO_DE_PRESA_CANARIO',
  /** Perro Fino Colombiano */
  PerroFinoColombiano = 'PERRO_FINO_COLOMBIANO',
  /** Persian Mastiff */
  PersianMastiff = 'PERSIAN_MASTIFF',
  /** Peruvian Hairless */
  PeruvianHairless = 'PERUVIAN_HAIRLESS',
  /** Petit Basset Griffon Vendéen */
  PetitBassetGriffonVendeen = 'PETIT_BASSET_GRIFFON_VENDEEN',
  /** Petit Bleu De Gascogne */
  PetitBleuDeGascogne = 'PETIT_BLEU_DE_GASCOGNE',
  /** Phalène */
  Phalene = 'PHALENE',
  /** Pharaoh Hound */
  PharaohHound = 'PHARAOH_HOUND',
  /** Phu Quoc Ridgeback */
  PhuQuocRidgeback = 'PHU_QUOC_RIDGEBACK',
  /** Picardy Spaniel */
  PicardySpaniel = 'PICARDY_SPANIEL',
  /** Piccolo Lepraiolo Italiano */
  PiccoloLepraioloItaliano = 'PICCOLO_LEPRAIOLO_ITALIANO',
  /** Plott */
  Plott = 'PLOTT',
  /** Plummer Terrier */
  PlummerTerrier = 'PLUMMER_TERRIER',
  /** Podenco Canario */
  PodencoCanario = 'PODENCO_CANARIO',
  /** Pointer */
  Pointer = 'POINTER',
  /** Poitevin */
  Poitevin = 'POITEVIN',
  /** Polish Greyhound */
  PolishGreyhound = 'POLISH_GREYHOUND',
  /** Polish Hound */
  PolishHound = 'POLISH_HOUND',
  /** Polish Hunting Dog */
  PolishHuntingDog = 'POLISH_HUNTING_DOG',
  /** Polish Lowland Sheepdog */
  PolishLowlandSheepdog = 'POLISH_LOWLAND_SHEEPDOG',
  /** Pomeranian */
  Pomeranian = 'POMERANIAN',
  /** Pont-audemer Spaniel */
  PontAudemerSpaniel = 'PONT_AUDEMER_SPANIEL',
  /** Porcelaine */
  Porcelaine = 'PORCELAINE',
  /** Portuguese Podengo */
  PortuguesePodengo = 'PORTUGUESE_PODENGO',
  /** Portuguese Pointer */
  PortuguesePointer = 'PORTUGUESE_POINTER',
  /** Portuguese Sheepdog */
  PortugueseSheepdog = 'PORTUGUESE_SHEEPDOG',
  /** Portuguese Water Dog */
  PortugueseWaterDog = 'PORTUGUESE_WATER_DOG',
  /** Posavac Hound */
  PosavacHound = 'POSAVAC_HOUND',
  /** Pudelpointer */
  Pudelpointer = 'PUDELPOINTER',
  /** Pug */
  Pug = 'PUG',
  /** Puggle */
  Puggle = 'PUGGLE',
  /** Puli */
  Puli = 'PULI',
  /** Pumi */
  Pumi = 'PUMI',
  /** Pungsan */
  Pungsan = 'PUNGSAN',
  /** Pyrenean Mastiff */
  PyreneanMastiff = 'PYRENEAN_MASTIFF',
  /** Pyrenean Shepherd */
  PyreneanShepherd = 'PYRENEAN_SHEPHERD',
  /** Rampur Greyhound */
  RampurGreyhound = 'RAMPUR_GREYHOUND',
  /** Ratonero Bodeguero Andaluz */
  RatoneroBodegueroAndaluz = 'RATONERO_BODEGUERO_ANDALUZ',
  /** Rat Terrier */
  RatTerrier = 'RAT_TERRIER',
  /** Redbone Coonhound */
  RedboneCoonhound = 'REDBONE_COONHOUND',
  /** Rhodesian Ridgeback */
  RhodesianRidgeback = 'RHODESIAN_RIDGEBACK',
  /** Rottweiler */
  Rottweiler = 'ROTTWEILER',
  /** Rough Collie */
  RoughCollie = 'ROUGH_COLLIE',
  /** Rough-haired Iletsua */
  RoughHairedIletsua = 'ROUGH_HAIRED_ILETSUA',
  /** Russian Spaniel */
  RussianSpaniel = 'RUSSIAN_SPANIEL',
  /** Russian Toy */
  RussianToy = 'RUSSIAN_TOY',
  /** Russo-european Laika */
  RussoEuropeanLaika = 'RUSSO_EUROPEAN_LAIKA',
  /** Saarlooswolfhound */
  Saarlooswolfhound = 'SAARLOOSWOLFHOUND',
  /** Sabueso Español */
  SabuesoEspanol = 'SABUESO_ESPANOL',
  /** Sage Koochee */
  SageKoochee = 'SAGE_KOOCHEE',
  /** Saint-usuge Spaniel */
  SaintUsugeSpaniel = 'SAINT_USUGE_SPANIEL',
  /** Saluki */
  Saluki = 'SALUKI',
  /** Samoyed */
  Samoyed = 'SAMOYED',
  /** šarplaninac */
  Sarplaninac = 'SARPLANINAC',
  /** Schapendoes */
  Schapendoes = 'SCHAPENDOES',
  /** Schillerstövare */
  Schillerstovare = 'SCHILLERSTOVARE',
  /** Schipperke */
  Schipperke = 'SCHIPPERKE',
  /** Schnoodle */
  Schnoodle = 'SCHNOODLE',
  /** Schweizer Laufhund */
  SchweizerLaufhund = 'SCHWEIZER_LAUFHUND',
  /** Scottish Deerhound */
  ScottishDeerhound = 'SCOTTISH_DEERHOUND',
  /** Scottish Terrier */
  ScottishTerrier = 'SCOTTISH_TERRIER',
  /** Sealyham Terrier */
  SealyhamTerrier = 'SEALYHAM_TERRIER',
  /** Segugio Italiano */
  SegugioItaliano = 'SEGUGIO_ITALIANO',
  /** Segugio Maremmano */
  SegugioMaremmano = 'SEGUGIO_MAREMMANO',
  /** Seppala Siberian Sleddog */
  SeppalaSiberianSleddog = 'SEPPALA_SIBERIAN_SLEDDOG',
  /** Serbian Hound */
  SerbianHound = 'SERBIAN_HOUND',
  /** Serbian Tricolor Hound */
  SerbianTricolorHound = 'SERBIAN_TRICOLOR_HOUND',
  /** Shetland Sheepdog */
  ShetlandSheepdog = 'SHETLAND_SHEEPDOG',
  /** Shiba Inu */
  ShibaInu = 'SHIBA_INU',
  /** Shih-poo */
  ShihPoo = 'SHIH_POO',
  /** Shih Tzu */
  ShihTzu = 'SHIH_TZU',
  /** Shikoku */
  Shikoku = 'SHIKOKU',
  /** Shiloh Shepherd */
  ShilohShepherd = 'SHILOH_SHEPHERD',
  /** Shorty Bull */
  ShortyBull = 'SHORTY_BULL',
  /** Siberian Husky */
  SiberianHusky = 'SIBERIAN_HUSKY',
  /** Silken Windhound */
  SilkenWindhound = 'SILKEN_WINDHOUND',
  /** Skye Terrier */
  SkyeTerrier = 'SKYE_TERRIER',
  /** Sloughi */
  Sloughi = 'SLOUGHI',
  /** Slovakian Rough-haired Pointer */
  SlovakianRoughHairedPointer = 'SLOVAKIAN_ROUGH_HAIRED_POINTER',
  /** Slovak Cuvac */
  SlovakCuvac = 'SLOVAK_CUVAC',
  /** Smålandsstövare */
  Smalandsstovare = 'SMALANDSSTOVARE',
  /** Small Greek Domestic Dog */
  SmallGreekDomesticDog = 'SMALL_GREEK_DOMESTIC_DOG',
  /** Small Münsterländer */
  SmallMunsterlander = 'SMALL_MUNSTERLANDER',
  /** Smooth Collie */
  SmoothCollie = 'SMOOTH_COLLIE',
  /** Smooth Fox Terrier */
  SmoothFoxTerrier = 'SMOOTH_FOX_TERRIER',
  /** Soft-coated Wheaten Terrier */
  SoftCoatedWheatenTerrier = 'SOFT_COATED_WHEATEN_TERRIER',
  /** South Russian Ovcharka */
  SouthRussianOvcharka = 'SOUTH_RUSSIAN_OVCHARKA',
  /** Spanish Mastiff */
  SpanishMastiff = 'SPANISH_MASTIFF',
  /** Spanish Water Dog */
  SpanishWaterDog = 'SPANISH_WATER_DOG',
  /** Spinone Italiano */
  SpinoneItaliano = 'SPINONE_ITALIANO',
  /** Sporting Lucas Terrier */
  SportingLucasTerrier = 'SPORTING_LUCAS_TERRIER',
  /** Stabyhoun */
  Stabyhoun = 'STABYHOUN',
  /** Staffordshire Bull Terrier */
  StaffordshireBullTerrier = 'STAFFORDSHIRE_BULL_TERRIER',
  /** Standard Poodle */
  StandardPoodle = 'STANDARD_POODLE',
  /** Standard Schnauzer */
  StandardSchnauzer = 'STANDARD_SCHNAUZER',
  /** Styrian Coarse-haired Hound */
  StyrianCoarseHairedHound = 'STYRIAN_COARSE_HAIRED_HOUND',
  /** St. Bernard */
  StBernard = 'ST_BERNARD',
  /** St. Hubert Jura Hound */
  StHubertJuraHound = 'ST_HUBERT_JURA_HOUND',
  /** Sussex Spaniel */
  SussexSpaniel = 'SUSSEX_SPANIEL',
  /** Swedish Lapphund */
  SwedishLapphund = 'SWEDISH_LAPPHUND',
  /** Swedish Vallhund */
  SwedishVallhund = 'SWEDISH_VALLHUND',
  /** Swiss Jura Hound */
  SwissJuraHound = 'SWISS_JURA_HOUND',
  /** Swiss Lucerne Hound */
  SwissLucerneHound = 'SWISS_LUCERNE_HOUND',
  /** Taigan */
  Taigan = 'TAIGAN',
  /** Tamaskan Dog */
  TamaskanDog = 'TAMASKAN_DOG',
  /** Tatra Shepherd Dog */
  TatraShepherdDog = 'TATRA_SHEPHERD_DOG',
  /** Teddy Roosevelt Terrier */
  TeddyRooseveltTerrier = 'TEDDY_ROOSEVELT_TERRIER',
  /** Tenterfield Terrier */
  TenterfieldTerrier = 'TENTERFIELD_TERRIER',
  /** Thai Bangkaew Dog */
  ThaiBangkaewDog = 'THAI_BANGKAEW_DOG',
  /** Thai Ridgeback */
  ThaiRidgeback = 'THAI_RIDGEBACK',
  /** Tibetan Kyi Apso */
  TibetanKyiApso = 'TIBETAN_KYI_APSO',
  /** Tibetan Mastiff */
  TibetanMastiff = 'TIBETAN_MASTIFF',
  /** Tibetan Spaniel */
  TibetanSpaniel = 'TIBETAN_SPANIEL',
  /** Tibetan Terrier */
  TibetanTerrier = 'TIBETAN_TERRIER',
  /** Tornjak */
  Tornjak = 'TORNJAK',
  /** Tosa */
  Tosa = 'TOSA',
  /** Toy Manchester Terrier */
  ToyManchesterTerrier = 'TOY_MANCHESTER_TERRIER',
  /** Toy Poodle */
  ToyPoodle = 'TOY_POODLE',
  /** Treeing Walker Coonhound */
  TreeingWalkerCoonhound = 'TREEING_WALKER_COONHOUND',
  /** Tyrolean Hound */
  TyroleanHound = 'TYROLEAN_HOUND',
  /** Uruguayan Molosser */
  UruguayanMolosser = 'URUGUAYAN_MOLOSSER',
  /** Victorian Bulldog */
  VictorianBulldog = 'VICTORIAN_BULLDOG',
  /** Vizsla */
  Vizsla = 'VIZSLA',
  /** Volpino Italiano */
  VolpinoItaliano = 'VOLPINO_ITALIANO',
  /** Weimaraner */
  Weimaraner = 'WEIMARANER',
  /** Welsh Sheepdog */
  WelshSheepdog = 'WELSH_SHEEPDOG',
  /** Welsh Springer Spaniel */
  WelshSpringerSpaniel = 'WELSH_SPRINGER_SPANIEL',
  /** Welsh Terrier */
  WelshTerrier = 'WELSH_TERRIER',
  /** Westphalian Dachsbracke */
  WestphalianDachsbracke = 'WESTPHALIAN_DACHSBRACKE',
  /** West Highland White Terrier */
  WestHighlandWhiteTerrier = 'WEST_HIGHLAND_WHITE_TERRIER',
  /** West Siberian Laika */
  WestSiberianLaika = 'WEST_SIBERIAN_LAIKA',
  /** Wetterhoun */
  Wetterhoun = 'WETTERHOUN',
  /** Whippet */
  Whippet = 'WHIPPET',
  /** Wirehaired Pointing Griffon */
  WirehairedPointingGriffon = 'WIREHAIRED_POINTING_GRIFFON',
  /** Wirehaired Vizsla */
  WirehairedVizsla = 'WIREHAIRED_VIZSLA',
  /** Wire Fox Terrier */
  WireFoxTerrier = 'WIRE_FOX_TERRIER',
  /** Xoloitzcuintli */
  Xoloitzcuintli = 'XOLOITZCUINTLI',
  /** Yakutian Laika */
  YakutianLaika = 'YAKUTIAN_LAIKA',
  /** Yorkshire Terrier */
  YorkshireTerrier = 'YORKSHIRE_TERRIER',
  /** Zwergschnauzer (dwarf Schnauzer) */
  ZwergschnauzerDwarfSchnauzer = 'ZWERGSCHNAUZER_DWARF_SCHNAUZER'
}

/** Pawlytics dog colors */
export enum DogColor {
  /** Apricot */
  Apricot = 'APRICOT',
  /** Ash */
  Ash = 'ASH',
  /** Badger */
  Badger = 'BADGER',
  /** Beige */
  Beige = 'BEIGE',
  /** Bicolor */
  Bicolor = 'BICOLOR',
  /** Biscuit */
  Biscuit = 'BISCUIT',
  /** Black */
  Black = 'BLACK',
  /** Blonde */
  Blonde = 'BLONDE',
  /** Blue */
  Blue = 'BLUE',
  /** Brindle */
  Brindle = 'BRINDLE',
  /** Bronze */
  Bronze = 'BRONZE',
  /** Brown */
  Brown = 'BROWN',
  /** Chestnut */
  Chestnut = 'CHESTNUT',
  /** Chocolate */
  Chocolate = 'CHOCOLATE',
  /** Cream */
  Cream = 'CREAM',
  /** Dark Blue */
  DarkBlue = 'DARK_BLUE',
  /** Dark Brown */
  DarkBrown = 'DARK_BROWN',
  /** Dark Gray */
  DarkGray = 'DARK_GRAY',
  /** Deep Red Ginger */
  DeepRedGinger = 'DEEP_RED_GINGER',
  /** Domino */
  Domino = 'DOMINO',
  /** Dotted */
  Dotted = 'DOTTED',
  /** Fawn */
  Fawn = 'FAWN',
  /** Ginger */
  Ginger = 'GINGER',
  /** Gold */
  Gold = 'GOLD',
  /** Gray */
  Gray = 'GRAY',
  /** Harlequin */
  Harlequin = 'HARLEQUIN',
  /** Light Brown */
  LightBrown = 'LIGHT_BROWN',
  /** Light Sand */
  LightSand = 'LIGHT_SAND',
  /** Light Silver */
  LightSilver = 'LIGHT_SILVER',
  /** Lilac */
  Lilac = 'LILAC',
  /** Lion */
  Lion = 'LION',
  /** Liver */
  Liver = 'LIVER',
  /** Merle */
  Merle = 'MERLE',
  /** Mustard */
  Mustard = 'MUSTARD',
  /** Orange */
  Orange = 'ORANGE',
  /** Pale Brown */
  PaleBrown = 'PALE_BROWN',
  /** Red */
  Red = 'RED',
  /** Ruby */
  Ruby = 'RUBY',
  /** Rust */
  Rust = 'RUST',
  /** Sable */
  Sable = 'SABLE',
  /** Salt & Pepper */
  SaltandPepper = 'SALTAND_PEPPER',
  /** Sandy */
  Sandy = 'SANDY',
  /** Silver */
  Silver = 'SILVER',
  /** Stag-red */
  StagRed = 'STAG_RED',
  /** Straw */
  Straw = 'STRAW',
  /** Tan */
  Tan = 'TAN',
  /** Tricolor */
  Tricolor = 'TRICOLOR',
  /** Wheaten */
  Wheaten = 'WHEATEN',
  /** White */
  White = 'WHITE',
  /** Yellow */
  Yellow = 'YELLOW'
}

export type Econtract = {
  __typename?: 'Econtract';
  artifact?: Maybe<File>;
  id: Scalars['UUID']['output'];
  initials?: Maybe<Array<File>>;
  invite_token?: Maybe<Scalars['String']['output']>;
  notify_persons?: Maybe<Array<Maybe<Person>>>;
  organization: OrganizationBasic;
  organization_pet?: Maybe<Organization_Pet>;
  person: Person;
  signature?: Maybe<File>;
  template?: Maybe<EcontractTemplate>;
};

export type EcontractArtifact = Document & {
  __typename?: 'EcontractArtifact';
  /** Added date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** File description */
  description?: Maybe<Scalars['String']['output']>;
  econtract: Econtract;
  /** File id */
  id?: Maybe<Scalars['String']['output']>;
  /** descriptive tags for the file */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** File URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type EcontractInvite = {
  __typename?: 'EcontractInvite';
  invite_token: Scalars['String']['output'];
};

export type EcontractTemplate = {
  __typename?: 'EcontractTemplate';
  created_at: Scalars['Instant']['output'];
  file?: Maybe<File>;
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['Instant']['output'];
};

export type EcontractTemplateConnection = {
  __typename?: 'EcontractTemplateConnection';
  entities?: Maybe<Array<EcontractTemplate>>;
};

export type Exported_Organization_Pet = {
  __typename?: 'Exported_Organization_Pet';
  /** A pre-signed download URL */
  pdf_url?: Maybe<Scalars['String']['output']>;
};

export type ExternalEntity = ExternalOrganization | Person;

export type ExternalOrganization = {
  __typename?: 'ExternalOrganization';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  primary_address?: Maybe<Address>;
  type?: Maybe<Organization_Type>;
};

export type File = Document & {
  __typename?: 'File';
  /** Added date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** File description */
  description?: Maybe<Scalars['String']['output']>;
  /** File id */
  id?: Maybe<Scalars['String']['output']>;
  /** Original file URL */
  original_url?: Maybe<Scalars['String']['output']>;
  /** descriptive tags for the file */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** File URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type FileUploadDescriptor = {
  __typename?: 'FileUploadDescriptor';
  /** The date upload permissions are valid until. */
  expiration?: Maybe<Scalars['Instant']['output']>;
  /** A unique id that can be used to reference the uploaded file in subsequent requests */
  file_id?: Maybe<Scalars['UUID']['output']>;
  /** A URL to PUT a file for upload */
  upload_url?: Maybe<Scalars['String']['output']>;
};

export type FosterRecord = {
  __typename?: 'FosterRecord';
  end_date?: Maybe<Scalars['Instant']['output']>;
  organization_pet?: Maybe<Organization_Pet>;
  start_date?: Maybe<Scalars['Instant']['output']>;
};

export type GenerateAdoptionReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateAnimalPopulationReportInput = {
  organization_id: Scalars['UUID']['input'];
};

export type GenerateDepartmentOfAgricultureReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateFosterHomeReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateLengthOfStayReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
  type: LengthOfStayType;
};

export type GenerateMedicalCostReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateMicrochipReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateOwnerSurrenderReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GeneratePendingContractsReportInput = {
  organization_id: Scalars['UUID']['input'];
};

export type GeneratePetDietAndFeedingReportInput = {
  organization_id: Scalars['UUID']['input'];
};

export type GeneratePetIntakeReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GeneratePetLocationHistoryReportInput = {
  organization_id: Scalars['UUID']['input'];
  organization_pet_ids?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type GeneratePetOutcomeReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GeneratePetSummaryCountsInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GeneratePetsByStatusReportInput = {
  organization_id: Scalars['UUID']['input'];
  organization_pet_statuses?: InputMaybe<Array<Organization_Pet_Status>>;
};

export type GenerateSacReportInput = {
  begin_period: Scalars['YearMonth']['input'];
  end_period: Scalars['YearMonth']['input'];
  organization_id: Scalars['UUID']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type GenerateTransferInReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateTransferOutReportInput = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};

export type GenerateUpcomingMedicalRemindersReportInput = {
  organization_id: Scalars['UUID']['input'];
};

export type GeneratedReportResult = {
  __typename?: 'GeneratedReportResult';
  job: Job;
};

export type Input_CustomReport_Create = {
  /** Report description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Serialized JSON representing the report */
  json_blob: Scalars['String']['input'];
  /** Report name. Must be unique, by organization. */
  name: Scalars['String']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_CustomReport_Delete = {
  id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_CustomReport_Update = {
  /** Report description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** Serialized JSON representing the report */
  json_blob?: InputMaybe<Scalars['String']['input']>;
  /** Report name. Must be unique, by organization. */
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_DateRange = {
  max?: InputMaybe<Scalars['Instant']['input']>;
  min?: InputMaybe<Scalars['Instant']['input']>;
};

export type Input_IntakeFilter = {
  date?: InputMaybe<Input_DateRange>;
  from_id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Array<Pet_Intake_Type>>;
};

export type Input_InviteUser = {
  /** Name for print, not used for user creation */
  display_name?: InputMaybe<Scalars['String']['input']>;
  /** New user's email, must match on account creation (i.e., the user must create an account with this email when using the returned invite token) */
  email: Scalars['String']['input'];
  /** Invite expiration date */
  expiration_date?: InputMaybe<Scalars['Instant']['input']>;
  /** Organization to invite user to join */
  organization_id: Scalars['UUID']['input'];
  /** Invited user's role in organization */
  role: Permission_Role_Type;
};

export type Input_Money = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  currency?: InputMaybe<Currency>;
};

export type Input_MoneyRange = {
  currency: Currency;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type Input_Note_Delete = {
  /** Note Id */
  note_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
};

export type Input_Note_Update = {
  /** Note Id */
  note_id: Scalars['UUID']['input'];
  /** Note text */
  text: Scalars['String']['input'];
};

export type Input_Notification_Update = {
  /** Notification read state */
  is_read: Scalars['Boolean']['input'];
  notification_id: Scalars['UUID']['input'];
};

export type Input_Notifications_Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Input_NumberRange = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type Input_OrganizationUserRoles_Set = {
  organization_id: Scalars['UUID']['input'];
  roles?: InputMaybe<Array<InputMaybe<Permission_Role_Type>>>;
  user_id: Scalars['UUID']['input'];
};

export type Input_Organization_Create = {
  /** About the organization */
  about?: InputMaybe<Scalars['String']['input']>;
  /** Additional services offered by the organization. */
  additional_services?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Organization email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Organization locations */
  locations?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  /** An Input_UploadedFileRef. This file will be added to the organization logo field. */
  logo?: InputMaybe<Input_UploadedFileRef>;
  /** Organization mission statement */
  mission_statement?: InputMaybe<Scalars['String']['input']>;
  /** Unique organization name */
  name: Scalars['String']['input'];
  /** Organization 501c3 */
  nonprofit_501_c_3?: InputMaybe<Scalars['String']['input']>;
  /** Organization phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Primary address */
  primary_address?: InputMaybe<AddressInput>;
  /** Type of organization */
  type: Organization_Type;
  /** Organization website */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_Person_Create = {
  /** Activities willing to participate in */
  activities?: InputMaybe<Array<InputMaybe<Person_Activities>>>;
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  /** Adoption application id */
  adoption_application_id?: InputMaybe<Scalars['String']['input']>;
  approved_adopter?: InputMaybe<Scalars['Boolean']['input']>;
  approved_foster?: InputMaybe<Scalars['Boolean']['input']>;
  approved_volunteer?: InputMaybe<Scalars['Boolean']['input']>;
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Foster application id */
  foster_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State id or driver's license */
  state_id?: InputMaybe<Scalars['String']['input']>;
  /** Surrender application id */
  surrender_application_id?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Person_Tags>>>;
  /** Volunteer application id */
  volunteer_application_id?: InputMaybe<Scalars['String']['input']>;
  volunteer_distance_meters?: InputMaybe<Scalars['Float']['input']>;
};

export type Input_Organization_Person_Delete = {
  organization_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};

export type Input_Organization_Person_Update = {
  add_activities?: InputMaybe<Array<InputMaybe<Person_Activities>>>;
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  add_tags?: InputMaybe<Array<InputMaybe<Person_Tags>>>;
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  /** Adoption application id */
  adoption_application_id?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  delete_activities?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_documents?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_notes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_tags?: InputMaybe<Array<InputMaybe<Person_Tags>>>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Foster application id */
  foster_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  person_id: Scalars['UUID']['input'];
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State id or driver's license */
  state_id?: InputMaybe<Scalars['String']['input']>;
  /** Surrender application id */
  surrender_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Volunteer application id */
  volunteer_application_id?: InputMaybe<Scalars['String']['input']>;
  volunteer_distance_meters?: InputMaybe<Scalars['Float']['input']>;
};

export type Input_Organization_Pet_Delete = {
  /** Organization pet organization id */
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Pet id */
  pet_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Organization_Pet_Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Organization_Pet_SortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export type Input_Organization_Pet_Update = {
  /** Adoption fee for a pet */
  adoption_fee?: InputMaybe<Input_Money>;
  /** Pet's organization internal id */
  internal_id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Input_Pet_Location>;
  /** Does a pet need foster */
  needs_foster?: InputMaybe<Scalars['Boolean']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  /** Pet record updates */
  pet?: InputMaybe<Input_Pet_Update>;
  /** Pet id */
  pet_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Pet's status within the organization */
  status?: InputMaybe<Organization_Pet_Status>;
};

export type Input_Organization_Settings_Clinic_Create = {
  add_vets?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_Clinic_Vet>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_Settings_Clinic_Update = {
  add_vets?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_Clinic_Vet>>>;
  delete_vets?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_Settings_Clinic_Vet = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_Settings_ExternalOrganization_Create = {
  /** Organization email */
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Organization phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Primary address */
  primary_address?: InputMaybe<AddressInput>;
  /** Type of organization */
  type?: InputMaybe<Organization_Type>;
};

export type Input_Organization_Settings_ExternalOrganization_Update = {
  /** Organization email */
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  /** Organization phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Primary address */
  primary_address?: InputMaybe<AddressInput>;
  /** Type of organization */
  type?: InputMaybe<Organization_Type>;
};

export type Input_Organization_Settings_ExternalPerson_Create = {
  /** Activities willing to participate in */
  activities?: InputMaybe<Array<InputMaybe<Person_Activities>>>;
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  /** Adoption application id */
  adoption_application_id?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  delete_documents?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_notes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Foster application id */
  foster_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State id or driver's license */
  state_id?: InputMaybe<Scalars['String']['input']>;
  /** Surrender application id */
  surrender_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Volunteer application id */
  volunteer_application_id?: InputMaybe<Scalars['String']['input']>;
  volunteer_distance_meters?: InputMaybe<Scalars['Float']['input']>;
};

export type Input_Organization_Settings_ExternalPerson_Update = {
  /** Activities willing to participate in */
  activities?: InputMaybe<Array<InputMaybe<Person_Activities>>>;
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  /** Adoption application id */
  adoption_application_id?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  delete_documents?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_notes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Foster application id */
  foster_application_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** State id or driver's license */
  state_id?: InputMaybe<Scalars['String']['input']>;
  /** Surrender application id */
  surrender_application_id?: InputMaybe<Scalars['String']['input']>;
  /** Volunteer application id */
  volunteer_application_id?: InputMaybe<Scalars['String']['input']>;
  volunteer_distance_meters?: InputMaybe<Scalars['Float']['input']>;
};

export type Input_Organization_Settings_Update = {
  add_clinics?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_Clinic_Create>>>;
  add_external_organizations?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_ExternalOrganization_Create>>>;
  add_external_persons?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_ExternalPerson_Create>>>;
  address_style?: InputMaybe<Scalars['String']['input']>;
  adopt_a_pet_password?: InputMaybe<Scalars['String']['input']>;
  adopt_a_pet_shelter_id?: InputMaybe<Scalars['String']['input']>;
  adopt_a_pet_user?: InputMaybe<Scalars['String']['input']>;
  /** iframe code for embedding application */
  adoption_application_code?: InputMaybe<Scalars['String']['input']>;
  adoption_application_key?: InputMaybe<Scalars['String']['input']>;
  adoption_application_schema?: InputMaybe<Scalars['String']['input']>;
  adoption_checklist_schema?: InputMaybe<Scalars['String']['input']>;
  adoption_docs_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  akc_enrollment_id?: InputMaybe<Scalars['String']['input']>;
  akc_upload_start_date?: InputMaybe<Scalars['Instant']['input']>;
  /** Animal control email */
  animal_control_email?: InputMaybe<Scalars['String']['input']>;
  clinics?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_Clinic_Update>>>;
  default_currency?: InputMaybe<Currency>;
  default_vet_clinic?: InputMaybe<DefaultVetClinicInput>;
  delete_clinics?: InputMaybe<Array<Scalars['UUID']['input']>>;
  delete_external_organizations?: InputMaybe<Array<Scalars['UUID']['input']>>;
  delete_external_persons?: InputMaybe<Array<Scalars['UUID']['input']>>;
  econtracts_enabled?: InputMaybe<Scalars['Boolean']['input']>;
  external_organizations?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_ExternalOrganization_Update>>>;
  external_persons?: InputMaybe<Array<InputMaybe<Input_Organization_Settings_ExternalPerson_Update>>>;
  foster_application_code?: InputMaybe<Scalars['String']['input']>;
  foster_application_key?: InputMaybe<Scalars['String']['input']>;
  foster_application_schema?: InputMaybe<Scalars['String']['input']>;
  foster_checklist_schema?: InputMaybe<Scalars['String']['input']>;
  measurement_system?: InputMaybe<Measurement_System>;
  merck_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pet_finder_password?: InputMaybe<Scalars['String']['input']>;
  pet_finder_user?: InputMaybe<Scalars['String']['input']>;
  petlink_shelter_id?: InputMaybe<Scalars['String']['input']>;
  petlink_upload_start_date?: InputMaybe<Scalars['Instant']['input']>;
  phone_country_code?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  stripe_subscription_id?: InputMaybe<Scalars['String']['input']>;
  surrender_application_code?: InputMaybe<Scalars['String']['input']>;
  surrender_application_key?: InputMaybe<Scalars['String']['input']>;
  surrender_application_schema?: InputMaybe<Scalars['String']['input']>;
  surrender_checklist_schema?: InputMaybe<Scalars['String']['input']>;
  volunteer_application_code?: InputMaybe<Scalars['String']['input']>;
  volunteer_application_key?: InputMaybe<Scalars['String']['input']>;
  volunteer_application_schema?: InputMaybe<Scalars['String']['input']>;
  volunteer_checklist_schema?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_Update = {
  /** About the organization */
  about?: InputMaybe<Scalars['String']['input']>;
  /** Additional services the organization provides */
  additional_services?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Organization email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  id: Scalars['UUID']['input'];
  /** Organization locations */
  locations?: InputMaybe<Array<InputMaybe<AddressInput>>>;
  /** An Input_UploadedFileRef. This file will be added to the organization logo field. */
  logo?: InputMaybe<Input_UploadedFileRef>;
  /** Organization mission statement */
  mission_statement?: InputMaybe<Scalars['String']['input']>;
  /** Unique organization name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Organization 501c3 */
  nonprofit_501_c_3?: InputMaybe<Scalars['String']['input']>;
  /** Organization phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Primary address */
  primary_address?: InputMaybe<AddressInput>;
  /** Type of organization */
  type?: InputMaybe<Organization_Type>;
  /** Organization website */
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Organization_User_Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Organization_User_SortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export type Input_OutcomeFilter = {
  date?: InputMaybe<Input_DateRange>;
  to_id?: InputMaybe<Scalars['UUID']['input']>;
  type?: InputMaybe<Array<Pet_Outcome_Type>>;
};

export type Input_PersonFilter = {
  country_subdivision?: InputMaybe<Array<InputMaybe<Country_Subdivision>>>;
  locality?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tag?: InputMaybe<Array<InputMaybe<Person_Tags>>>;
};

export type Input_Person_Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Person_SortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export type Input_PetFilter = {
  adoption_fee?: InputMaybe<Input_MoneyRange>;
  altered?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  breed_cat?: InputMaybe<Array<InputMaybe<CatBreed>>>;
  breed_dog?: InputMaybe<Array<InputMaybe<DogBreed>>>;
  breed_guinea_pig?: InputMaybe<Array<InputMaybe<Pet_Breed_GuineaPig>>>;
  breed_rabbit?: InputMaybe<Array<InputMaybe<Pet_Breed_Rabbit>>>;
  breed_small_animal?: InputMaybe<Array<InputMaybe<Pet_Breed_SmallAnimal>>>;
  color?: InputMaybe<Array<InputMaybe<Pet_Color>>>;
  declawed?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  estimated_birth_date?: InputMaybe<Input_DateRange>;
  gender?: InputMaybe<Array<InputMaybe<Pet_Gender>>>;
  good_with_cats?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  good_with_children?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  good_with_dogs?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  has_bite_history?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  has_special_needs?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  housetrained?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  intake?: InputMaybe<Input_IntakeFilter>;
  microchip_brand?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mixed?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  needs_experienced_adopter?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  organization_pet_status?: InputMaybe<Array<InputMaybe<Organization_Pet_Status>>>;
  outcome?: InputMaybe<Input_OutcomeFilter>;
  species?: InputMaybe<Array<InputMaybe<Pet_Species>>>;
  weight?: InputMaybe<WeightInput>;
  weight_lbs?: InputMaybe<Input_WeightRange>;
};

export type Input_Pet_DeleteImage = {
  /** file id */
  file_id: Scalars['UUID']['input'];
  /** organization id */
  organization_id: Scalars['UUID']['input'];
  /** pet id */
  pet_id: Scalars['UUID']['input'];
};

export type Input_Pet_Diet = {
  /** Brand of pet food */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** Feeding frequency */
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** Special feeding instructions */
  instructions?: InputMaybe<Scalars['String']['input']>;
  /** Amount of food to feed */
  quantity?: InputMaybe<Scalars['String']['input']>;
  /** Type of pet food */
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_Event_Adoption = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
  /** Person the pet was adopted by */
  to: Scalars['UUID']['input'];
};

export type Input_Pet_Event_Delete = {
  /** Id of pet event to delete */
  id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_Event_DiedInCare = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
};

export type Input_Pet_Event_Escaped_Lost = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  /** Last known location of the pet */
  location?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
};

export type Input_Pet_Event_Euthanized = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
  type: Pet_Event_Euthanized_Type;
};

export type Input_Pet_Event_Intake = {
  /** Adoption fee for a pet */
  adoption_fee?: InputMaybe<Input_Money>;
  /** Condition on intake */
  condition: Pet_Event_Intake_Condition;
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  from_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Identifier identifying the pet for the organization */
  internal_id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Input_Pet_Location>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  /** Pet data */
  pet_details: Input_Pet_Event_Intake_PetDetails;
  /** Pet's status within the organization */
  status?: InputMaybe<Organization_Pet_Status>;
  /** Pet event intake type */
  type: Pet_Event_Intake_Type;
};

export type Input_Pet_Event_Intake_PetDetails = {
  altered?: InputMaybe<Scalars['Boolean']['input']>;
  breed_cat?: InputMaybe<Array<InputMaybe<CatBreed>>>;
  breed_dog?: InputMaybe<Array<InputMaybe<DogBreed>>>;
  breed_guinea_pig?: InputMaybe<Array<InputMaybe<Pet_Breed_GuineaPig>>>;
  breed_rabbit?: InputMaybe<Array<InputMaybe<Pet_Breed_Rabbit>>>;
  /** Note: maximum of 1 selection */
  breed_small_animal?: InputMaybe<Array<InputMaybe<Pet_Breed_SmallAnimal>>>;
  color?: InputMaybe<Array<InputMaybe<Pet_Color>>>;
  declawed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Description of Pet */
  description?: InputMaybe<Scalars['String']['input']>;
  diet?: InputMaybe<Input_Pet_Diet>;
  distinguishing_marks?: InputMaybe<Scalars['String']['input']>;
  /** A list of Input_UploadedFileRefs. These files will be added to the pet documents field. */
  documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  estimated_birth_date?: InputMaybe<Scalars['Instant']['input']>;
  father_id?: InputMaybe<Scalars['UUID']['input']>;
  gender?: InputMaybe<Pet_Gender>;
  good_with_cats?: InputMaybe<Scalars['Boolean']['input']>;
  good_with_children?: InputMaybe<Scalars['Boolean']['input']>;
  good_with_dogs?: InputMaybe<Scalars['Boolean']['input']>;
  has_bite_history?: InputMaybe<Scalars['Boolean']['input']>;
  housetrained?: InputMaybe<Scalars['Boolean']['input']>;
  /** A list of Input_UploadedFileRefs. These files will be added to the pet images field. */
  images?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  license?: InputMaybe<Scalars['String']['input']>;
  microchip?: InputMaybe<Input_Pet_Microchip>;
  /** Is this pet mixed? Optional. */
  mixed?: InputMaybe<Scalars['Boolean']['input']>;
  mother_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs_experienced_adopter?: InputMaybe<Scalars['Boolean']['input']>;
  /** Note about the pet – added to pet's notes. */
  note?: InputMaybe<Scalars['String']['input']>;
  rabies_tag?: InputMaybe<Scalars['String']['input']>;
  sibling_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Description of Pet's special needs */
  special_needs?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Pet_Species>;
  weight?: InputMaybe<WeightInput>;
  weight_lbs?: InputMaybe<Scalars['Float']['input']>;
  youtube_video_url?: InputMaybe<Scalars['String']['input']>;
};

/** All fields, except id, are optional. type, condition, and date are not unsettable (i.e., passing explicit null is invalid) */
export type Input_Pet_Event_Intake_Update = {
  /** Condition on intake */
  condition?: InputMaybe<Pet_Event_Intake_Condition>;
  /** Date/time at which the event occurred or was initiated */
  date?: InputMaybe<Scalars['Instant']['input']>;
  from_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Pet event id */
  id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
  /** Pet event intake type */
  type?: InputMaybe<Pet_Event_Intake_Type>;
};

export type Input_Pet_Event_ReIntake = {
  /** Condition on intake */
  condition: Pet_Event_Intake_Condition;
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  from_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  /** Pet id */
  pet_id: Scalars['UUID']['input'];
  /** Pet event intake type */
  type: Pet_Event_Intake_Type;
};

export type Input_Pet_Event_Return = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
  /** Person the pet was returned to */
  to_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_Event_Return_To_Field = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  /** Location where the pet was returned to field */
  location?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
};

export type Input_Pet_Event_Return_Update = {
  /** Pet event id */
  id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  /** Person the pet was returned to */
  to_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_Event_Transfer = {
  /** Date/time at which the event occurred or was initiated */
  date: Scalars['Instant']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  /** Organization id */
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
  /** Organization the pet was transferred to */
  to?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_Location = {
  boarding?: InputMaybe<Scalars['String']['input']>;
  foster_id?: InputMaybe<Scalars['UUID']['input']>;
  shelter_unit?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_MedicalEvent_Create = {
  /** A list of Input_UploadedFileRefs. These files will be added to the pet documents field. */
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  /** New notes to append to the medical event entity; will be attributed to the authenticated user. */
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Clinic */
  clinic?: InputMaybe<Scalars['String']['input']>;
  /** Partner id of the clinic that performed the medical work */
  clinic_partner_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Total cost of event */
  cost?: InputMaybe<Input_Money>;
  /** Date of event */
  date?: InputMaybe<Scalars['Instant']['input']>;
  organization_id: Scalars['UUID']['input'];
  /** Organization Pet Id */
  pet_id: Scalars['UUID']['input'];
  /** Reason for the medical event */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Veterinarian */
  vet?: InputMaybe<Scalars['String']['input']>;
  /** Person id for the vet that performed the medical work */
  vet_person_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_MedicalEvent_Delete = {
  /** Medical event id */
  medical_event_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record = {
  /** Medical event id */
  medical_event_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_Delete = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_Diagnosis_LineItem_DiagnosisGeneral_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Biopsy_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_BloodWork_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Cytology_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_LabOther_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Radiography_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Serology_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Test4dx_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Urinalysis_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_Line_Item_Delete = {
  /** Medical event record line item id */
  medical_event_record_line_item_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_MedicationTreatment_LineItem_Medication_Create = {
  dose?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['Instant']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  start_date?: InputMaybe<Scalars['Instant']['input']>;
};

export type Input_Pet_MedicalEvent_Record_Surgery_LineItem_Dental_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_Surgery_LineItem_SpayNeuter_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_Surgery_LineItem_SurgeryOther_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Exam_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FecalResult_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  positive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FivFelvTest_Create = {
  felv_positive?: InputMaybe<Scalars['Boolean']['input']>;
  fiv_positive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FleaTick_Create = {
  flea_positive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  tick_positive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Heartworm_Create = {
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  positive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Vaccine_Create = {
  expiration_date?: InputMaybe<Scalars['Instant']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  /** Medical event record id */
  medical_event_record_id: Scalars['UUID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  serial_number?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_MedicalEvent_Reminder_Create = {
  medical_event_id: Scalars['UUID']['input'];
  /** Message */
  message?: InputMaybe<Scalars['String']['input']>;
  notification_preferences?: InputMaybe<Array<InputMaybe<Notification_Preference>>>;
  organization_id: Scalars['UUID']['input'];
  /** Person ids who get reminded */
  recipient_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Schedules */
  schedules: Array<InputMaybe<Input_Schedule_Create>>;
  /** Title */
  title: Scalars['String']['input'];
};

export type Input_Pet_MedicalEvent_Reminder_Delete = {
  /** Organization id */
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Reminder id */
  reminder_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_MedicalEvent_Reminder_Update = {
  add_notification_preferences?: InputMaybe<Array<InputMaybe<Notification_Preference>>>;
  /** Person ids who get reminded */
  add_recipient_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Add schedules */
  add_schedules?: InputMaybe<Array<InputMaybe<Input_Schedule_Create>>>;
  delete_notification_preferences?: InputMaybe<Array<InputMaybe<Notification_Preference>>>;
  /** Recipients to delete */
  delete_recipient_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_schedule_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Message */
  message?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  reminder_id: Scalars['UUID']['input'];
  /** Title */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_MedicalEvent_Update = {
  /** A list of Input_UploadedFileRefs. These files will be added to the medical event documents field. */
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  /** New notes to append to the pet entity; will be attributed to the authenticated user. */
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Clinic */
  clinic?: InputMaybe<Scalars['String']['input']>;
  /** Partner id of the clinic that performed the medical work */
  clinic_partner_id?: InputMaybe<Scalars['UUID']['input']>;
  /** Total cost of event */
  cost?: InputMaybe<Input_Money>;
  /** Date of event */
  date?: InputMaybe<Scalars['Instant']['input']>;
  /** List of document file ids to delete */
  delete_documents?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** List of note ids to delete */
  delete_notes?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Medical event id */
  medical_event_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
  /** Reason for the medical event */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Veterinarian */
  vet?: InputMaybe<Scalars['String']['input']>;
  /** Person id for the vet that performed the medical work */
  vet_person_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type Input_Pet_Microchip = {
  /** Microchip brand */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** id */
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Pet_Update = {
  /** A list of Input_UploadedFileRefs. These files will be added to the pet documents field. */
  add_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  /** A list of Input_UploadedFileRefs. These files will be added to the pet images field. */
  add_images?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  /** New notes to append to the pet entity; will be attributed to the authenticated user. */
  add_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  altered?: InputMaybe<Scalars['Boolean']['input']>;
  breed_cat?: InputMaybe<Array<InputMaybe<CatBreed>>>;
  breed_dog?: InputMaybe<Array<InputMaybe<DogBreed>>>;
  breed_guinea_pig?: InputMaybe<Array<InputMaybe<Pet_Breed_GuineaPig>>>;
  breed_rabbit?: InputMaybe<Array<InputMaybe<Pet_Breed_Rabbit>>>;
  /** Note: Maximum of 1 Selection */
  breed_small_animal?: InputMaybe<Array<InputMaybe<Pet_Breed_SmallAnimal>>>;
  color?: InputMaybe<Array<InputMaybe<Pet_Color>>>;
  create_name_timeseries_events?: InputMaybe<Array<InputMaybe<PetNameTimeseriesEventInput>>>;
  declawed?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of document file ids to delete */
  delete_documents?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** List of image file ids to delete */
  delete_images?: InputMaybe<Array<Scalars['UUID']['input']>>;
  delete_name_timeseries_events?: InputMaybe<Array<InputMaybe<PetNameTimeseriesEventInput>>>;
  /** List of note ids to delete */
  delete_notes?: InputMaybe<Array<Scalars['UUID']['input']>>;
  /** Description of Pet */
  description?: InputMaybe<Scalars['String']['input']>;
  diet?: InputMaybe<Input_Pet_Diet>;
  distinguishing_marks?: InputMaybe<Scalars['String']['input']>;
  estimated_birth_date?: InputMaybe<Scalars['Instant']['input']>;
  father_id?: InputMaybe<Scalars['UUID']['input']>;
  gender?: InputMaybe<Pet_Gender>;
  good_with_cats?: InputMaybe<Scalars['Boolean']['input']>;
  good_with_children?: InputMaybe<Scalars['Boolean']['input']>;
  good_with_dogs?: InputMaybe<Scalars['Boolean']['input']>;
  has_bite_history?: InputMaybe<Scalars['Boolean']['input']>;
  housetrained?: InputMaybe<Scalars['Boolean']['input']>;
  /** A list of Input_UploadedFileRefs. These files will be added to the pet images field. */
  images?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  license?: InputMaybe<Scalars['String']['input']>;
  microchip?: InputMaybe<Input_Pet_Microchip>;
  /** Is the pet mixed? Optional */
  mixed?: InputMaybe<Scalars['Boolean']['input']>;
  mother_id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  needs_experienced_adopter?: InputMaybe<Scalars['Boolean']['input']>;
  rabies_tag?: InputMaybe<Scalars['String']['input']>;
  sibling_ids?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  /** Description of Pet's special needs */
  special_needs?: InputMaybe<Scalars['String']['input']>;
  species?: InputMaybe<Pet_Species>;
  weight?: InputMaybe<WeightInput>;
  weight_lbs?: InputMaybe<Scalars['Float']['input']>;
  youtube_video_url?: InputMaybe<Scalars['String']['input']>;
};

export type Input_Schedule_Create = {
  date: Scalars['Instant']['input'];
  end_date?: InputMaybe<Scalars['Instant']['input']>;
  recurrence_pattern?: InputMaybe<Scalars['CronPattern']['input']>;
};

export type Input_UploadedFileRef = {
  /** File description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The file id (e.g., from a FileUploadDescriptor) */
  id: Scalars['UUID']['input'];
  /** File name, including extension */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Tags describing the file */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Input_User_Settings = {
  accepted_terms?: InputMaybe<Scalars['Boolean']['input']>;
  /** Arbitrary string representing a date format. e.g. 'MM/dd/yyyy' */
  date_format?: InputMaybe<Scalars['String']['input']>;
  /** Does the user want to receive email notifications */
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  /** Does the user want to receive in-app notifications */
  in_app_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  referred_by?: InputMaybe<Scalars['String']['input']>;
  /** Does the user want to receive SMS notifications */
  text_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  /** Arbitrary string representing a time format. e.g. 'hh:mm:ss' */
  time_format?: InputMaybe<Scalars['String']['input']>;
  /** Arbitrary string representing a timezone. ICANN tz database standard recommended (e.g 'america/chicago') */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type Input_WeightRange = {
  include_missing_values?: InputMaybe<Scalars['Boolean']['input']>;
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type IntakeFromEntity = ExternalOrganization | Organization | Person;

export type Job = {
  __typename?: 'Job';
  id: Scalars['UUID']['output'];
  result?: Maybe<JobResult>;
  status: JobStatus;
};

export type JobResult = ReportDownload;

export enum JobStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export enum LengthOfStayType {
  CareBasedByDate = 'CARE_BASED_BY_DATE',
  CurrentInCare = 'CURRENT_IN_CARE',
  IntakeBased = 'INTAKE_BASED',
  OutcomeBased = 'OUTCOME_BASED'
}

export enum Measurement_System {
  Imperial = 'IMPERIAL',
  Metric = 'METRIC'
}

export type MedicalDocument = Document & {
  __typename?: 'MedicalDocument';
  /** Added date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** File description */
  description?: Maybe<Scalars['String']['output']>;
  /** File id */
  id?: Maybe<Scalars['String']['output']>;
  medical_event: Pet_MedicalEvent;
  /** Original file URL */
  original_url?: Maybe<Scalars['String']['output']>;
  /** descriptive tags for the file */
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** File URL */
  url?: Maybe<Scalars['String']['output']>;
};

export type MedicalEvent = {
  __typename?: 'MedicalEvent';
  date?: Maybe<Scalars['Instant']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  line_items: MedicalEventLineItemsConnection;
  notes?: Maybe<Array<Maybe<Note>>>;
};

export type MedicalEventLineItem = DiagnosisAggression | DiagnosisAllergy | DiagnosisAnxiety | DiagnosisCoccidia | DiagnosisDemodex | DiagnosisDentalDisease | DiagnosisDermatophytosisRingworm | DiagnosisDiarrheaCauseUnknown | DiagnosisEarMites | DiagnosisFelineImmunodeficiencyVirusFiv | DiagnosisFelineInfectiousPeritonitisFip | DiagnosisFelineLeukemiaVirusFelv | DiagnosisFelineLowerUrinaryTractDiseaseFlutd | DiagnosisGiardia | DiagnosisHeartwormInfection | DiagnosisOtitisEarInfection | DiagnosisPanleukopeniaVirusFeline | DiagnosisParvovirusCanine | DiagnosisResourceGuarding | DiagnosisUpperRespiratoryTractInfectionUri | DiagnosisUrinaryTractInfectionUti | DiagnosisUrolithiasisBladderStones;

export type MedicalEventLineItemOperationInput = {
  create?: InputMaybe<CreateMedicalEventLineItemInput>;
  delete?: InputMaybe<DeleteMedicalEventLineItemInput>;
  update?: InputMaybe<UpdateMedicalEventLineItemInput>;
};

export type MedicalEventLineItemsConnection = {
  __typename?: 'MedicalEventLineItemsConnection';
  entities?: Maybe<Array<MedicalEventLineItem>>;
};

export type MedicalEventsConnection = {
  __typename?: 'MedicalEventsConnection';
  entities?: Maybe<Array<MedicalEvent>>;
};

export type MetricUserOrganization = {
  __typename?: 'MetricUserOrganization';
  organization?: Maybe<Organization>;
  roles?: Maybe<Array<Maybe<Permission_Role_Type>>>;
};

export type MetricsOrganization = {
  __typename?: 'MetricsOrganization';
  adoptions?: Maybe<Array<Maybe<Pet_Event_Adoption>>>;
  organization?: Maybe<Organization>;
  owner?: Maybe<OrganizationUser>;
  users?: Maybe<Array<Maybe<OrganizationUser>>>;
};


export type MetricsOrganizationAdoptionsArgs = {
  end_date: Scalars['Instant']['input'];
  start_date: Scalars['Instant']['input'];
};

export type MetricsUser = {
  __typename?: 'MetricsUser';
  /** List of user's organizations */
  organizations?: Maybe<Array<Maybe<MetricUserOrganization>>>;
  /** User details */
  user?: Maybe<User>;
};

/** Monetary amount */
export type Money = {
  __typename?: 'Money';
  amount: Scalars['Int']['output'];
  currency: Currency;
};

export type MoneyInput = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  currency?: InputMaybe<Currency>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add adoption doc to org */
  add_adoption_doc: File;
  /** Add images to a pet. Images are added to the end of the set of images. Returns the updated list of images. */
  add_pet_images?: Maybe<Array<File>>;
  /** Remove a partner from option lists, but can be restored later and will not disrupt historical records */
  archive_partner?: Maybe<Payload_Deleted_Entity>;
  /** Delete the partner-specific information for a person and remove the relationship */
  archive_partner_person?: Maybe<PartnerPersonDeleted>;
  /** Soft-delete a pet application. Does not affect airtable record */
  archive_pet_application?: Maybe<Payload_Application_Archived>;
  createMedicalEvent?: Maybe<CreateMedicalEventResult>;
  /** Create a text template */
  createTextTemplate: CreateTextTemplatePayload;
  /** Create a custom report. Stores JSON representing a pet report by name. */
  create_custom_report?: Maybe<CustomReport>;
  create_econtract: CreateEcontractResult;
  create_econtract_template: EcontractTemplate;
  /** Returns a FileUploadDescriptor containing data necessary to upload a file */
  create_file_upload?: Maybe<FileUploadDescriptor>;
  /** Create a reminder for a medical event */
  create_medical_event_reminder?: Maybe<Reminder_MedicalEvent>;
  /** Creates a new organization and makes the authenticated user an admin */
  create_organization?: Maybe<Organization>;
  /** Create a new organization person */
  create_organization_person?: Maybe<Person>;
  /** Create a partner for an organization */
  create_partner?: Maybe<Partner>;
  /** Associate a person, created inline, to a partner with some partner-specific data */
  create_partner_inline_person?: Maybe<PartnerPerson>;
  /** Associate a person from the organization person list to a partner with some partner-specific data */
  create_partner_person?: Maybe<PartnerPerson>;
  /** Creates a user for the current auth */
  create_update_user_for_auth?: Maybe<User>;
  deleteMedicalEvent?: Maybe<DeleteMedicalEventResult>;
  /** Delete a text template */
  deleteTextTemplate: DeleteTextTemplatePayload;
  /** Delete adoption doc from org */
  delete_adoption_doc: DeleteAdoptionDocResult;
  /** Create a custom report. Stores JSON representing a pet report by name. */
  delete_custom_report?: Maybe<Payload_Deleted_Entity>;
  delete_econtract_template: Scalars['Boolean']['output'];
  /** Delete a pet medical event reminder, by id. */
  delete_medical_event_reminder?: Maybe<Payload_Deleted_Entity>;
  /** Delete note */
  delete_note?: Maybe<Payload_Deleted_Entity>;
  delete_organization_person?: Maybe<Payload_Deleted_Entity>;
  /** delete an organization pet and the underlying pet record */
  delete_organization_pet?: Maybe<Payload_Organization_Pet_Delete>;
  /** Delete a pet image */
  delete_pet_image?: Maybe<Payload_File_Delete>;
  /** Delete images from a pet. Returns the updated list of images. */
  delete_pet_images?: Maybe<Array<File>>;
  generate_adoption_report: GeneratedReportResult;
  generate_animal_population_report: GeneratedReportResult;
  generate_department_of_agriculture_report: GeneratedReportResult;
  generate_foster_home_report: GeneratedReportResult;
  generate_length_of_stay_report: GeneratedReportResult;
  generate_medical_cost_report: GeneratedReportResult;
  generate_microchip_report: GeneratedReportResult;
  generate_owner_surrender_report: GeneratedReportResult;
  generate_pending_contracts_report: GeneratedReportResult;
  generate_pet_diet_and_feeding_report: GeneratedReportResult;
  generate_pet_intake_report: GeneratedReportResult;
  generate_pet_location_history_report: GeneratedReportResult;
  generate_pet_outcome_report: GeneratedReportResult;
  generate_pet_summary_counts: GeneratedReportResult;
  generate_pets_by_status_report: GeneratedReportResult;
  generate_sac_report: GeneratedReportResult;
  generate_transfer_in_report: GeneratedReportResult;
  generate_transfer_out_report: GeneratedReportResult;
  generate_upcoming_medical_reminders_report: GeneratedReportResult;
  invite_user: Payload_InviteUser;
  payengine_create_merchant?: Maybe<PayengineMerchant>;
  payengine_submit_credit_card_payment?: Maybe<PayengineSubmitPaymentResult>;
  payengine_submit_offline_payment?: Maybe<PayengineSubmitOfflinePaymentResult>;
  /** Adopts a pet */
  pet_event_adoption?: Maybe<Pet_Event_Adoption>;
  pet_event_delete?: Maybe<Payload_Deleted_Entity>;
  /** Pet has died in care */
  pet_event_died_in_care?: Maybe<Pet_Event_DiedInCare>;
  /** Pet has escaped or is lost */
  pet_event_escaped_lost?: Maybe<Pet_Event_Escaped_Lost>;
  /** Pet has been euthanized */
  pet_event_euthanized?: Maybe<Pet_Event_Euthanized>;
  /** Adds a new pet */
  pet_event_intake?: Maybe<Organization_Pet>;
  /** Update an intake event */
  pet_event_intake_update?: Maybe<Pet_Event_Intake>;
  /** Re-intake an existing pet. */
  pet_event_re_intake?: Maybe<Pet_Event_Intake>;
  /** Return a pet to owner */
  pet_event_return?: Maybe<Pet_Event_Return>;
  /** Return a pet to the field (for TNR programs) */
  pet_event_return_to_field?: Maybe<Pet_Event_Return_To_Field>;
  /** Update return event */
  pet_event_return_update?: Maybe<Pet_Event_Return>;
  /** Transfers a pet to a different organization */
  pet_event_transfer?: Maybe<Pet_Event_Transfer>;
  /** Add new Pet medical event */
  pet_medical_event_create?: Maybe<Pet_MedicalEvent>;
  /** Delete an existing pet medical event */
  pet_medical_event_delete?: Maybe<Payload_Pet_Medical_Event_Delete>;
  /** Delete an existing pet medical event record */
  pet_medical_event_record_delete?: Maybe<Payload_Pet_MedicalEvent_Record_Delete>;
  /** Create Diagnosis record */
  pet_medical_event_record_diagnosis_create?: Maybe<Pet_MedicalEvent_Record>;
  pet_medical_event_record_diagnosis_line_item_diagnosis_general_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  /** Create Lab/misc record */
  pet_medical_event_record_lab_misc_create?: Maybe<Pet_MedicalEvent_Record>;
  pet_medical_event_record_lab_misc_line_item_biopsy_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_blood_work_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_cytology_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_lab_other_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_radiography_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_serology_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_test_4dx_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_lab_misc_line_item_urinalysis_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  /** Delete an existing pet medical event record */
  pet_medical_event_record_line_item_delete?: Maybe<Payload_Pet_MedicalEvent_Record_Line_Item_Delete>;
  /** Create Medication/Treatment record */
  pet_medical_event_record_medication_treatment_create?: Maybe<Pet_MedicalEvent_Record>;
  pet_medical_event_record_medication_treatment_line_item_medication_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  /** Create Surgery record */
  pet_medical_event_record_surgery_create?: Maybe<Pet_MedicalEvent_Record>;
  pet_medical_event_record_surgery_line_item_dental_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_surgery_line_item_spay_neuter_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_surgery_line_item_surgery_other_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  /** Create Wellness/Vaccines record */
  pet_medical_event_record_wellness_vaccines_create?: Maybe<Pet_MedicalEvent_Record>;
  pet_medical_event_record_wellness_vaccines_line_item_exam_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_wellness_vaccines_line_item_fecal_result_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_wellness_vaccines_line_item_fiv_felv_test_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_wellness_vaccines_line_item_flea_tick_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_wellness_vaccines_line_item_heartworm_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  pet_medical_event_record_wellness_vaccines_line_item_vaccine_create?: Maybe<Pet_MedicalEvent_Record_LineItem>;
  /** Update an existing pet medical event */
  pet_medical_event_update?: Maybe<Pet_MedicalEvent>;
  /** Set a user's roles in the context of an organization */
  set_organization_user_roles?: Maybe<Array<Maybe<Permission>>>;
  sign_econtract: Econtract;
  /** Restore a soft-deleted pet application. */
  unarchive_pet_application?: Maybe<Payload_Application_Unarchived>;
  updateMedicalEvent?: Maybe<UpdateMedicalEventResult>;
  /** Update a text template */
  updateTextTemplate: UpdateTextTemplatePayload;
  /** Update a custom report. Stores JSON representing a pet report by name. */
  update_custom_report?: Maybe<CustomReport>;
  update_econtract_template: EcontractTemplate;
  /** Update a reminder for a medical event */
  update_medical_event_reminder?: Maybe<Reminder_MedicalEvent>;
  /** Update note */
  update_note?: Maybe<Note>;
  /** Update a notification */
  update_notification?: Maybe<Notification>;
  /** Update an organization */
  update_organization?: Maybe<Organization>;
  /** Update an organization person */
  update_organization_person?: Maybe<Person>;
  /** Update an organization pet */
  update_organization_pet?: Maybe<Organization_Pet>;
  /** update an organization's settings */
  update_organization_settings?: Maybe<Organization_Settings>;
  /** Create a partner for an organization */
  update_partner?: Maybe<Partner>;
  /** Update the partner-specific data for an associated person */
  update_partner_person?: Maybe<PartnerPerson>;
  update_pet_application?: Maybe<Payload_Application_Updated>;
  /** Update images for a pet. Returns the updated list of images. */
  update_pet_images?: Maybe<Array<File>>;
  /** Creates/updates a user's profile information */
  update_user_profile?: Maybe<Person>;
  update_user_settings?: Maybe<User_Settings>;
};


export type MutationAdd_Adoption_DocArgs = {
  input: AddAdoptionDocInput;
};


export type MutationAdd_Pet_ImagesArgs = {
  input?: InputMaybe<AddPetImagesInput>;
};


export type MutationArchive_PartnerArgs = {
  input?: InputMaybe<PartnerArchiveInput>;
};


export type MutationArchive_Partner_PersonArgs = {
  input?: InputMaybe<PartnerPersonDeleteInput>;
};


export type MutationArchive_Pet_ApplicationArgs = {
  input: ArchivePetApplicationInput;
};


export type MutationCreateMedicalEventArgs = {
  input?: InputMaybe<CreateMedicalEventInput>;
};


export type MutationCreateTextTemplateArgs = {
  input: CreateTextTemplateInput;
};


export type MutationCreate_Custom_ReportArgs = {
  input: Input_CustomReport_Create;
};


export type MutationCreate_EcontractArgs = {
  input: CreateEcontractInput;
};


export type MutationCreate_Econtract_TemplateArgs = {
  input: CreateEcontractTemplateInput;
};


export type MutationCreate_File_UploadArgs = {
  input?: InputMaybe<CreateFileUploadInput>;
};


export type MutationCreate_Medical_Event_ReminderArgs = {
  input?: InputMaybe<Input_Pet_MedicalEvent_Reminder_Create>;
};


export type MutationCreate_OrganizationArgs = {
  input: Input_Organization_Create;
};


export type MutationCreate_Organization_PersonArgs = {
  input?: InputMaybe<Input_Organization_Person_Create>;
};


export type MutationCreate_PartnerArgs = {
  input?: InputMaybe<PartnerCreateInput>;
};


export type MutationCreate_Partner_Inline_PersonArgs = {
  input: PartnerInlinePersonCreateInput;
};


export type MutationCreate_Partner_PersonArgs = {
  input?: InputMaybe<PartnerPersonCreateInput>;
};


export type MutationCreate_Update_User_For_AuthArgs = {
  invite_token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteMedicalEventArgs = {
  input?: InputMaybe<DeleteMedicalEventInput>;
};


export type MutationDeleteTextTemplateArgs = {
  input: DeleteTextTemplateInput;
};


export type MutationDelete_Adoption_DocArgs = {
  input: DeleteAdoptionDocInput;
};


export type MutationDelete_Custom_ReportArgs = {
  input?: InputMaybe<Input_CustomReport_Delete>;
};


export type MutationDelete_Econtract_TemplateArgs = {
  input: DeleteEcontractTemplateInput;
};


export type MutationDelete_Medical_Event_ReminderArgs = {
  input?: InputMaybe<Input_Pet_MedicalEvent_Reminder_Delete>;
};


export type MutationDelete_NoteArgs = {
  input?: InputMaybe<Input_Note_Delete>;
};


export type MutationDelete_Organization_PersonArgs = {
  input?: InputMaybe<Input_Organization_Person_Delete>;
};


export type MutationDelete_Organization_PetArgs = {
  input: Input_Organization_Pet_Delete;
};


export type MutationDelete_Pet_ImageArgs = {
  input: Input_Pet_DeleteImage;
};


export type MutationDelete_Pet_ImagesArgs = {
  input?: InputMaybe<DeletePetImagesInput>;
};


export type MutationGenerate_Adoption_ReportArgs = {
  input: GenerateAdoptionReportInput;
};


export type MutationGenerate_Animal_Population_ReportArgs = {
  input: GenerateAnimalPopulationReportInput;
};


export type MutationGenerate_Department_Of_Agriculture_ReportArgs = {
  input: GenerateDepartmentOfAgricultureReportInput;
};


export type MutationGenerate_Foster_Home_ReportArgs = {
  input: GenerateFosterHomeReportInput;
};


export type MutationGenerate_Length_Of_Stay_ReportArgs = {
  input: GenerateLengthOfStayReportInput;
};


export type MutationGenerate_Medical_Cost_ReportArgs = {
  input: GenerateMedicalCostReportInput;
};


export type MutationGenerate_Microchip_ReportArgs = {
  input: GenerateMicrochipReportInput;
};


export type MutationGenerate_Owner_Surrender_ReportArgs = {
  input: GenerateOwnerSurrenderReportInput;
};


export type MutationGenerate_Pending_Contracts_ReportArgs = {
  input: GeneratePendingContractsReportInput;
};


export type MutationGenerate_Pet_Diet_And_Feeding_ReportArgs = {
  input: GeneratePetDietAndFeedingReportInput;
};


export type MutationGenerate_Pet_Intake_ReportArgs = {
  input: GeneratePetIntakeReportInput;
};


export type MutationGenerate_Pet_Location_History_ReportArgs = {
  input: GeneratePetLocationHistoryReportInput;
};


export type MutationGenerate_Pet_Outcome_ReportArgs = {
  input: GeneratePetOutcomeReportInput;
};


export type MutationGenerate_Pet_Summary_CountsArgs = {
  input: GeneratePetSummaryCountsInput;
};


export type MutationGenerate_Pets_By_Status_ReportArgs = {
  input: GeneratePetsByStatusReportInput;
};


export type MutationGenerate_Sac_ReportArgs = {
  input: GenerateSacReportInput;
};


export type MutationGenerate_Transfer_In_ReportArgs = {
  input: GenerateTransferInReportInput;
};


export type MutationGenerate_Transfer_Out_ReportArgs = {
  input: GenerateTransferOutReportInput;
};


export type MutationGenerate_Upcoming_Medical_Reminders_ReportArgs = {
  input: GenerateUpcomingMedicalRemindersReportInput;
};


export type MutationInvite_UserArgs = {
  input?: InputMaybe<Input_InviteUser>;
};


export type MutationPayengine_Create_MerchantArgs = {
  input: PayengineCreateMerchantInput;
};


export type MutationPayengine_Submit_Credit_Card_PaymentArgs = {
  input: PayengineSubmitPaymentInput;
};


export type MutationPayengine_Submit_Offline_PaymentArgs = {
  input: PayengineSubmitOfflinePaymentInput;
};


export type MutationPet_Event_AdoptionArgs = {
  input: Input_Pet_Event_Adoption;
};


export type MutationPet_Event_DeleteArgs = {
  input: Input_Pet_Event_Delete;
};


export type MutationPet_Event_Died_In_CareArgs = {
  input: Input_Pet_Event_DiedInCare;
};


export type MutationPet_Event_Escaped_LostArgs = {
  input: Input_Pet_Event_Escaped_Lost;
};


export type MutationPet_Event_EuthanizedArgs = {
  input: Input_Pet_Event_Euthanized;
};


export type MutationPet_Event_IntakeArgs = {
  input: Input_Pet_Event_Intake;
};


export type MutationPet_Event_Intake_UpdateArgs = {
  input: Input_Pet_Event_Intake_Update;
};


export type MutationPet_Event_Re_IntakeArgs = {
  input: Input_Pet_Event_ReIntake;
};


export type MutationPet_Event_ReturnArgs = {
  input: Input_Pet_Event_Return;
};


export type MutationPet_Event_Return_To_FieldArgs = {
  input: Input_Pet_Event_Return_To_Field;
};


export type MutationPet_Event_Return_UpdateArgs = {
  input: Input_Pet_Event_Return_Update;
};


export type MutationPet_Event_TransferArgs = {
  input: Input_Pet_Event_Transfer;
};


export type MutationPet_Medical_Event_CreateArgs = {
  input: Input_Pet_MedicalEvent_Create;
};


export type MutationPet_Medical_Event_DeleteArgs = {
  input: Input_Pet_MedicalEvent_Delete;
};


export type MutationPet_Medical_Event_Record_DeleteArgs = {
  input: Input_Pet_MedicalEvent_Record_Delete;
};


export type MutationPet_Medical_Event_Record_Diagnosis_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record;
};


export type MutationPet_Medical_Event_Record_Diagnosis_Line_Item_Diagnosis_General_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_Diagnosis_LineItem_DiagnosisGeneral_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Biopsy_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Biopsy_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Blood_Work_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_BloodWork_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Cytology_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Cytology_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Lab_Other_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_LabOther_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Radiography_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Radiography_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Serology_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Serology_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Test_4dx_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Test4dx_Create;
};


export type MutationPet_Medical_Event_Record_Lab_Misc_Line_Item_Urinalysis_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_LabMisc_LineItem_Urinalysis_Create;
};


export type MutationPet_Medical_Event_Record_Line_Item_DeleteArgs = {
  input: Input_Pet_MedicalEvent_Record_Line_Item_Delete;
};


export type MutationPet_Medical_Event_Record_Medication_Treatment_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record;
};


export type MutationPet_Medical_Event_Record_Medication_Treatment_Line_Item_Medication_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_MedicationTreatment_LineItem_Medication_Create;
};


export type MutationPet_Medical_Event_Record_Surgery_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record;
};


export type MutationPet_Medical_Event_Record_Surgery_Line_Item_Dental_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_Surgery_LineItem_Dental_Create;
};


export type MutationPet_Medical_Event_Record_Surgery_Line_Item_Spay_Neuter_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_Surgery_LineItem_SpayNeuter_Create;
};


export type MutationPet_Medical_Event_Record_Surgery_Line_Item_Surgery_Other_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_Surgery_LineItem_SurgeryOther_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Exam_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Exam_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Fecal_Result_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FecalResult_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Fiv_Felv_Test_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FivFelvTest_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Flea_Tick_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FleaTick_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Heartworm_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Heartworm_Create;
};


export type MutationPet_Medical_Event_Record_Wellness_Vaccines_Line_Item_Vaccine_CreateArgs = {
  input: Input_Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Vaccine_Create;
};


export type MutationPet_Medical_Event_UpdateArgs = {
  input: Input_Pet_MedicalEvent_Update;
};


export type MutationSet_Organization_User_RolesArgs = {
  input?: InputMaybe<Input_OrganizationUserRoles_Set>;
};


export type MutationSign_EcontractArgs = {
  input?: InputMaybe<SignEcontractInput>;
};


export type MutationUnarchive_Pet_ApplicationArgs = {
  input: UnarchivePetApplicationInput;
};


export type MutationUpdateMedicalEventArgs = {
  input?: InputMaybe<UpdateMedicalEventInput>;
};


export type MutationUpdateTextTemplateArgs = {
  input: UpdateTextTemplateInput;
};


export type MutationUpdate_Custom_ReportArgs = {
  input: Input_CustomReport_Update;
};


export type MutationUpdate_Econtract_TemplateArgs = {
  input: UpdateEcontractTemplateInput;
};


export type MutationUpdate_Medical_Event_ReminderArgs = {
  input?: InputMaybe<Input_Pet_MedicalEvent_Reminder_Update>;
};


export type MutationUpdate_NoteArgs = {
  input: Input_Note_Update;
};


export type MutationUpdate_NotificationArgs = {
  input: Input_Notification_Update;
};


export type MutationUpdate_OrganizationArgs = {
  input: Input_Organization_Update;
};


export type MutationUpdate_Organization_PersonArgs = {
  input?: InputMaybe<Input_Organization_Person_Update>;
};


export type MutationUpdate_Organization_PetArgs = {
  input: Input_Organization_Pet_Update;
};


export type MutationUpdate_Organization_SettingsArgs = {
  input: Input_Organization_Settings_Update;
};


export type MutationUpdate_PartnerArgs = {
  input?: InputMaybe<PartnerUpdateInput>;
};


export type MutationUpdate_Partner_PersonArgs = {
  input?: InputMaybe<PartnerPersonUpdateInput>;
};


export type MutationUpdate_Pet_ApplicationArgs = {
  input: UpdatePetApplicationInput;
};


export type MutationUpdate_Pet_ImagesArgs = {
  input?: InputMaybe<UpdatePetImagesInput>;
};


export type MutationUpdate_User_ProfileArgs = {
  input: UserProfileInput;
};


export type MutationUpdate_User_SettingsArgs = {
  input: Input_User_Settings;
};

export type Note = {
  __typename?: 'Note';
  /** Author of note */
  author?: Maybe<User>;
  /** Date note was created or modified */
  date?: Maybe<Scalars['Instant']['output']>;
  /** Note id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Note text */
  text?: Maybe<Scalars['String']['output']>;
};

export type NoteOperationInput = {
  create?: InputMaybe<CreateNoteInput>;
  delete?: InputMaybe<DeleteNoteInput>;
  update?: InputMaybe<UpdateNoteInput>;
};

export type NotesConnectionInput = {
  create?: InputMaybe<Array<InputMaybe<CreateNoteInput>>>;
  delete?: InputMaybe<Array<InputMaybe<DeleteNoteInput>>>;
  update?: InputMaybe<Array<InputMaybe<UpdateNoteInput>>>;
};

export type Notification = {
  /** Notification date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** Notification external id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Notification is read */
  is_read?: Maybe<Scalars['Boolean']['output']>;
  /** Notification is sent */
  is_sent?: Maybe<Scalars['Boolean']['output']>;
  /** Message (from reminder at creation-time) */
  message?: Maybe<Scalars['String']['output']>;
  /** @deprecated This will be removed from this interface */
  pet_event?: Maybe<Pet_Event>;
  /** Recipient */
  recipient?: Maybe<Person>;
  /** Reminder from which the notification was generated */
  reminder?: Maybe<Reminder>;
  /** Title (from reminder at creation-time) */
  title?: Maybe<Scalars['String']['output']>;
};

/** Medical notification */
export type Notification_MedicalEvent = Notification & {
  __typename?: 'Notification_MedicalEvent';
  /** Notification date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** Notification external id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Notification is read */
  is_read?: Maybe<Scalars['Boolean']['output']>;
  /** Notification is sent */
  is_sent?: Maybe<Scalars['Boolean']['output']>;
  /** Message (from reminder at creation-time) */
  message?: Maybe<Scalars['String']['output']>;
  /** @deprecated This will be removed from this interface */
  pet_event?: Maybe<Pet_Event>;
  /** Reminder's medical event */
  pet_medical_event?: Maybe<Pet_MedicalEvent>;
  /** Recipient */
  recipient?: Maybe<Person>;
  /** Reminder from which the notification was generated */
  reminder?: Maybe<Reminder>;
  /** Title (from reminder at creation-time) */
  title?: Maybe<Scalars['String']['output']>;
};

export enum Notification_Preference {
  /** Email */
  Email = 'EMAIL',
  /** SMS */
  Sms = 'SMS'
}

export type NotificationsConnection = {
  __typename?: 'NotificationsConnection';
  entities?: Maybe<Array<Maybe<Notification>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type Organization = {
  __typename?: 'Organization';
  /** About the organization */
  about?: Maybe<Scalars['String']['output']>;
  /** Additional services provided by the organization */
  additional_services?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Date organization was created */
  created_at?: Maybe<Scalars['Instant']['output']>;
  /** Organization email */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique organization id */
  id?: Maybe<Scalars['String']['output']>;
  /** Organization locations */
  locations?: Maybe<Array<Maybe<Address>>>;
  /** Organization's logo FileRef */
  logo?: Maybe<File>;
  /** Organization mission statement */
  mission_statement?: Maybe<Scalars['String']['output']>;
  /** Unique organization name */
  name?: Maybe<Scalars['String']['output']>;
  /** 501c3 number */
  nonprofit_501_c_3?: Maybe<Scalars['String']['output']>;
  /** Organization pet records */
  pets?: Maybe<Array<Maybe<Organization_Pet>>>;
  /** Organization phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Primary address */
  primary_address?: Maybe<Address>;
  settings: Organization_Settings;
  /** Type of organization */
  type?: Maybe<Organization_Type>;
  /** Organization website */
  website?: Maybe<Scalars['String']['output']>;
};

export type OrganizationAdoption = {
  __typename?: 'OrganizationAdoption';
  adoption: Pet_Event_Adoption;
  organization_pet: Organization_Pet;
};

export type OrganizationAdoptionsConnection = {
  __typename?: 'OrganizationAdoptionsConnection';
  entities?: Maybe<Array<Maybe<OrganizationAdoption>>>;
};

export type OrganizationAdoptionsFilterInput = {
  period?: InputMaybe<PeriodInput>;
};

/** Basic organization info */
export type OrganizationBasic = {
  __typename?: 'OrganizationBasic';
  /** Organization email */
  email?: Maybe<Scalars['String']['output']>;
  /** Unique organization name */
  name?: Maybe<Scalars['String']['output']>;
  /** Organization phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Primary address */
  primary_address?: Maybe<Address>;
};

export type OrganizationBill = {
  __typename?: 'OrganizationBill';
  adoptions?: Maybe<Array<Maybe<Pet_Event_Adoption>>>;
  adoptions_count?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Organization>;
};

export type OrganizationFosteredPet = {
  __typename?: 'OrganizationFosteredPet';
  foster: Person;
  organization_pet: Organization_Pet;
  /** Foster start date */
  start_date: Scalars['Instant']['output'];
};

export type OrganizationFosteredPetsConnection = {
  __typename?: 'OrganizationFosteredPetsConnection';
  entities?: Maybe<Array<Maybe<OrganizationFosteredPet>>>;
};

export type OrganizationFosteredPetsFilterInput = {
  start_date_range?: InputMaybe<PeriodInput>;
};

export type OrganizationIntake = {
  __typename?: 'OrganizationIntake';
  intake: Pet_Event_Intake;
  organization_pet: Organization_Pet;
};

export type OrganizationIntakesConnection = {
  __typename?: 'OrganizationIntakesConnection';
  entities?: Maybe<Array<Maybe<OrganizationIntake>>>;
};

export type OrganizationIntakesFilterInput = {
  period?: InputMaybe<PeriodInput>;
};

/** Organization Pets connection */
export type OrganizationPetsConnection = {
  __typename?: 'OrganizationPetsConnection';
  entities?: Maybe<Array<Maybe<Organization_Pet>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<Organization_Pet_SortKey>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
  total_unfiltered_count?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationReport_PetEvents = {
  __typename?: 'OrganizationReport_PetEvents';
  count?: Maybe<Scalars['Int']['output']>;
  organization_pet_events?: Maybe<Array<Maybe<Organization_Pet_Event>>>;
};

export type OrganizationReport_Pets = {
  __typename?: 'OrganizationReport_Pets';
  count?: Maybe<Scalars['Int']['output']>;
  pets?: Maybe<Array<Maybe<Organization_Pet>>>;
};

export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  auth0_id?: Maybe<Scalars['String']['output']>;
  /** Date person registered as a user in the system */
  date_registered?: Maybe<Scalars['Instant']['output']>;
  /** A user's unique id */
  id?: Maybe<Scalars['String']['output']>;
  /** A user's person profile */
  profile?: Maybe<Person>;
  roles?: Maybe<Array<Maybe<Permission_Role_Type>>>;
};

/** Organization Users connection */
export type OrganizationUsersConnection = {
  __typename?: 'OrganizationUsersConnection';
  entities?: Maybe<Array<Maybe<OrganizationUser>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
  total_unfiltered_count?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationUsersFilter = {
  user_role?: InputMaybe<Permission_Role_Type>;
};

export type Organization_Pet = {
  __typename?: 'Organization_Pet';
  /** Adoption fee for a pet */
  adoption_fee?: Maybe<Money>;
  /** Date pet was added to Pawlytics */
  created_at?: Maybe<Scalars['Instant']['output']>;
  /** Organization pet unique id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Internal identifier for pet at organization */
  internal_id?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Pet_Location>;
  /** Does the pet currently need foster */
  needs_foster?: Maybe<Scalars['Boolean']['output']>;
  /** Pawlytics pet record */
  pet?: Maybe<Pet>;
  sort_INTAKE_DATE?: Maybe<Scalars['Instant']['output']>;
  sort_NAME?: Maybe<Scalars['String']['output']>;
  sort_OUTCOME_DATE?: Maybe<Scalars['Instant']['output']>;
  /** Pet's status. Can be a Pet_Event_Status or Organization_Pet_status. */
  status?: Maybe<Organization_Pet_Status>;
};

export type Organization_Pet_Event = {
  __typename?: 'Organization_Pet_Event';
  event?: Maybe<Pet_Event>;
  organization_pet?: Maybe<Organization_Pet>;
};

export enum Organization_Pet_SortKey {
  /** Adoption Fee */
  AdoptionFee = 'ADOPTION_FEE',
  /** Estimated Birth Date */
  EstimatedBirthDate = 'ESTIMATED_BIRTH_DATE',
  /** Intake Date */
  IntakeDate = 'INTAKE_DATE',
  /** Internal Id */
  InternalId = 'INTERNAL_ID',
  /** Name */
  Name = 'NAME',
  /** Outcome Date */
  OutcomeDate = 'OUTCOME_DATE'
}

/** Organization settable Organization_Pet statuses */
export enum Organization_Pet_Status {
  /** Adoptable */
  Adoptable = 'ADOPTABLE',
  /** Adopted */
  Adopted = 'ADOPTED',
  /** Died in care */
  DiedInCare = 'DIED_IN_CARE',
  /** Escaped/Lost */
  EscapedLost = 'ESCAPED_LOST',
  /** Euthanized, Behavior */
  EuthanizedBehavior = 'EUTHANIZED_BEHAVIOR',
  /** Euthanized Owner Requested */
  EuthanizedOwnerRequested = 'EUTHANIZED_OWNER_REQUESTED',
  /** Euthanized, Rabies Testing */
  EuthanizedRabiesTesting = 'EUTHANIZED_RABIES_TESTING',
  /** Euthanized, Sick/Injured */
  EuthanizedSickInjured = 'EUTHANIZED_SICK_INJURED',
  /** In Foster */
  InFoster = 'IN_FOSTER',
  /** Legal Hold */
  LegalHold = 'LEGAL_HOLD',
  /** Medical Hold */
  MedicalHold = 'MEDICAL_HOLD',
  /** Needing Foster */
  NeedingFoster = 'NEEDING_FOSTER',
  /** Pending */
  Pending = 'PENDING',
  /** Pending adoption */
  PendingAdoption = 'PENDING_ADOPTION',
  /** Pending transferred */
  PendingTransferred = 'PENDING_TRANSFERRED',
  /** Quarantined */
  Quarantined = 'QUARANTINED',
  /** Reclaimed */
  Reclaimed = 'RECLAIMED',
  /** Returned */
  Returned = 'RETURNED',
  /** Return to Field */
  ReturnToField = 'RETURN_TO_FIELD',
  /** Sanctuary */
  Sanctuary = 'SANCTUARY',
  /** Stray Hold */
  StrayHold = 'STRAY_HOLD',
  /** TNR */
  Tnr = 'TNR',
  /** Training */
  Training = 'TRAINING',
  /** Transferred */
  Transferred = 'TRANSFERRED'
}

export type Organization_Settings = {
  __typename?: 'Organization_Settings';
  address_style?: Maybe<Scalars['String']['output']>;
  /** Password for Adopt-A-Pet FTP */
  adopt_a_pet_password?: Maybe<Scalars['String']['output']>;
  /** ShelterID for Adopt-A-Pet API/FTP */
  adopt_a_pet_shelter_id?: Maybe<Scalars['String']['output']>;
  /** Username for Adopt-A-Pet FTP */
  adopt_a_pet_user?: Maybe<Scalars['String']['output']>;
  adoption_application_code?: Maybe<Scalars['String']['output']>;
  adoption_application_key?: Maybe<Scalars['String']['output']>;
  adoption_application_schema?: Maybe<Scalars['String']['output']>;
  adoption_checklist_schema?: Maybe<Scalars['String']['output']>;
  adoption_docs_enabled: Scalars['Boolean']['output'];
  /** AKC EnrollmentId for Microchip Integration */
  akc_enrollment_id?: Maybe<Scalars['String']['output']>;
  /** Date/time to upload pets to AKC based on adoption date */
  akc_upload_start_date?: Maybe<Scalars['Instant']['output']>;
  animal_control_email?: Maybe<Scalars['String']['output']>;
  /** @deprecated Clinics are now a kind of partner */
  clinics?: Maybe<Array<Maybe<Clinic>>>;
  custom_reports?: Maybe<Array<Maybe<CustomReport>>>;
  default_currency?: Maybe<Currency>;
  default_vet_clinic?: Maybe<VetClinic>;
  econtracts_enabled: Scalars['Boolean']['output'];
  external_organizations?: Maybe<Array<Maybe<ExternalOrganization>>>;
  external_persons?: Maybe<Array<Maybe<Person>>>;
  foster_application_code?: Maybe<Scalars['String']['output']>;
  foster_application_key?: Maybe<Scalars['String']['output']>;
  foster_application_schema?: Maybe<Scalars['String']['output']>;
  foster_checklist_schema?: Maybe<Scalars['String']['output']>;
  measurement_system?: Maybe<Measurement_System>;
  merck_id?: Maybe<Scalars['String']['output']>;
  /** Password for PetFinder FTP */
  pet_finder_password?: Maybe<Scalars['String']['output']>;
  /** Username for PetFinder FTP */
  pet_finder_user?: Maybe<Scalars['String']['output']>;
  petlink_enabled: Scalars['Boolean']['output'];
  petlink_shelter_id?: Maybe<Scalars['String']['output']>;
  petlink_upload_start_date?: Maybe<Scalars['Instant']['output']>;
  phone_country_code?: Maybe<Scalars['String']['output']>;
  stripe_customer_id?: Maybe<Scalars['String']['output']>;
  stripe_subscription_id?: Maybe<Scalars['String']['output']>;
  surrender_application_code?: Maybe<Scalars['String']['output']>;
  surrender_application_key?: Maybe<Scalars['String']['output']>;
  surrender_application_schema?: Maybe<Scalars['String']['output']>;
  surrender_checklist_schema?: Maybe<Scalars['String']['output']>;
  volunteer_application_code?: Maybe<Scalars['String']['output']>;
  volunteer_application_key?: Maybe<Scalars['String']['output']>;
  volunteer_application_schema?: Maybe<Scalars['String']['output']>;
  volunteer_checklist_schema?: Maybe<Scalars['String']['output']>;
};

export enum Organization_Type {
  /** rescue */
  Rescue = 'RESCUE',
  /** shelter */
  Shelter = 'SHELTER'
}

export enum Organization_User_SortKey {
  /** First name */
  FirstName = 'FIRST_NAME',
  /** Last name */
  LastName = 'LAST_NAME'
}

export type OrganizationsFilter = {
  type?: InputMaybe<Organization_Type>;
};

export type Pagination = {
  /** Max results to return */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Result sequence offset */
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Object key to sort results by */
  sort_key?: InputMaybe<Scalars['String']['input']>;
  /** Sort order */
  sort_order?: InputMaybe<SortOrder>;
};

/** An organization that collaborates with the current pawlytics organization */
export type Partner = {
  __typename?: 'Partner';
  documents?: Maybe<Array<Maybe<File>>>;
  general_info?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  partner_organization?: Maybe<PartnerOrganization>;
  partner_types?: Maybe<Array<Maybe<PartnerType>>>;
  persons: PartnerPersonsConnection;
  primary_address?: Maybe<Address>;
  primary_email?: Maybe<Scalars['String']['output']>;
  primary_phone?: Maybe<Scalars['String']['output']>;
};

export type PartnerArchiveInput = {
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
};

export type PartnerCreateInput = {
  general_info?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Input_UploadedFileRef>;
  name: Scalars['String']['input'];
  /** Organization owning the partnership */
  organization_id: Scalars['UUID']['input'];
  /** Id of the internal or external organization being the owning organization is partnering with. If null, an external organization will be created */
  partner_organization_id?: InputMaybe<Scalars['UUID']['input']>;
  partner_types?: InputMaybe<Array<InputMaybe<PartnerType>>>;
  primary_address?: InputMaybe<AddressInput>;
  primary_email?: InputMaybe<Scalars['String']['input']>;
  primary_phone?: InputMaybe<Scalars['String']['input']>;
};

export type PartnerFilterInput = {
  partner_types?: InputMaybe<Array<InputMaybe<PartnerType>>>;
};

export type PartnerInlinePersonCreateInput = {
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
  person: PersonInput;
  roles?: InputMaybe<Array<InputMaybe<PartnerPersonRole>>>;
};

/** a limited selection on organizations for partner queries */
export type PartnerOrganization = {
  __typename?: 'PartnerOrganization';
  about?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  is_external_organization?: Maybe<Scalars['Boolean']['output']>;
  logo?: Maybe<File>;
  mission_statement?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  primary_address?: Maybe<Address>;
};

export type PartnerPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<PartnerSortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export type PartnerPerson = {
  __typename?: 'PartnerPerson';
  partner: Partner;
  person?: Maybe<Person>;
  roles?: Maybe<Array<Maybe<PartnerPersonRole>>>;
};

export type PartnerPersonCreateInput = {
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
  roles?: InputMaybe<Array<InputMaybe<PartnerPersonRole>>>;
};

export type PartnerPersonDeleteInput = {
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};

export type PartnerPersonDeleted = {
  __typename?: 'PartnerPersonDeleted';
  partner_id?: Maybe<Scalars['UUID']['output']>;
  person_id?: Maybe<Scalars['UUID']['output']>;
};

export type PartnerPersonFilterInput = {
  roles?: InputMaybe<Array<InputMaybe<PartnerPersonRole>>>;
};

export type PartnerPersonPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<Person_SortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export enum PartnerPersonRole {
  PrimaryContact = 'PRIMARY_CONTACT',
  Vet = 'VET'
}

export type PartnerPersonUpdateInput = {
  add_roles?: InputMaybe<Array<InputMaybe<PartnerPersonRole>>>;
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
  remove_roles?: InputMaybe<Array<InputMaybe<PartnerPersonRole>>>;
};

export type PartnerPersonsConnection = {
  __typename?: 'PartnerPersonsConnection';
  entities?: Maybe<Array<Maybe<PartnerPerson>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<Person_SortKey>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type PartnerPetPaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort_key?: InputMaybe<PartnerPetSortKey>;
  sort_order?: InputMaybe<SortOrder>;
};

export enum PartnerPetSortKey {
  /** Adoption Fee */
  AdoptionFee = 'ADOPTION_FEE',
  /** Estimated Birth Date */
  EstimatedBirthDate = 'ESTIMATED_BIRTH_DATE',
  /** Internal Id */
  InternalId = 'INTERNAL_ID',
  /** Name */
  Name = 'NAME'
}

/** Organization Pets connection */
export type PartnerPetsConnection = {
  __typename?: 'PartnerPetsConnection';
  entities?: Maybe<Array<Maybe<Organization_Pet>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<PartnerPetSortKey>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export enum PartnerSortKey {
  Name = 'NAME'
}

export enum PartnerType {
  AdoptionFacility = 'ADOPTION_FACILITY',
  BoardingFacility = 'BOARDING_FACILITY',
  Breeder = 'BREEDER',
  Business = 'BUSINESS',
  Donor = 'DONOR',
  Grooming = 'GROOMING',
  NonProfit = 'NON_PROFIT',
  Other = 'OTHER',
  Rescue = 'RESCUE',
  Shelter = 'SHELTER',
  Trainer = 'TRAINER',
  Transporter = 'TRANSPORTER',
  VetClinic = 'VET_CLINIC'
}

export type PartnerUpdateInput = {
  add_partner_types?: InputMaybe<Array<InputMaybe<PartnerType>>>;
  create_documents?: InputMaybe<Array<InputMaybe<Input_UploadedFileRef>>>;
  create_notes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  delete_documents?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  delete_notes?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  general_info?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  logo?: InputMaybe<Input_UploadedFileRef>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  primary_address?: InputMaybe<AddressInput>;
  primary_email?: InputMaybe<Scalars['String']['input']>;
  primary_phone?: InputMaybe<Scalars['String']['input']>;
  remove_partner_types?: InputMaybe<Array<InputMaybe<PartnerType>>>;
};

/** Paged partner search results */
export type PartnersConnection = {
  __typename?: 'PartnersConnection';
  entities?: Maybe<Array<Maybe<Partner>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<PartnerSortKey>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type PayengineCreateMerchantInput = {
  organization_id: Scalars['UUID']['input'];
};

export type PayengineMerchant = {
  __typename?: 'PayengineMerchant';
  hash: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pub_key: Scalars['String']['output'];
  status: Scalars['String']['output'];
  status_message?: Maybe<Scalars['String']['output']>;
};

/** Payengine SaleResponse */
export type PayengineSaleResponse = {
  __typename?: 'PayengineSaleResponse';
  addressVerificationCode?: Maybe<Scalars['String']['output']>;
  authCode?: Maybe<Scalars['String']['output']>;
  cardHolderVerificationCode?: Maybe<Scalars['String']['output']>;
  cardTransactionIdentifier?: Maybe<Scalars['String']['output']>;
  cardType?: Maybe<Scalars['String']['output']>;
  customerReceipt?: Maybe<Scalars['String']['output']>;
  hostReferenceNumber?: Maybe<Scalars['String']['output']>;
  hostResponseCode?: Maybe<Scalars['String']['output']>;
  maskedCardNumber?: Maybe<Scalars['String']['output']>;
  merchantReceipt?: Maybe<Scalars['String']['output']>;
  processedAmount?: Maybe<Scalars['String']['output']>;
  responseCode?: Maybe<Scalars['String']['output']>;
  responseMessage?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  taskID?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['String']['output']>;
  transactionAmount?: Maybe<Scalars['String']['output']>;
  transactionID?: Maybe<Scalars['String']['output']>;
  transactionTimestamp?: Maybe<Scalars['String']['output']>;
};

export type PayengineSubmitOfflinePaymentInput = {
  organization_id: Scalars['UUID']['input'];
  payment_type: Scalars['String']['input'];
  transaction_amount: Scalars['String']['input'];
};

export type PayengineSubmitOfflinePaymentResult = {
  __typename?: 'PayengineSubmitOfflinePaymentResult';
  merchant_id: Scalars['String']['output'];
  /** SaleResponse field from Payengine response */
  transaction_id: Scalars['String']['output'];
};

export type PayengineSubmitPaymentInput = {
  card_token: Scalars['String']['input'];
  organization_id: Scalars['UUID']['input'];
  transaction_amount: Scalars['String']['input'];
};

export type PayengineSubmitPaymentResult = {
  __typename?: 'PayengineSubmitPaymentResult';
  merchant_id: Scalars['String']['output'];
  /** SaleResponse field from Payengine response */
  sale_response: PayengineSaleResponse;
};

export type Payload_Application_Archived = {
  __typename?: 'Payload_Application_Archived';
  airtable_id?: Maybe<Scalars['String']['output']>;
};

export type Payload_Application_Unarchived = {
  __typename?: 'Payload_Application_Unarchived';
  airtable_id?: Maybe<Scalars['String']['output']>;
};

export type Payload_Application_Updated = {
  __typename?: 'Payload_Application_Updated';
  airtable_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<PetApplicationStatus>;
};

export type Payload_Deleted_Entity = {
  __typename?: 'Payload_Deleted_Entity';
  id?: Maybe<Scalars['UUID']['output']>;
};

export type Payload_File_Delete = {
  __typename?: 'Payload_File_Delete';
  id?: Maybe<Scalars['UUID']['output']>;
};

export type Payload_InviteUser = {
  __typename?: 'Payload_InviteUser';
  /** Invite token to be used with create_update_user_for_auth */
  invite_token?: Maybe<Scalars['String']['output']>;
};

export type Payload_Organization_Pet_Delete = {
  __typename?: 'Payload_Organization_Pet_Delete';
  /** The deleted organization id */
  organization_id?: Maybe<Scalars['UUID']['output']>;
  /** The deleted pet id */
  pet_id?: Maybe<Scalars['UUID']['output']>;
};

export type Payload_Pet_MedicalEvent_Record_Delete = {
  __typename?: 'Payload_Pet_MedicalEvent_Record_Delete';
  /** The deleted medical event record id */
  medical_event_record_id?: Maybe<Scalars['UUID']['output']>;
  organization_id?: Maybe<Scalars['UUID']['output']>;
};

export type Payload_Pet_MedicalEvent_Record_Line_Item_Delete = {
  __typename?: 'Payload_Pet_MedicalEvent_Record_Line_Item_Delete';
  /** The deleted medical event record line item id */
  medical_event_record_line_item_id?: Maybe<Scalars['UUID']['output']>;
  organization_id?: Maybe<Scalars['UUID']['output']>;
};

export type Payload_Pet_Medical_Event_Delete = {
  __typename?: 'Payload_Pet_Medical_Event_Delete';
  /** The deleted medical event id */
  medical_event_id?: Maybe<Scalars['UUID']['output']>;
  organization_id?: Maybe<Scalars['UUID']['output']>;
};

export type PeriodInput = {
  end_datetime?: InputMaybe<Scalars['Instant']['input']>;
  start_datetime?: InputMaybe<Scalars['Instant']['input']>;
};

export type Permission = {
  __typename?: 'Permission';
  /** Access  */
  access?: Maybe<Permission_Access>;
  entity?: Maybe<Permissionable>;
  organization?: Maybe<Organization>;
  role?: Maybe<Permission_Role_Type>;
  user?: Maybe<User>;
};

export enum Permission_Access {
  /** read */
  Read = 'READ',
  /** read and write */
  Write = 'WRITE'
}

export enum Permission_Role_Type {
  /** admin */
  Admin = 'ADMIN',
  /** analyst */
  Analyst = 'ANALYST',
  /** foster */
  Foster = 'FOSTER',
  /** integrator */
  Integrator = 'INTEGRATOR',
  /** manager */
  Manager = 'MANAGER',
  /** member */
  Member = 'MEMBER',
  /** pet specialist */
  PetSpecialist = 'PET_SPECIALIST',
  /** super admin */
  SuperAdmin = 'SUPER_ADMIN',
  /** volunteer */
  Volunteer = 'VOLUNTEER'
}

export type Person = {
  __typename?: 'Person';
  /** Activities willing to participate in */
  activities?: Maybe<Array<Maybe<Person_Activities>>>;
  /** Person's address */
  address?: Maybe<Address>;
  /** Adoption application id */
  adoption_application_id?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['Instant']['output']>;
  created_at?: Maybe<Scalars['Instant']['output']>;
  documents?: Maybe<Array<Maybe<Document>>>;
  /** Person's email */
  email?: Maybe<Scalars['String']['output']>;
  /** First Name */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Foster application id */
  foster_application_id?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Last Name */
  last_name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  /** Partner Persons */
  partner_persons?: Maybe<Array<PartnerPerson>>;
  /** Phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** Picture of the person FileRef */
  photo?: Maybe<File>;
  /** State id or driver's license */
  state_id?: Maybe<Scalars['String']['output']>;
  /** Surrender application id */
  surrender_application_id?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Person_Tags>>>;
  /** Volunteer application id */
  volunteer_application_id?: Maybe<Scalars['String']['output']>;
  /** Distance willing to volunteer in meters. */
  volunteer_distance_meters?: Maybe<Scalars['Float']['output']>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  entities?: Maybe<Array<Maybe<Person>>>;
  filter_data: PersonConnectionFilterData;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  sort_key?: Maybe<Person_SortKey>;
  sort_order?: Maybe<SortOrder>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type PersonConnectionFilterData = {
  __typename?: 'PersonConnectionFilterData';
  localities?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  subdivisions?: Maybe<Array<Maybe<Country_Subdivision>>>;
  tags?: Maybe<Array<Maybe<Person_Tags>>>;
};

export type PersonInput = {
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
};

export enum Person_Activities {
  /** foster */
  Foster = 'FOSTER',
  /** volunteer */
  Volunteer = 'VOLUNTEER'
}

export enum Person_SortKey {
  /** First name */
  FirstName = 'FIRST_NAME',
  /** Last name */
  LastName = 'LAST_NAME'
}

export enum Person_Tags {
  /** Adopter */
  Adopter = 'ADOPTER',
  /** Adopt Waitlist */
  AdoptWaitlist = 'ADOPT_WAITLIST',
  /** Available Foster */
  AvailableFoster = 'AVAILABLE_FOSTER',
  /** Board Member */
  BoardMember = 'BOARD_MEMBER',
  /** Current Foster */
  CurrentFoster = 'CURRENT_FOSTER',
  /** Donor */
  Donor = 'DONOR',
  /** Dormant Foster */
  DormantFoster = 'DORMANT_FOSTER',
  /** Do Not Adopt */
  DoNotAdopt = 'DO_NOT_ADOPT',
  /** Do Not Foster */
  DoNotFoster = 'DO_NOT_FOSTER',
  /** Do Not Volunteer */
  DoNotVolunteer = 'DO_NOT_VOLUNTEER',
  /** Foster */
  Foster = 'FOSTER',
  /** Foster Waitlist */
  FosterWaitlist = 'FOSTER_WAITLIST',
  /** Has Cats */
  HasCats = 'HAS_CATS',
  /** Has Dogs */
  HasDogs = 'HAS_DOGS',
  /** Has Kids */
  HasKids = 'HAS_KIDS',
  /** Owner Surrender */
  OwnerSurrender = 'OWNER_SURRENDER',
  /** Potential Adopter */
  PotentialAdopter = 'POTENTIAL_ADOPTER',
  /** Processing Application */
  ProcessingApplication = 'PROCESSING_APPLICATION',
  /** Volunteer */
  Volunteer = 'VOLUNTEER'
}

export type Pet = Permissionable & {
  __typename?: 'Pet';
  /** Neutered/spayed */
  altered?: Maybe<Scalars['Boolean']['output']>;
  /** Set if the pet data is not current / archived at a point in time */
  archived_date?: Maybe<Scalars['Instant']['output']>;
  /** Pet behavior profile */
  behavior?: Maybe<Pet_Behavior>;
  /** Cat's breed(s) */
  breed_cat?: Maybe<Array<Maybe<Pet_Breed_Cat>>>;
  /** Dog's breed(s) */
  breed_dog?: Maybe<Array<Maybe<Pet_Breed_Dog>>>;
  breed_guinea_pig?: Maybe<Array<Maybe<Pet_Breed_GuineaPig>>>;
  breed_rabbit?: Maybe<Array<Maybe<Pet_Breed_Rabbit>>>;
  /** Note: maximum of 1 selection */
  breed_small_animal?: Maybe<Array<Maybe<Pet_Breed_SmallAnimal>>>;
  /** Pet color(s) */
  color?: Maybe<Array<Maybe<Pet_Color>>>;
  declawed?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Pet's diet profile */
  diet?: Maybe<Pet_Diet>;
  distinguishing_marks?: Maybe<Scalars['String']['output']>;
  /** documents */
  documents?: Maybe<Array<Maybe<Document>>>;
  /** Estimated date of birth */
  estimated_birth_date?: Maybe<Scalars['Instant']['output']>;
  /** Events for pet */
  events?: Maybe<Array<Maybe<Pet_Event>>>;
  father?: Maybe<Pet>;
  gender?: Maybe<Pet_Gender>;
  good_with_cats?: Maybe<Scalars['Boolean']['output']>;
  good_with_children?: Maybe<Scalars['Boolean']['output']>;
  good_with_dogs?: Maybe<Scalars['Boolean']['output']>;
  has_bite_history?: Maybe<Scalars['Boolean']['output']>;
  housetrained?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Image files, ostensibly pet pictures */
  images?: Maybe<Array<Maybe<File>>>;
  license?: Maybe<Scalars['String']['output']>;
  /** Medical Events for pet */
  medical_events?: Maybe<Array<Maybe<Pet_MedicalEvent>>>;
  microchip?: Maybe<Pet_Microchip>;
  /** Is the pet mixed? optional */
  mixed?: Maybe<Scalars['Boolean']['output']>;
  mother?: Maybe<Pet>;
  name?: Maybe<Scalars['String']['output']>;
  /** Pet name history over time */
  name_timeseries?: Maybe<Array<Maybe<PetNameTimeseriesEvent>>>;
  needs_experienced_adopter?: Maybe<Scalars['Boolean']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  rabies_tag?: Maybe<Scalars['String']['output']>;
  siblings?: Maybe<Array<Maybe<Pet>>>;
  special_needs?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Pet_Species>;
  status?: Maybe<Pet_Status>;
  status_details?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Weight>;
  weight_lbs?: Maybe<Scalars['Float']['output']>;
  youtube_video_url?: Maybe<Scalars['String']['output']>;
};


export type PetWeightArgs = {
  unit?: InputMaybe<WeightUnit>;
};

export type PetApplication = {
  __typename?: 'PetApplication';
  airtable_id?: Maybe<Scalars['String']['output']>;
  applicant_city?: Maybe<Scalars['String']['output']>;
  applicant_email?: Maybe<Scalars['String']['output']>;
  applicant_name?: Maybe<Scalars['String']['output']>;
  applicant_person_id?: Maybe<Scalars['UUID']['output']>;
  applicant_phone?: Maybe<Scalars['String']['output']>;
  applicant_postal_code?: Maybe<Scalars['String']['output']>;
  applicant_state?: Maybe<Scalars['String']['output']>;
  applicant_street?: Maybe<Scalars['String']['output']>;
  /**
   * Pet being applied for if the application is for a specific pet.
   *                                                                    Currently will only fill the name and ID fields.
   */
  applying_for?: Maybe<Pet>;
  created_at?: Maybe<Scalars['Instant']['output']>;
  custom_questions?: Maybe<Array<Maybe<PetApplicationCustomQuestion>>>;
  pet_documents?: Maybe<Array<Maybe<AirtableDocument>>>;
  pet_photos?: Maybe<Array<Maybe<AirtableDocument>>>;
  status?: Maybe<PetApplicationStatus>;
};

export type PetApplicationConnection = {
  __typename?: 'PetApplicationConnection';
  entities?: Maybe<Array<Maybe<PetApplication>>>;
  has_configured_applications?: Maybe<Scalars['Boolean']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
};

export type PetApplicationCustomQuestion = {
  __typename?: 'PetApplicationCustomQuestion';
  answer_json?: Maybe<Scalars['String']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

export type PetApplicationFilterInput = {
  archive_states?: InputMaybe<Array<InputMaybe<ArchiveStates>>>;
  statuses?: InputMaybe<Array<InputMaybe<PetApplicationStatus>>>;
};

export enum PetApplicationStatus {
  Approved = 'APPROVED',
  /** Approved: Adopted */
  ApprovedAdopted = 'APPROVED_ADOPTED',
  /** Approved: No Match Made */
  ApprovedNoMatch = 'APPROVED_NO_MATCH',
  Cancelled = 'CANCELLED',
  /** Cancelled: Adopted Elsewhere */
  CancelledAdoptedElsewhere = 'CANCELLED_ADOPTED_ELSEWHERE',
  /** Cancelled: Approved */
  CancelledApproved = 'CANCELLED_APPROVED',
  /** Cancelled: Do Not Adopt */
  CancelledDoNotAdopt = 'CANCELLED_DO_NOT_ADOPT',
  Contacted = 'CONTACTED',
  Denied = 'DENIED',
  InProgress = 'IN_PROGRESS',
  New = 'NEW',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  /** Pending: Approval */
  PendingApproval = 'PENDING_APPROVAL',
  /** Pending: Meet and Greet */
  PendingMeetAndGreet = 'PENDING_MEET_AND_GREET',
  /** Pending: Reference/Vet Checks */
  PendingReferenceOrVet = 'PENDING_REFERENCE_OR_VET',
  Read = 'READ',
  Reviewed = 'REVIEWED',
  Withdrawn = 'WITHDRAWN'
}

export enum PetApplicationType {
  Adoption = 'ADOPTION',
  Foster = 'FOSTER',
  Surrender = 'SURRENDER',
  Volunteer = 'VOLUNTEER'
}

export type PetNameTimeseriesEvent = {
  __typename?: 'PetNameTimeseriesEvent';
  author?: Maybe<User>;
  date?: Maybe<Scalars['Instant']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PetNameTimeseriesEventInput = {
  date: Scalars['Instant']['input'];
  name: Scalars['String']['input'];
};

export type PetOutcome = Pet_Event_Adoption | Pet_Event_DiedInCare | Pet_Event_Escaped_Lost | Pet_Event_Euthanized | Pet_Event_Return | Pet_Event_Return_To_Field | Pet_Event_Transfer;

export type Pet_Behavior = {
  __typename?: 'Pet_Behavior';
  assessment?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  plan?: Maybe<Scalars['String']['output']>;
};

export enum Pet_Breed_Cat {
  /** Abyssinian */
  Abyssinian = 'ABYSSINIAN',
  /** Aegean */
  Aegean = 'AEGEAN',
  /** American Bobtail */
  AmericanBobtail = 'AMERICAN_BOBTAIL',
  /** American Bobtail Shorthair */
  AmericanBobtailShorthair = 'AMERICAN_BOBTAIL_SHORTHAIR',
  /** American Curl */
  AmericanCurl = 'AMERICAN_CURL',
  /** American Curl Longhair */
  AmericanCurlLonghair = 'AMERICAN_CURL_LONGHAIR',
  /** American Ringtail */
  AmericanRingtail = 'AMERICAN_RINGTAIL',
  /** American Shorthair */
  AmericanShorthair = 'AMERICAN_SHORTHAIR',
  /** American Wirehair */
  AmericanWirehair = 'AMERICAN_WIREHAIR',
  /** Applehead Siamese */
  AppleheadSiamese = 'APPLEHEAD_SIAMESE',
  /** Arabian Mau */
  ArabianMau = 'ARABIAN_MAU',
  /** Asian */
  Asian = 'ASIAN',
  /** Asian - Smoke */
  AsianSmoke = 'ASIAN_SMOKE',
  /** Australian Mist */
  AustralianMist = 'AUSTRALIAN_MIST',
  /** Balinese */
  Balinese = 'BALINESE',
  /** Bambino */
  Bambino = 'BAMBINO',
  /** Bengal */
  Bengal = 'BENGAL',
  /** Bengal Longhair */
  BengalLonghair = 'BENGAL_LONGHAIR',
  /** Birman */
  Birman = 'BIRMAN',
  /** Bobtail */
  Bobtail = 'BOBTAIL',
  /** Bombay */
  Bombay = 'BOMBAY',
  /** Bramble */
  Bramble = 'BRAMBLE',
  /** Brazilian Shorthair */
  BrazilianShorthair = 'BRAZILIAN_SHORTHAIR',
  /** British Longhair */
  BritishLonghair = 'BRITISH_LONGHAIR',
  /** British Shorthair */
  BritishShorthair = 'BRITISH_SHORTHAIR',
  /** Burmese */
  Burmese = 'BURMESE',
  /** Burmilla */
  Burmilla = 'BURMILLA',
  /** Burmilla Longhair */
  BurmillaLonghair = 'BURMILLA_LONGHAIR',
  /** Calico */
  Calico = 'CALICO',
  /** California Spangled */
  CaliforniaSpangled = 'CALIFORNIA_SPANGLED',
  /** Canadian Hairless */
  CanadianHairless = 'CANADIAN_HAIRLESS',
  /** Ceylon */
  Ceylon = 'CEYLON',
  /** Chantilly/tiffany */
  Chantillytiffany = 'CHANTILLYTIFFANY',
  /** Chartreux */
  Chartreux = 'CHARTREUX',
  /** Chausie */
  Chausie = 'CHAUSIE',
  /** Chinchilla */
  Chinchilla = 'CHINCHILLA',
  /** Chinese Li Hua */
  ChineseLiHua = 'CHINESE_LI_HUA',
  /** Colorpoint Shorthair */
  ColorpointShorthair = 'COLORPOINT_SHORTHAIR',
  /** Cornish Rex */
  CornishRex = 'CORNISH_REX',
  /** Cymric */
  Cymric = 'CYMRIC',
  /** Cyprus Aphrodite */
  CyprusAphrodite = 'CYPRUS_APHRODITE',
  /** Devon Rex */
  DevonRex = 'DEVON_REX',
  /** Dilute Calico */
  DiluteCalico = 'DILUTE_CALICO',
  /** Dilute Tortoiseshell */
  DiluteTortoiseshell = 'DILUTE_TORTOISESHELL',
  /** Domestic Long Hair */
  DomesticLongHair = 'DOMESTIC_LONG_HAIR',
  /** Domestic Long Hair (Black) */
  DomesticLongHairBlack = 'DOMESTIC_LONG_HAIR_BLACK',
  /** Domestic Long Hair (Black & White) */
  DomesticLongHairBlackAndWhite = 'DOMESTIC_LONG_HAIR_BLACK_AND_WHITE',
  /** Domestic Long Hair (Brown) */
  DomesticLongHairBrown = 'DOMESTIC_LONG_HAIR_BROWN',
  /** Domestic Long Hair (Buff) */
  DomesticLongHairBuff = 'DOMESTIC_LONG_HAIR_BUFF',
  /** Domestic Long Hair (Buff & White) */
  DomesticLongHairBuffAndWhite = 'DOMESTIC_LONG_HAIR_BUFF_AND_WHITE',
  /** Domestic Long Hair (Gray) */
  DomesticLongHairGray = 'DOMESTIC_LONG_HAIR_GRAY',
  /** Domestic Long Hair (Gray & White) */
  DomesticLongHairGrayAndWhite = 'DOMESTIC_LONG_HAIR_GRAY_AND_WHITE',
  /** Domestic Long Hair (Orange) */
  DomesticLongHairOrange = 'DOMESTIC_LONG_HAIR_ORANGE',
  /** Domestic Long Hair (Orange & White) */
  DomesticLongHairOrangeAndWhite = 'DOMESTIC_LONG_HAIR_ORANGE_AND_WHITE',
  /** Domestic Long Hair (White) */
  DomesticLongHairWhite = 'DOMESTIC_LONG_HAIR_WHITE',
  /** Domestic Medium Hair */
  DomesticMediumHair = 'DOMESTIC_MEDIUM_HAIR',
  /** Domestic Medium Hair (Black) */
  DomesticMediumHairBlack = 'DOMESTIC_MEDIUM_HAIR_BLACK',
  /** Domestic Medium Hair (Black & White) */
  DomesticMediumHairBlackAndWhite = 'DOMESTIC_MEDIUM_HAIR_BLACK_AND_WHITE',
  /** Domestic Medium Hair (Brown) */
  DomesticMediumHairBrown = 'DOMESTIC_MEDIUM_HAIR_BROWN',
  /** Domestic Medium Hair (Buff) */
  DomesticMediumHairBuff = 'DOMESTIC_MEDIUM_HAIR_BUFF',
  /** Domestic Medium Hair (Buff & White) */
  DomesticMediumHairBuffAndWhite = 'DOMESTIC_MEDIUM_HAIR_BUFF_AND_WHITE',
  /** Domestic Medium Hair (Gray) */
  DomesticMediumHairGray = 'DOMESTIC_MEDIUM_HAIR_GRAY',
  /** Domestic Medium Hair (Gray & White) */
  DomesticMediumHairGrayAndWhite = 'DOMESTIC_MEDIUM_HAIR_GRAY_AND_WHITE',
  /** Domestic Medium Hair (Orange) */
  DomesticMediumHairOrange = 'DOMESTIC_MEDIUM_HAIR_ORANGE',
  /** Domestic Medium Hair (Orange & White) */
  DomesticMediumHairOrangeAndWhite = 'DOMESTIC_MEDIUM_HAIR_ORANGE_AND_WHITE',
  /** Domestic Medium Hair (White) */
  DomesticMediumHairWhite = 'DOMESTIC_MEDIUM_HAIR_WHITE',
  /** Domestic Short Hair */
  DomesticShortHair = 'DOMESTIC_SHORT_HAIR',
  /** Domestic Short Hair (Black) */
  DomesticShortHairBlack = 'DOMESTIC_SHORT_HAIR_BLACK',
  /** Domestic Short Hair (Black & White) */
  DomesticShortHairBlackAndWhite = 'DOMESTIC_SHORT_HAIR_BLACK_AND_WHITE',
  /** Domestic Short Hair (Brown) */
  DomesticShortHairBrown = 'DOMESTIC_SHORT_HAIR_BROWN',
  /** Domestic Short Hair (Buff) */
  DomesticShortHairBuff = 'DOMESTIC_SHORT_HAIR_BUFF',
  /** Domestic Short Hair (Buff & White) */
  DomesticShortHairBuffAndWhite = 'DOMESTIC_SHORT_HAIR_BUFF_AND_WHITE',
  /** Domestic Short Hair (Gray) */
  DomesticShortHairGray = 'DOMESTIC_SHORT_HAIR_GRAY',
  /** Domestic Short Hair (Gray & White) */
  DomesticShortHairGrayAndWhite = 'DOMESTIC_SHORT_HAIR_GRAY_AND_WHITE',
  /** Domestic Short Hair (Mitted) */
  DomesticShortHairMitted = 'DOMESTIC_SHORT_HAIR_MITTED',
  /** Domestic Short Hair (Orange) */
  DomesticShortHairOrange = 'DOMESTIC_SHORT_HAIR_ORANGE',
  /** Domestic Short Hair (Orange & White) */
  DomesticShortHairOrangeAndWhite = 'DOMESTIC_SHORT_HAIR_ORANGE_AND_WHITE',
  /** Domestic Short Hair (White) */
  DomesticShortHairWhite = 'DOMESTIC_SHORT_HAIR_WHITE',
  /** Donskoy */
  Donskoy = 'DONSKOY',
  /** Dwelf */
  Dwelf = 'DWELF',
  /** Egyptian Mau */
  EgyptianMau = 'EGYPTIAN_MAU',
  /** European Burmese */
  EuropeanBurmese = 'EUROPEAN_BURMESE',
  /** European Shorthair */
  EuropeanShorthair = 'EUROPEAN_SHORTHAIR',
  /** Exotic Shorthair */
  ExoticShorthair = 'EXOTIC_SHORTHAIR',
  /** Extra-Toes Cat / Hemingway Polydactyl */
  ExtraToesCatHemingwayPolydactyl = 'EXTRA_TOES_CAT_HEMINGWAY_POLYDACTYL',
  /** Genetta */
  Genetta = 'GENETTA',
  /** German Rex */
  GermanRex = 'GERMAN_REX',
  /** Havana */
  Havana = 'HAVANA',
  /** Highlander */
  Highlander = 'HIGHLANDER',
  /** Highlander Shorthair */
  HighlanderShorthair = 'HIGHLANDER_SHORTHAIR',
  /** Himalayan */
  Himalayan = 'HIMALAYAN',
  /** Japanese Bobtail */
  JapaneseBobtail = 'JAPANESE_BOBTAIL',
  /** Japanese Bobtail Longhair */
  JapaneseBobtailLonghair = 'JAPANESE_BOBTAIL_LONGHAIR',
  /** Javanese */
  Javanese = 'JAVANESE',
  /** Kanaani */
  Kanaani = 'KANAANI',
  /** Khao Manee */
  KhaoManee = 'KHAO_MANEE',
  /** Kinkalow */
  Kinkalow = 'KINKALOW',
  /** Korat */
  Korat = 'KORAT',
  /** Kurilian Bobtail */
  KurilianBobtail = 'KURILIAN_BOBTAIL',
  /** Kurilian Bobtail Longhair */
  KurilianBobtailLonghair = 'KURILIAN_BOBTAIL_LONGHAIR',
  /** Lambkin Dwarf */
  LambkinDwarf = 'LAMBKIN_DWARF',
  /** Laperm */
  Laperm = 'LAPERM',
  /** Laperm Shorthair */
  LapermShorthair = 'LAPERM_SHORTHAIR',
  /** Laperm */
  LaPerm = 'LA_PERM',
  /** Lykoi */
  Lykoi = 'LYKOI',
  /** Maine Coon */
  MaineCoon = 'MAINE_COON',
  /** Manx */
  Manx = 'MANX',
  /** Mekong Bobtail */
  MekongBobtail = 'MEKONG_BOBTAIL',
  /** Minskin */
  Minskin = 'MINSKIN',
  /** Minuet */
  Minuet = 'MINUET',
  /** Minuet Longhair */
  MinuetLonghair = 'MINUET_LONGHAIR',
  /** Munchkin */
  Munchkin = 'MUNCHKIN',
  /** Munchkin Longhair */
  MunchkinLonghair = 'MUNCHKIN_LONGHAIR',
  /** Napoleon */
  Napoleon = 'NAPOLEON',
  /** Nebelung */
  Nebelung = 'NEBELUNG',
  /** Neva Masquerade */
  NevaMasquerade = 'NEVA_MASQUERADE',
  /** Norwegian Forest Cat */
  NorwegianForestCat = 'NORWEGIAN_FOREST_CAT',
  /** Ocicat */
  Ocicat = 'OCICAT',
  /** Ojos Azules */
  OjosAzules = 'OJOS_AZULES',
  /** Oriental Longhair */
  OrientalLonghair = 'ORIENTAL_LONGHAIR',
  /** Oriental Long Hair */
  OrientalLongHair = 'ORIENTAL_LONG_HAIR',
  /** Oriental Shorthair */
  OrientalShorthair = 'ORIENTAL_SHORTHAIR',
  /** Oriental Short Hair */
  OrientalShortHair = 'ORIENTAL_SHORT_HAIR',
  /** Oriental Tabby */
  OrientalTabby = 'ORIENTAL_TABBY',
  /** Persian */
  Persian = 'PERSIAN',
  /** Persian - Chinchilla */
  PersianChinchilla = 'PERSIAN_CHINCHILLA',
  /** Peterbald */
  Peterbald = 'PETERBALD',
  /** Pixiebob */
  Pixiebob = 'PIXIEBOB',
  /** Pixiebob Longhair */
  PixiebobLonghair = 'PIXIEBOB_LONGHAIR',
  /** Pixie-Bob */
  PixieBob = 'PIXIE_BOB',
  /** Ragamuffin */
  Ragamuffin = 'RAGAMUFFIN',
  /** Ragdoll */
  Ragdoll = 'RAGDOLL',
  /** Russian Blue */
  RussianBlue = 'RUSSIAN_BLUE',
  /** Safari */
  Safari = 'SAFARI',
  /** Savannah */
  Savannah = 'SAVANNAH',
  /** Scottish Fold */
  ScottishFold = 'SCOTTISH_FOLD',
  /** Scottish Straight */
  ScottishStraight = 'SCOTTISH_STRAIGHT',
  /** Scottish Straight Longhair */
  ScottishStraightLonghair = 'SCOTTISH_STRAIGHT_LONGHAIR',
  /** Selkirk Rex */
  SelkirkRex = 'SELKIRK_REX',
  /** Selkirk Rex Longhair */
  SelkirkRexLonghair = 'SELKIRK_REX_LONGHAIR',
  /** Serengeti */
  Serengeti = 'SERENGETI',
  /** Seychellois */
  Seychellois = 'SEYCHELLOIS',
  /** Siamese */
  Siamese = 'SIAMESE',
  /** Siberian */
  Siberian = 'SIBERIAN',
  /** Silver */
  Silver = 'SILVER',
  /** Singapura */
  Singapura = 'SINGAPURA',
  /** Skookum */
  Skookum = 'SKOOKUM',
  /** Snowshoe */
  Snowshoe = 'SNOWSHOE',
  /** Sokoke */
  Sokoke = 'SOKOKE',
  /** Somali */
  Somali = 'SOMALI',
  /** Sphynx */
  Sphynx = 'SPHYNX',
  /** Sphynx / Hairless Cat */
  SphynxHairlessCat = 'SPHYNX_HAIRLESS_CAT',
  /** Tabby */
  Tabby = 'TABBY',
  /** Tabby (Black) */
  TabbyBlack = 'TABBY_BLACK',
  /** Tabby (Brown) */
  TabbyBrown = 'TABBY_BROWN',
  /** Tabby (Buff) */
  TabbyBuff = 'TABBY_BUFF',
  /** Tabby (Gray) */
  TabbyGray = 'TABBY_GRAY',
  /** Tabby (Orange) */
  TabbyOrange = 'TABBY_ORANGE',
  /** Tabby (White) */
  TabbyWhite = 'TABBY_WHITE',
  /** Tennessee Rex */
  TennesseeRex = 'TENNESSEE_REX',
  /** Thai */
  Thai = 'THAI',
  /** Tiffanie */
  Tiffanie = 'TIFFANIE',
  /** Tiger */
  Tiger = 'TIGER',
  /** Tonkinese */
  Tonkinese = 'TONKINESE',
  /** Torbie */
  Torbie = 'TORBIE',
  /** Tortoiseshell */
  Tortoiseshell = 'TORTOISESHELL',
  /** Toybob */
  Toybob = 'TOYBOB',
  /** Toyger */
  Toyger = 'TOYGER',
  /** Turkish Angora */
  TurkishAngora = 'TURKISH_ANGORA',
  /** Turkish Shorthair */
  TurkishShorthair = 'TURKISH_SHORTHAIR',
  /** Turkish Van */
  TurkishVan = 'TURKISH_VAN',
  /** Tuxedo */
  Tuxedo = 'TUXEDO',
  /** Ukrainian Levkoy */
  UkrainianLevkoy = 'UKRAINIAN_LEVKOY',
  /** Ussuri */
  Ussuri = 'USSURI',
  /** York Chocolate */
  YorkChocolate = 'YORK_CHOCOLATE'
}

export enum Pet_Breed_Dog {
  /** Abruzzese Mastiff */
  AbruzzeseMastiff = 'ABRUZZESE_MASTIFF',
  /** Affenpinscher */
  Affenpinscher = 'AFFENPINSCHER',
  /** Afghan Hound */
  AfghanHound = 'AFGHAN_HOUND',
  /** Africanis */
  Africanis = 'AFRICANIS',
  /** Aidi */
  Aidi = 'AIDI',
  /** Airedale Terrier */
  AiredaleTerrier = 'AIREDALE_TERRIER',
  /** Akbash */
  Akbash = 'AKBASH',
  /** Akita */
  Akita = 'AKITA',
  /** Alapaha Blue Blood Bulldog */
  AlapahaBlueBloodBulldog = 'ALAPAHA_BLUE_BLOOD_BULLDOG',
  /** Alaskan Husky */
  AlaskanHusky = 'ALASKAN_HUSKY',
  /** Alaskan Klee Kai */
  AlaskanKleeKai = 'ALASKAN_KLEE_KAI',
  /** Alaskan Malamute */
  AlaskanMalamute = 'ALASKAN_MALAMUTE',
  /** Alentejo Mastiff */
  AlentejoMastiff = 'ALENTEJO_MASTIFF',
  /** Alpine Dachsbracke */
  AlpineDachsbracke = 'ALPINE_DACHSBRACKE',
  /** American Bulldog */
  AmericanBulldog = 'AMERICAN_BULLDOG',
  /** American Bully */
  AmericanBully = 'AMERICAN_BULLY',
  /** American English Coonhound */
  AmericanEnglishCoonhound = 'AMERICAN_ENGLISH_COONHOUND',
  /** American Eskimo Dog */
  AmericanEskimoDog = 'AMERICAN_ESKIMO_DOG',
  /** American Foxhound */
  AmericanFoxhound = 'AMERICAN_FOXHOUND',
  /** American Hairless Terrier */
  AmericanHairlessTerrier = 'AMERICAN_HAIRLESS_TERRIER',
  /** American Mastiff */
  AmericanMastiff = 'AMERICAN_MASTIFF',
  /** American Pit Bull Terrier */
  AmericanPitBullTerrier = 'AMERICAN_PIT_BULL_TERRIER',
  /** American Staffordshire Terrier */
  AmericanStaffordshireTerrier = 'AMERICAN_STAFFORDSHIRE_TERRIER',
  /** American Staghound */
  AmericanStaghound = 'AMERICAN_STAGHOUND',
  /** American Water Spaniel */
  AmericanWaterSpaniel = 'AMERICAN_WATER_SPANIEL',
  /** Anatolian Shepherd */
  AnatolianShepherd = 'ANATOLIAN_SHEPHERD',
  /** Anatolian Shepherd Dog */
  AnatolianShepherdDog = 'ANATOLIAN_SHEPHERD_DOG',
  /** Anglo-français De Petite Vénerie */
  AngloFrancaisDePetiteVenerie = 'ANGLO_FRANCAIS_DE_PETITE_VENERIE',
  /** Appenzeller Sennenhund */
  AppenzellerSennenhund = 'APPENZELLER_SENNENHUND',
  /** Appenzell Mountain Dog */
  AppenzellMountainDog = 'APPENZELL_MOUNTAIN_DOG',
  /** Ariegeois */
  Ariegeois = 'ARIEGEOIS',
  /** Ariege Pointer */
  AriegePointer = 'ARIEGE_POINTER',
  /** Armenian Gampr Dog */
  ArmenianGamprDog = 'ARMENIAN_GAMPR_DOG',
  /** Artois Hound */
  ArtoisHound = 'ARTOIS_HOUND',
  /** Aussiedoodle */
  Aussiedoodle = 'AUSSIEDOODLE',
  /** Australian Cattle Dog */
  AustralianCattleDog = 'AUSTRALIAN_CATTLE_DOG',
  /** Australian Cattle Dog / Blue Heeler */
  AustralianCattleDogBlueHeeler = 'AUSTRALIAN_CATTLE_DOG_BLUE_HEELER',
  /** Australian Kelpie */
  AustralianKelpie = 'AUSTRALIAN_KELPIE',
  /** Australian Shepherd */
  AustralianShepherd = 'AUSTRALIAN_SHEPHERD',
  /** Australian Silky Terrier */
  AustralianSilkyTerrier = 'AUSTRALIAN_SILKY_TERRIER',
  /** Australian Stumpy Tail Cattle Dog */
  AustralianStumpyTailCattleDog = 'AUSTRALIAN_STUMPY_TAIL_CATTLE_DOG',
  /** Australian Terrier */
  AustralianTerrier = 'AUSTRALIAN_TERRIER',
  /** Australian Working Kelpie */
  AustralianWorkingKelpie = 'AUSTRALIAN_WORKING_KELPIE',
  /** Austrian Black And Tan Hound */
  AustrianBlackAndTanHound = 'AUSTRIAN_BLACK_AND_TAN_HOUND',
  /** Austrian Pinscher */
  AustrianPinscher = 'AUSTRIAN_PINSCHER',
  /** Azawakh */
  Azawakh = 'AZAWAKH',
  /** Bakharwal Dog */
  BakharwalDog = 'BAKHARWAL_DOG',
  /** Barak Hound */
  BarakHound = 'BARAK_HOUND',
  /** Barbet */
  Barbet = 'BARBET',
  /** Basenji */
  Basenji = 'BASENJI',
  /** Basset Artésien Normand */
  BassetArtesienNormand = 'BASSET_ARTESIEN_NORMAND',
  /** Basset Bleu De Gascogne */
  BassetBleuDeGascogne = 'BASSET_BLEU_DE_GASCOGNE',
  /** Basset Fauve De Bretagne */
  BassetFauveDeBretagne = 'BASSET_FAUVE_DE_BRETAGNE',
  /** Basset Hound */
  BassetHound = 'BASSET_HOUND',
  /** Bavarian Mountain Hound */
  BavarianMountainHound = 'BAVARIAN_MOUNTAIN_HOUND',
  /** Beagle */
  Beagle = 'BEAGLE',
  /** Beagle-harrier */
  BeagleHarrier = 'BEAGLE_HARRIER',
  /** Beaglier */
  Beaglier = 'BEAGLIER',
  /** Bearded Collie */
  BeardedCollie = 'BEARDED_COLLIE',
  /** Beauceron */
  Beauceron = 'BEAUCERON',
  /** Bedlington Terrier */
  BedlingtonTerrier = 'BEDLINGTON_TERRIER',
  /** Belgian Laekenois */
  BelgianLaekenois = 'BELGIAN_LAEKENOIS',
  /** Belgian Malinois */
  BelgianMalinois = 'BELGIAN_MALINOIS',
  /** Belgian Sheepdog */
  BelgianSheepdog = 'BELGIAN_SHEEPDOG',
  /** Belgian Shepherd / Laekenois */
  BelgianShepherdLaekenois = 'BELGIAN_SHEPHERD_LAEKENOIS',
  /** Belgian Shepherd / Malinois */
  BelgianShepherdMalinois = 'BELGIAN_SHEPHERD_MALINOIS',
  /** Belgian Shepherd / Sheepdog */
  BelgianShepherdSheepdog = 'BELGIAN_SHEPHERD_SHEEPDOG',
  /** Belgian Shepherd / Tervuren */
  BelgianShepherdTervuren = 'BELGIAN_SHEPHERD_TERVUREN',
  /** Belgian Tervuren */
  BelgianTervuren = 'BELGIAN_TERVUREN',
  /** Bergamasco Shepherd */
  BergamascoShepherd = 'BERGAMASCO_SHEPHERD',
  /** Berger Blanc Suisse */
  BergerBlancSuisse = 'BERGER_BLANC_SUISSE',
  /** Berger Picard */
  BergerPicard = 'BERGER_PICARD',
  /** Berner Laufhund */
  BernerLaufhund = 'BERNER_LAUFHUND',
  /** Bernese Mountain Dog */
  BerneseMountainDog = 'BERNESE_MOUNTAIN_DOG',
  /** Bichon Frise */
  BichonFrise = 'BICHON_FRISE',
  /** Bichon Yorkie */
  BichonYorkie = 'BICHON_YORKIE',
  /** Bichpoo */
  Bichpoo = 'BICHPOO',
  /** Billy */
  Billy = 'BILLY',
  /** Black And Tan Coonhound */
  BlackandTanCoonhound = 'BLACKAND_TAN_COONHOUND',
  /** Black And Tan Coonhound */
  BlackAndTanCoonhound = 'BLACK_AND_TAN_COONHOUND',
  /** Black Forest Hound */
  BlackForestHound = 'BLACK_FOREST_HOUND',
  /** Black Labrador Retriever */
  BlackLabradorRetriever = 'BLACK_LABRADOR_RETRIEVER',
  /** Black Mouth Cur */
  BlackMouthCur = 'BLACK_MOUTH_CUR',
  /** Black Norwegian Elkhound */
  BlackNorwegianElkhound = 'BLACK_NORWEGIAN_ELKHOUND',
  /** Black Russian Terrier */
  BlackRussianTerrier = 'BLACK_RUSSIAN_TERRIER',
  /** Bloodhound */
  Bloodhound = 'BLOODHOUND',
  /** Bluetick Coonhound */
  BluetickCoonhound = 'BLUETICK_COONHOUND',
  /** Blue Lacy */
  BlueLacy = 'BLUE_LACY',
  /** Boerboel */
  Boerboel = 'BOERBOEL',
  /** Bohemian Shepherd */
  BohemianShepherd = 'BOHEMIAN_SHEPHERD',
  /** Bolognese */
  Bolognese = 'BOLOGNESE',
  /** Borador */
  Borador = 'BORADOR',
  /** Border Collie */
  BorderCollie = 'BORDER_COLLIE',
  /** Border Terrier */
  BorderTerrier = 'BORDER_TERRIER',
  /** Borzoi */
  Borzoi = 'BORZOI',
  /** Boston Terrier */
  BostonTerrier = 'BOSTON_TERRIER',
  /** Bouvier Des Flanders */
  BouvierdesFlanders = 'BOUVIERDES_FLANDERS',
  /** Bouvier Des Ardennes */
  BouvierDesArdennes = 'BOUVIER_DES_ARDENNES',
  /** Bouvier Des Flandres */
  BouvierDesFlandres = 'BOUVIER_DES_FLANDRES',
  /** Boxer */
  Boxer = 'BOXER',
  /** Boykin Spaniel */
  BoykinSpaniel = 'BOYKIN_SPANIEL',
  /** Bracco Italiano */
  BraccoItaliano = 'BRACCO_ITALIANO',
  /** Braque D'auvergne */
  BraqueDauvergne = 'BRAQUE_DAUVERGNE',
  /** Braque Du Bourbonnais */
  BraqueDuBourbonnais = 'BRAQUE_DU_BOURBONNAIS',
  /** Braque Saint-germain */
  BraqueSaintGermain = 'BRAQUE_SAINT_GERMAIN',
  /** Brazilian Terrier */
  BrazilianTerrier = 'BRAZILIAN_TERRIER',
  /** Briard */
  Briard = 'BRIARD',
  /** Briquet Griffon Vendéen */
  BriquetGriffonVendeen = 'BRIQUET_GRIFFON_VENDEEN',
  /** Brittany */
  Brittany = 'BRITTANY',
  /** Brittany Spaniel */
  BrittanySpaniel = 'BRITTANY_SPANIEL',
  /** Broholmer */
  Broholmer = 'BROHOLMER',
  /** Brussels Griffon */
  BrusselsGriffon = 'BRUSSELS_GRIFFON',
  /** Bulldog */
  Bulldog = 'BULLDOG',
  /** Bullmastiff */
  Bullmastiff = 'BULLMASTIFF',
  /** Bully Kutta */
  BullyKutta = 'BULLY_KUTTA',
  /** Bull Boxer */
  BullBoxer = 'BULL_BOXER',
  /** Bull Terrier */
  BullTerrier = 'BULL_TERRIER',
  /** Cairn Terrier */
  CairnTerrier = 'CAIRN_TERRIER',
  /** Canaan Dog */
  CanaanDog = 'CANAAN_DOG',
  /** Canadian Eskimo Dog */
  CanadianEskimoDog = 'CANADIAN_ESKIMO_DOG',
  /** Cane Corso */
  CaneCorso = 'CANE_CORSO',
  /** Cane Corso Mastiff */
  CaneCorsoMastiff = 'CANE_CORSO_MASTIFF',
  /** Cao De Castro Laboreiro */
  CaoDeCastroLaboreiro = 'CAO_DE_CASTRO_LABOREIRO',
  /** Cao De Fila De Sao Miguel */
  CaoDeFilaDeSaoMiguel = 'CAO_DE_FILA_DE_SAO_MIGUEL',
  /** Cardigan Welsh Corgi */
  CardiganWelshCorgi = 'CARDIGAN_WELSH_CORGI',
  /** Carea Leonés */
  CareaLeones = 'CAREA_LEONES',
  /** Carolina Dog */
  CarolinaDog = 'CAROLINA_DOG',
  /** Carpathian Shepherd */
  CarpathianShepherd = 'CARPATHIAN_SHEPHERD',
  /** Carpathian Shepherd Dog */
  CarpathianShepherdDog = 'CARPATHIAN_SHEPHERD_DOG',
  /** Catahoula Leopard Dog */
  CatahoulaLeopardDog = 'CATAHOULA_LEOPARD_DOG',
  /** Catalan Sheepdog */
  CatalanSheepdog = 'CATALAN_SHEEPDOG',
  /** Cattle Dog */
  CattleDog = 'CATTLE_DOG',
  /** Caucasian Ovcharka */
  CaucasianOvcharka = 'CAUCASIAN_OVCHARKA',
  /** Caucasian Sheepdog / Caucasian Ovtcharka */
  CaucasianSheepdogCaucasianOvtcharka = 'CAUCASIAN_SHEEPDOG_CAUCASIAN_OVTCHARKA',
  /** Cavachon */
  Cavachon = 'CAVACHON',
  /** Cavalier King Charles Spaniel */
  CavalierKingCharlesSpaniel = 'CAVALIER_KING_CHARLES_SPANIEL',
  /** Central Asian Shepherd Dog */
  CentralAsianShepherdDog = 'CENTRAL_ASIAN_SHEPHERD_DOG',
  /** česky Fousek */
  CeskyFousek = 'CESKY_FOUSEK',
  /** Cesky Terrier */
  CeskyTerrier = 'CESKY_TERRIER',
  /** Chesapeake Bay Retriever */
  ChesapeakeBayRetriever = 'CHESAPEAKE_BAY_RETRIEVER',
  /** Chien Français Blanc Et Noir */
  ChienFrancaisBlancEtNoir = 'CHIEN_FRANCAIS_BLANC_ET_NOIR',
  /** Chien Français Blanc Et Orange */
  ChienFrancaisBlancEtOrange = 'CHIEN_FRANCAIS_BLANC_ET_ORANGE',
  /** Chien Français Tricolore */
  ChienFrancaisTricolore = 'CHIEN_FRANCAIS_TRICOLORE',
  /** Chihuahua */
  Chihuahua = 'CHIHUAHUA',
  /** Chilean Fox Terrier */
  ChileanFoxTerrier = 'CHILEAN_FOX_TERRIER',
  /** Chinese Chongqing Dog */
  ChineseChongqingDog = 'CHINESE_CHONGQING_DOG',
  /** Chinese Crested */
  ChineseCrested = 'CHINESE_CRESTED',
  /** Chinese Crested Dog */
  ChineseCrestedDog = 'CHINESE_CRESTED_DOG',
  /** Chinese Foo Dog */
  ChineseFooDog = 'CHINESE_FOO_DOG',
  /** Chinese Imperial */
  ChineseImperial = 'CHINESE_IMPERIAL',
  /** Chinese Shar-pei */
  ChineseSharPei = 'CHINESE_SHAR_PEI',
  /** Chinook */
  Chinook = 'CHINOOK',
  /** Chion */
  Chion = 'CHION',
  /** Chippiparai */
  Chippiparai = 'CHIPPIPARAI',
  /** Chizer */
  Chizer = 'CHIZER',
  /** Chocolate Labrador Retriever */
  ChocolateLabradorRetriever = 'CHOCOLATE_LABRADOR_RETRIEVER',
  /** Chorkie */
  Chorkie = 'CHORKIE',
  /** Chow Chow */
  ChowChow = 'CHOW_CHOW',
  /** Cimarrón Uruguayo */
  CimarronUruguayo = 'CIMARRON_URUGUAYO',
  /** Cirneco Dell'Etna */
  CirnecodellEtna = 'CIRNECODELL_ETNA',
  /** Cirneco Dell'etna */
  CirnecoDelletna = 'CIRNECO_DELLETNA',
  /** Clumber Spaniel */
  ClumberSpaniel = 'CLUMBER_SPANIEL',
  /** Cockapoo */
  Cockapoo = 'COCKAPOO',
  /** Cockerpoo */
  Cockerpoo = 'COCKERPOO',
  /** Cocker Spaniel */
  CockerSpaniel = 'COCKER_SPANIEL',
  /** Collie */
  Collie = 'COLLIE',
  /** Coonhound */
  Coonhound = 'COONHOUND',
  /** Corgi */
  Corgi = 'CORGI',
  /** Corsican Dog */
  CorsicanDog = 'CORSICAN_DOG',
  /** Coton De Tulear */
  CotondeTulear = 'COTONDE_TULEAR',
  /** Coton De Tulear */
  CotonDeTulear = 'COTON_DE_TULEAR',
  /** Cretan Hound */
  CretanHound = 'CRETAN_HOUND',
  /** Croatian Sheepdog */
  CroatianSheepdog = 'CROATIAN_SHEEPDOG',
  /** Curly-Coated Retriever */
  CurlyCoatedRetriever = 'CURLY_COATED_RETRIEVER',
  /** Czechoslovakian Vlcak */
  CzechoslovakianVlcak = 'CZECHOSLOVAKIAN_VLCAK',
  /** Dachshund */
  Dachshund = 'DACHSHUND',
  /** Dalmatian */
  Dalmatian = 'DALMATIAN',
  /** Dandie Dinmont Terrier */
  DandieDinmontTerrier = 'DANDIE_DINMONT_TERRIER',
  /** Dandi Dinmont Terrier */
  DandiDinmontTerrier = 'DANDI_DINMONT_TERRIER',
  /** Danish-swedish Farmdog */
  DanishSwedishFarmdog = 'DANISH_SWEDISH_FARMDOG',
  /** Deutscher Wachtelhund */
  DeutscherWachtelhund = 'DEUTSCHER_WACHTELHUND',
  /** Deutsche Bracke */
  DeutscheBracke = 'DEUTSCHE_BRACKE',
  /** Doberman Pinscher */
  DobermanPinscher = 'DOBERMAN_PINSCHER',
  /** Dogo Argentino */
  DogoArgentino = 'DOGO_ARGENTINO',
  /** Dogue De Bordeaux */
  DoguedeBordeaux = 'DOGUEDE_BORDEAUX',
  /** Dogue De Bordeaux */
  DogueDeBordeaux = 'DOGUE_DE_BORDEAUX',
  /** Doxiepoo */
  Doxiepoo = 'DOXIEPOO',
  /** Drentsche Patrijshond */
  DrentschePatrijshond = 'DRENTSCHE_PATRIJSHOND',
  /** Drever */
  Drever = 'DREVER',
  /** Dunker */
  Dunker = 'DUNKER',
  /** Dutch Shepherd */
  DutchShepherd = 'DUTCH_SHEPHERD',
  /** Dutch Shepherd Dog */
  DutchShepherdDog = 'DUTCH_SHEPHERD_DOG',
  /** Dutch Smoushond */
  DutchSmoushond = 'DUTCH_SMOUSHOND',
  /** East Siberian Laika */
  EastSiberianLaika = 'EAST_SIBERIAN_LAIKA',
  /** Elo */
  Elo = 'ELO',
  /** English Bulldog */
  EnglishBulldog = 'ENGLISH_BULLDOG',
  /** English Cocker Spaniel */
  EnglishCockerSpaniel = 'ENGLISH_COCKER_SPANIEL',
  /** English Coonhound */
  EnglishCoonhound = 'ENGLISH_COONHOUND',
  /** English Foxhound */
  EnglishFoxhound = 'ENGLISH_FOXHOUND',
  /** English Pointer */
  EnglishPointer = 'ENGLISH_POINTER',
  /** English Setter */
  EnglishSetter = 'ENGLISH_SETTER',
  /** English Shepherd */
  EnglishShepherd = 'ENGLISH_SHEPHERD',
  /** English Springer Spaniel */
  EnglishSpringerSpaniel = 'ENGLISH_SPRINGER_SPANIEL',
  /** English Toy Spaniel */
  EnglishToySpaniel = 'ENGLISH_TOY_SPANIEL',
  /** English Toy Terrier */
  EnglishToyTerrier = 'ENGLISH_TOY_TERRIER',
  /** Entlebucher */
  Entlebucher = 'ENTLEBUCHER',
  /** Entlebucher Mountain Dog */
  EntlebucherMountainDog = 'ENTLEBUCHER_MOUNTAIN_DOG',
  /** épagneul Bleu De Picardie */
  EpagneulBleuDePicardie = 'EPAGNEUL_BLEU_DE_PICARDIE',
  /** Eskimo Dog */
  EskimoDog = 'ESKIMO_DOG',
  /** Estonian Hound */
  EstonianHound = 'ESTONIAN_HOUND',
  /** Estrela Mountain Dog */
  EstrelaMountainDog = 'ESTRELA_MOUNTAIN_DOG',
  /** Eurasier */
  Eurasier = 'EURASIER',
  /** Feist */
  Feist = 'FEIST',
  /** Field Spaniel */
  FieldSpaniel = 'FIELD_SPANIEL',
  /** Fila Brasileiro */
  FilaBrasileiro = 'FILA_BRASILEIRO',
  /** Finnish Hound */
  FinnishHound = 'FINNISH_HOUND',
  /** Finnish Lapphund */
  FinnishLapphund = 'FINNISH_LAPPHUND',
  /** Finnish Spitz */
  FinnishSpitz = 'FINNISH_SPITZ',
  /** Flat-Coated Retriever */
  FlatCoatedRetriever = 'FLAT_COATED_RETRIEVER',
  /** Formosan Mountain Dog */
  FormosanMountainDog = 'FORMOSAN_MOUNTAIN_DOG',
  /** Foxhound */
  Foxhound = 'FOXHOUND',
  /** Fox Terrier */
  FoxTerrier = 'FOX_TERRIER',
  /** French Bulldog */
  FrenchBulldog = 'FRENCH_BULLDOG',
  /** French Gascony Pointer */
  FrenchGasconyPointer = 'FRENCH_GASCONY_POINTER',
  /** French Pyrenean Pointer */
  FrenchPyreneanPointer = 'FRENCH_PYRENEAN_POINTER',
  /** French Spaniel */
  FrenchSpaniel = 'FRENCH_SPANIEL',
  /** Gaddi Kutta */
  GaddiKutta = 'GADDI_KUTTA',
  /** Galgo Español */
  GalgoEspanol = 'GALGO_ESPANOL',
  /** Galgo Spanish Greyhound */
  GalgoSpanishGreyhound = 'GALGO_SPANISH_GREYHOUND',
  /** Georgian Shepherd Dog */
  GeorgianShepherdDog = 'GEORGIAN_SHEPHERD_DOG',
  /** German Longhaired Pointer */
  GermanLonghairedPointer = 'GERMAN_LONGHAIRED_POINTER',
  /** German Pinscher */
  GermanPinscher = 'GERMAN_PINSCHER',
  /** German Shepherd Dog */
  GermanShepherdDog = 'GERMAN_SHEPHERD_DOG',
  /** German Shorthaired Pointer */
  GermanShorthairedPointer = 'GERMAN_SHORTHAIRED_POINTER',
  /** German Spitz */
  GermanSpitz = 'GERMAN_SPITZ',
  /** German Wirehaired Pointer */
  GermanWirehairedPointer = 'GERMAN_WIREHAIRED_POINTER',
  /** German Wolfspitz */
  GermanWolfspitz = 'GERMAN_WOLFSPITZ',
  /** Giant Schnauzer */
  GiantSchnauzer = 'GIANT_SCHNAUZER',
  /** Glen Of Imaal Terrier */
  GlenofImaalTerrier = 'GLENOF_IMAAL_TERRIER',
  /** Glen Of Imaal Terrier */
  GlenOfImaalTerrier = 'GLEN_OF_IMAAL_TERRIER',
  /** Goldendoodle */
  Goldendoodle = 'GOLDENDOODLE',
  /** Golden Retriever */
  GoldenRetriever = 'GOLDEN_RETRIEVER',
  /** Gollie */
  Gollie = 'GOLLIE',
  /** Gordon Setter */
  GordonSetter = 'GORDON_SETTER',
  /** Grand Anglo-français Blanc Et Noir */
  GrandAngloFrancaisBlancEtNoir = 'GRAND_ANGLO_FRANCAIS_BLANC_ET_NOIR',
  /** Grand Anglo-français Blanc Et Orange */
  GrandAngloFrancaisBlancEtOrange = 'GRAND_ANGLO_FRANCAIS_BLANC_ET_ORANGE',
  /** Grand Anglo-francais Tricolore */
  GrandAngloFrancaisTricolore = 'GRAND_ANGLO_FRANCAIS_TRICOLORE',
  /** Grand Basset Griffon Vendéen */
  GrandBassetGriffonVendeen = 'GRAND_BASSET_GRIFFON_VENDEEN',
  /** Grand Bleu De Gascogne */
  GrandBleuDeGascogne = 'GRAND_BLEU_DE_GASCOGNE',
  /** Grand Gascon Saintongeois */
  GrandGasconSaintongeois = 'GRAND_GASCON_SAINTONGEOIS',
  /** Grand Griffon Vendéen */
  GrandGriffonVendeen = 'GRAND_GRIFFON_VENDEEN',
  /** Greater Swiss Mountain Dog */
  GreaterSwissMountainDog = 'GREATER_SWISS_MOUNTAIN_DOG',
  /** Great Dane */
  GreatDane = 'GREAT_DANE',
  /** Great Pyrenees */
  GreatPyrenees = 'GREAT_PYRENEES',
  /** Greek Shepherd */
  GreekShepherd = 'GREEK_SHEPHERD',
  /** Greenland Dog */
  GreenlandDog = 'GREENLAND_DOG',
  /** Greyhound */
  Greyhound = 'GREYHOUND',
  /** Griffon Bleu De Gascogne */
  GriffonBleuDeGascogne = 'GRIFFON_BLEU_DE_GASCOGNE',
  /** Griffon Fauve De Bretagne */
  GriffonFauveDeBretagne = 'GRIFFON_FAUVE_DE_BRETAGNE',
  /** Griffon Nivernais */
  GriffonNivernais = 'GRIFFON_NIVERNAIS',
  /** Haldenstøver */
  Haldenstver = 'HALDENSTVER',
  /** Hamiltonstovare */
  Hamiltonstovare = 'HAMILTONSTOVARE',
  /** Hanover Hound */
  HanoverHound = 'HANOVER_HOUND',
  /** Harrier */
  Harrier = 'HARRIER',
  /** Havanese */
  Havanese = 'HAVANESE',
  /** Hellenic Hound */
  HellenicHound = 'HELLENIC_HOUND',
  /** Himalayan Sheepdog */
  HimalayanSheepdog = 'HIMALAYAN_SHEEPDOG',
  /** Hokkaido-ken */
  HokkaidoKen = 'HOKKAIDO_KEN',
  /** Hound */
  Hound = 'HOUND',
  /** Hovawart */
  Hovawart = 'HOVAWART',
  /** Hungarian Hound */
  HungarianHound = 'HUNGARIAN_HOUND',
  /** Huntaway */
  Huntaway = 'HUNTAWAY',
  /** Husky */
  Husky = 'HUSKY',
  /** Hygenhund */
  Hygenhund = 'HYGENHUND',
  /** Ibizan Hound */
  IbizanHound = 'IBIZAN_HOUND',
  /** Icelandic Sheepdog */
  IcelandicSheepdog = 'ICELANDIC_SHEEPDOG',
  /** Illyrian Sheepdog */
  IllyrianSheepdog = 'ILLYRIAN_SHEEPDOG',
  /** Indian Pariah Dog */
  IndianPariahDog = 'INDIAN_PARIAH_DOG',
  /** Indian Spitz */
  IndianSpitz = 'INDIAN_SPITZ',
  /** Irish Red And White Setter */
  IrishRedAndWhiteSetter = 'IRISH_RED_AND_WHITE_SETTER',
  /** Irish Setter */
  IrishSetter = 'IRISH_SETTER',
  /** Irish Terrier */
  IrishTerrier = 'IRISH_TERRIER',
  /** Irish Water Spaniel */
  IrishWaterSpaniel = 'IRISH_WATER_SPANIEL',
  /** Irish Wolfhound */
  IrishWolfhound = 'IRISH_WOLFHOUND',
  /** Istrian Coarse-haired Hound */
  IstrianCoarseHairedHound = 'ISTRIAN_COARSE_HAIRED_HOUND',
  /** Istrian Short-haired Hound */
  IstrianShortHairedHound = 'ISTRIAN_SHORT_HAIRED_HOUND',
  /** Italian Greyhound */
  ItalianGreyhound = 'ITALIAN_GREYHOUND',
  /** Italian Spinone */
  ItalianSpinone = 'ITALIAN_SPINONE',
  /** Jack-a-bee */
  JackABee = 'JACK_A_BEE',
  /** Jack-a-poo */
  JackAPoo = 'JACK_A_POO',
  /** Jack Russell Terrier */
  JackRussellTerrier = 'JACK_RUSSELL_TERRIER',
  /** Jack Russell Terrier (Parson) */
  JackRussellTerrierParson = 'JACK_RUSSELL_TERRIER_PARSON',
  /** Jagdterrier */
  Jagdterrier = 'JAGDTERRIER',
  /** Jämthund */
  Jamthund = 'JAMTHUND',
  /** Japanese Chin */
  JapaneseChin = 'JAPANESE_CHIN',
  /** Japanese Spitz */
  JapaneseSpitz = 'JAPANESE_SPITZ',
  /** Jindo */
  Jindo = 'JINDO',
  /** Kai Dog */
  KaiDog = 'KAI_DOG',
  /** Kai-ken */
  KaiKen = 'KAI_KEN',
  /** Kangal Dog */
  KangalDog = 'KANGAL_DOG',
  /** Kanni */
  Kanni = 'KANNI',
  /** Karakachan Dog */
  KarakachanDog = 'KARAKACHAN_DOG',
  /** Karelian Bear Dog */
  KarelianBearDog = 'KARELIAN_BEAR_DOG',
  /** Karst Shepherd Dog */
  KarstShepherdDog = 'KARST_SHEPHERD_DOG',
  /** Keeshond */
  Keeshond = 'KEESHOND',
  /** Kerry Beagle */
  KerryBeagle = 'KERRY_BEAGLE',
  /** Kerry Blue Terrier */
  KerryBlueTerrier = 'KERRY_BLUE_TERRIER',
  /** King Charles Spaniel */
  KingCharlesSpaniel = 'KING_CHARLES_SPANIEL',
  /** King Shepherd */
  KingShepherd = 'KING_SHEPHERD',
  /** Kintamani */
  Kintamani = 'KINTAMANI',
  /** Kishu */
  Kishu = 'KISHU',
  /** Kishu-ken */
  KishuKen = 'KISHU_KEN',
  /** Klee Kai */
  KleeKai = 'KLEE_KAI',
  /** Komondor */
  Komondor = 'KOMONDOR',
  /** Kooikerhondje */
  Kooikerhondje = 'KOOIKERHONDJE',
  /** Koolie */
  Koolie = 'KOOLIE',
  /** Korean Jindo */
  KoreanJindo = 'KOREAN_JINDO',
  /** Kromfohrländer */
  Kromfohrlander = 'KROMFOHRLANDER',
  /** Kuvasz */
  Kuvasz = 'KUVASZ',
  /** Kyi Leo */
  KyiLeo = 'KYI_LEO',
  /** Labradinger */
  Labradinger = 'LABRADINGER',
  /** Labradoodle */
  Labradoodle = 'LABRADOODLE',
  /** Labrador Husky */
  LabradorHusky = 'LABRADOR_HUSKY',
  /** Labrador Retriever */
  LabradorRetriever = 'LABRADOR_RETRIEVER',
  /** Lagotto Romagnolo */
  LagottoRomagnolo = 'LAGOTTO_ROMAGNOLO',
  /** Lakeland Terrier */
  LakelandTerrier = 'LAKELAND_TERRIER',
  /** Lancashire Heeler */
  LancashireHeeler = 'LANCASHIRE_HEELER',
  /** Landseer */
  Landseer = 'LANDSEER',
  /** Lapponian Herder */
  LapponianHerder = 'LAPPONIAN_HERDER',
  /** Large Münsterländer */
  LargeMunsterlander = 'LARGE_MUNSTERLANDER',
  /** Leonberger */
  Leonberger = 'LEONBERGER',
  /** Lhasa Apso */
  LhasaApso = 'LHASA_APSO',
  /** Longdog */
  Longdog = 'LONGDOG',
  /** Lowchen */
  Lowchen = 'LOWCHEN',
  /** Lurcher */
  Lurcher = 'LURCHER',
  /** Magyar Agár */
  MagyarAgar = 'MAGYAR_AGAR',
  /** Majorca Mastiff */
  MajorcaMastiff = 'MAJORCA_MASTIFF',
  /** Maltese */
  Maltese = 'MALTESE',
  /** Maltipoo */
  Maltipoo = 'MALTIPOO',
  /** Mal-shi */
  MalShi = 'MAL_SHI',
  /** Manchester Terrier */
  ManchesterTerrier = 'MANCHESTER_TERRIER',
  /** Maremma Sheepdog */
  MaremmaSheepdog = 'MAREMMA_SHEEPDOG',
  /** Mastiff */
  Mastiff = 'MASTIFF',
  /** Mcnab */
  Mcnab = 'MCNAB',
  /** Mcnab */
  McNab = 'MC_NAB',
  /** Miniature Austrialian Shepherd */
  MiniatureAustrialianShepherd = 'MINIATURE_AUSTRIALIAN_SHEPHERD',
  /** Miniature Bull Terrier */
  MiniatureBullTerrier = 'MINIATURE_BULL_TERRIER',
  /** Miniature Fox Terrier */
  MiniatureFoxTerrier = 'MINIATURE_FOX_TERRIER',
  /** Miniature Pinscher */
  MiniaturePinscher = 'MINIATURE_PINSCHER',
  /** Miniature Poodle */
  MiniaturePoodle = 'MINIATURE_POODLE',
  /** Miniature Schnauzer */
  MiniatureSchnauzer = 'MINIATURE_SCHNAUZER',
  /** Miniature Shar Pei */
  MiniatureSharPei = 'MINIATURE_SHAR_PEI',
  /** Mioritic */
  Mioritic = 'MIORITIC',
  /** Mioritic Shepherd */
  MioriticShepherd = 'MIORITIC_SHEPHERD',
  /** Mixed Breed */
  MixedBreed = 'MIXED_BREED',
  /** Montenegrin Mountain Hound */
  MontenegrinMountainHound = 'MONTENEGRIN_MOUNTAIN_HOUND',
  /** Moscow Watchdog */
  MoscowWatchdog = 'MOSCOW_WATCHDOG',
  /** Mountain Cur */
  MountainCur = 'MOUNTAIN_CUR',
  /** Mountain Dog */
  MountainDog = 'MOUNTAIN_DOG',
  /** Mountain Feist */
  MountainFeist = 'MOUNTAIN_FEIST',
  /** Mudhol Hound */
  MudholHound = 'MUDHOL_HOUND',
  /** Mudi */
  Mudi = 'MUDI',
  /** Munsterlander */
  Munsterlander = 'MUNSTERLANDER',
  /** Neapolitan Mastiff */
  NeapolitanMastiff = 'NEAPOLITAN_MASTIFF',
  /** Newfoundland */
  Newfoundland = 'NEWFOUNDLAND',
  /** Newfoundland Dog */
  NewfoundlandDog = 'NEWFOUNDLAND_DOG',
  /** New Guinea Singing Dog */
  NewGuineaSingingDog = 'NEW_GUINEA_SINGING_DOG',
  /** New Zealand Heading Dog */
  NewZealandHeadingDog = 'NEW_ZEALAND_HEADING_DOG',
  /** Niederlaufhund */
  Niederlaufhund = 'NIEDERLAUFHUND',
  /** Nippon Terrier */
  NipponTerrier = 'NIPPON_TERRIER',
  /** Nordic Spitz */
  NordicSpitz = 'NORDIC_SPITZ',
  /** Norfolk Terrier */
  NorfolkTerrier = 'NORFOLK_TERRIER',
  /** Northern Inuit Dog */
  NorthernInuitDog = 'NORTHERN_INUIT_DOG',
  /** Norwegian Buhund */
  NorwegianBuhund = 'NORWEGIAN_BUHUND',
  /** Norwegian Elkhound */
  NorwegianElkhound = 'NORWEGIAN_ELKHOUND',
  /** Norwegian Lundehund */
  NorwegianLundehund = 'NORWEGIAN_LUNDEHUND',
  /** Norwich Terrier */
  NorwichTerrier = 'NORWICH_TERRIER',
  /** Nova Scotia Duck Tolling Retriever */
  NovaScotiaDuckTollingRetriever = 'NOVA_SCOTIA_DUCK_TOLLING_RETRIEVER',
  /** Olde English Bulldogge */
  OldeEnglishBulldogge = 'OLDE_ENGLISH_BULLDOGGE',
  /** Old Croatian Sighthound */
  OldCroatianSighthound = 'OLD_CROATIAN_SIGHTHOUND',
  /** Old Danish Pointer */
  OldDanishPointer = 'OLD_DANISH_POINTER',
  /** Old English Sheepdog */
  OldEnglishSheepdog = 'OLD_ENGLISH_SHEEPDOG',
  /** Otterhound */
  Otterhound = 'OTTERHOUND',
  /** Papillon */
  Papillon = 'PAPILLON',
  /** Parson Russell Terrier */
  ParsonRussellTerrier = 'PARSON_RUSSELL_TERRIER',
  /** Patterdale Terrier */
  PatterdaleTerrier = 'PATTERDALE_TERRIER',
  /** Patterdale Terrier / Fell Terrier */
  PatterdaleTerrierFellTerrier = 'PATTERDALE_TERRIER_FELL_TERRIER',
  /** Pekingese */
  Pekingese = 'PEKINGESE',
  /** Pembroke Welsh Corgi */
  PembrokeWelshCorgi = 'PEMBROKE_WELSH_CORGI',
  /** Perro De Pastor Mallorquin */
  PerroDePastorMallorquin = 'PERRO_DE_PASTOR_MALLORQUIN',
  /** Perro De Presa Canario */
  PerroDePresaCanario = 'PERRO_DE_PRESA_CANARIO',
  /** Perro Fino Colombiano */
  PerroFinoColombiano = 'PERRO_FINO_COLOMBIANO',
  /** Persian Mastiff */
  PersianMastiff = 'PERSIAN_MASTIFF',
  /** Peruvian Hairless */
  PeruvianHairless = 'PERUVIAN_HAIRLESS',
  /** Peruvian Inca Orchid */
  PeruvianIncaOrchid = 'PERUVIAN_INCA_ORCHID',
  /** Petit Basset Griffon Vendeen */
  PetitBassetGriffonVendeen = 'PETIT_BASSET_GRIFFON_VENDEEN',
  /** Petit Bleu De Gascogne */
  PetitBleuDeGascogne = 'PETIT_BLEU_DE_GASCOGNE',
  /** Phalène */
  Phalene = 'PHALENE',
  /** Pharaoh Hound */
  PharaohHound = 'PHARAOH_HOUND',
  /** Phu Quoc Ridgeback */
  PhuQuocRidgeback = 'PHU_QUOC_RIDGEBACK',
  /** Picardy Spaniel */
  PicardySpaniel = 'PICARDY_SPANIEL',
  /** Piccolo Lepraiolo Italiano */
  PiccoloLepraioloItaliano = 'PICCOLO_LEPRAIOLO_ITALIANO',
  /** Pit Bull Terrier */
  PitBullTerrier = 'PIT_BULL_TERRIER',
  /** Plott */
  Plott = 'PLOTT',
  /** Plott Hound */
  PlottHound = 'PLOTT_HOUND',
  /** Plummer Terrier */
  PlummerTerrier = 'PLUMMER_TERRIER',
  /** Podenco Canario */
  PodencoCanario = 'PODENCO_CANARIO',
  /** Podengo Portugueso */
  PodengoPortugueso = 'PODENGO_PORTUGUESO',
  /** Pointer */
  Pointer = 'POINTER',
  /** Poitevin */
  Poitevin = 'POITEVIN',
  /** Polish Greyhound */
  PolishGreyhound = 'POLISH_GREYHOUND',
  /** Polish Hound */
  PolishHound = 'POLISH_HOUND',
  /** Polish Hunting Dog */
  PolishHuntingDog = 'POLISH_HUNTING_DOG',
  /** Polish Lowland Sheepdog */
  PolishLowlandSheepdog = 'POLISH_LOWLAND_SHEEPDOG',
  /** Pomeranian */
  Pomeranian = 'POMERANIAN',
  /** Pont-audemer Spaniel */
  PontAudemerSpaniel = 'PONT_AUDEMER_SPANIEL',
  /** Poodle */
  Poodle = 'POODLE',
  /** Porcelaine */
  Porcelaine = 'PORCELAINE',
  /** Portuguese Podengo */
  PortuguesePodengo = 'PORTUGUESE_PODENGO',
  /** Portuguese Pointer */
  PortuguesePointer = 'PORTUGUESE_POINTER',
  /** Portuguese Sheepdog */
  PortugueseSheepdog = 'PORTUGUESE_SHEEPDOG',
  /** Portuguese Water Dog */
  PortugueseWaterDog = 'PORTUGUESE_WATER_DOG',
  /** Posavac Hound */
  PosavacHound = 'POSAVAC_HOUND',
  /** Presa Canario */
  PresaCanario = 'PRESA_CANARIO',
  /** Pudelpointer */
  Pudelpointer = 'PUDELPOINTER',
  /** Pug */
  Pug = 'PUG',
  /** Puggle */
  Puggle = 'PUGGLE',
  /** Puli */
  Puli = 'PULI',
  /** Pumi */
  Pumi = 'PUMI',
  /** Pungsan */
  Pungsan = 'PUNGSAN',
  /** Pyrenean Mastiff */
  PyreneanMastiff = 'PYRENEAN_MASTIFF',
  /** Pyrenean Shepherd */
  PyreneanShepherd = 'PYRENEAN_SHEPHERD',
  /** Rampur Greyhound */
  RampurGreyhound = 'RAMPUR_GREYHOUND',
  /** Ratonero Bodeguero Andaluz */
  RatoneroBodegueroAndaluz = 'RATONERO_BODEGUERO_ANDALUZ',
  /** Rat Terrier */
  RatTerrier = 'RAT_TERRIER',
  /** Redbone Coonhound */
  RedboneCoonhound = 'REDBONE_COONHOUND',
  /** Retriever */
  Retriever = 'RETRIEVER',
  /** Rhodesian Ridgeback */
  RhodesianRidgeback = 'RHODESIAN_RIDGEBACK',
  /** Rottweiler */
  Rottweiler = 'ROTTWEILER',
  /** Rough Collie */
  RoughCollie = 'ROUGH_COLLIE',
  /** Rough-haired Iletsua */
  RoughHairedIletsua = 'ROUGH_HAIRED_ILETSUA',
  /** Russian Spaniel */
  RussianSpaniel = 'RUSSIAN_SPANIEL',
  /** Russian Toy */
  RussianToy = 'RUSSIAN_TOY',
  /** Russo-european Laika */
  RussoEuropeanLaika = 'RUSSO_EUROPEAN_LAIKA',
  /** Saarlooswolfhound */
  Saarlooswolfhound = 'SAARLOOSWOLFHOUND',
  /** Sabueso Español */
  SabuesoEspanol = 'SABUESO_ESPANOL',
  /** Sage Koochee */
  SageKoochee = 'SAGE_KOOCHEE',
  /** Saint Bernard / St. Bernard */
  SaintBernardStBernard = 'SAINT_BERNARD_ST_BERNARD',
  /** Saint-usuge Spaniel */
  SaintUsugeSpaniel = 'SAINT_USUGE_SPANIEL',
  /** Saluki */
  Saluki = 'SALUKI',
  /** Samoyed */
  Samoyed = 'SAMOYED',
  /** Sarplaninac */
  Sarplaninac = 'SARPLANINAC',
  /** Schapendoes */
  Schapendoes = 'SCHAPENDOES',
  /** Schillerstövare */
  Schillerstovare = 'SCHILLERSTOVARE',
  /** Schipperke */
  Schipperke = 'SCHIPPERKE',
  /** Schnauzer */
  Schnauzer = 'SCHNAUZER',
  /** Schnoodle */
  Schnoodle = 'SCHNOODLE',
  /** Schweizer Laufhund */
  SchweizerLaufhund = 'SCHWEIZER_LAUFHUND',
  /** Scottish Deerhound */
  ScottishDeerhound = 'SCOTTISH_DEERHOUND',
  /** Scottish Terrier */
  ScottishTerrier = 'SCOTTISH_TERRIER',
  /** Scottish Terrier Scottie */
  ScottishTerrierScottie = 'SCOTTISH_TERRIER_SCOTTIE',
  /** Sealyham Terrier */
  SealyhamTerrier = 'SEALYHAM_TERRIER',
  /** Segugio Italiano */
  SegugioItaliano = 'SEGUGIO_ITALIANO',
  /** Segugio Maremmano */
  SegugioMaremmano = 'SEGUGIO_MAREMMANO',
  /** Seppala Siberian Sleddog */
  SeppalaSiberianSleddog = 'SEPPALA_SIBERIAN_SLEDDOG',
  /** Serbian Hound */
  SerbianHound = 'SERBIAN_HOUND',
  /** Serbian Tricolor Hound */
  SerbianTricolorHound = 'SERBIAN_TRICOLOR_HOUND',
  /** Setter */
  Setter = 'SETTER',
  /** Shar Pei */
  SharPei = 'SHAR_PEI',
  /** Sheep Dog */
  SheepDog = 'SHEEP_DOG',
  /** Shepherd */
  Shepherd = 'SHEPHERD',
  /** Shetland Sheepdog */
  ShetlandSheepdog = 'SHETLAND_SHEEPDOG',
  /** Shetland Sheepdog Sheltie */
  ShetlandSheepdogSheltie = 'SHETLAND_SHEEPDOG_SHELTIE',
  /** Shiba Inu */
  ShibaInu = 'SHIBA_INU',
  /** Shih-poo */
  ShihPoo = 'SHIH_POO',
  /** Shih Tzu */
  ShihTzu = 'SHIH_TZU',
  /** Shikoku */
  Shikoku = 'SHIKOKU',
  /** Shiloh Shepherd */
  ShilohShepherd = 'SHILOH_SHEPHERD',
  /** Shorty Bull */
  ShortyBull = 'SHORTY_BULL',
  /** Siberian Husky */
  SiberianHusky = 'SIBERIAN_HUSKY',
  /** Silken Windhound */
  SilkenWindhound = 'SILKEN_WINDHOUND',
  /** Silky Terrier */
  SilkyTerrier = 'SILKY_TERRIER',
  /** Skye Terrier */
  SkyeTerrier = 'SKYE_TERRIER',
  /** Sloughi */
  Sloughi = 'SLOUGHI',
  /** Slovakian Rough-haired Pointer */
  SlovakianRoughHairedPointer = 'SLOVAKIAN_ROUGH_HAIRED_POINTER',
  /** Slovak Cuvac */
  SlovakCuvac = 'SLOVAK_CUVAC',
  /** Smålandsstövare */
  Smalandsstovare = 'SMALANDSSTOVARE',
  /** Small Greek Domestic Dog */
  SmallGreekDomesticDog = 'SMALL_GREEK_DOMESTIC_DOG',
  /** Small Münsterländer */
  SmallMunsterlander = 'SMALL_MUNSTERLANDER',
  /** Smooth Collie */
  SmoothCollie = 'SMOOTH_COLLIE',
  /** Smooth Fox Terrier */
  SmoothFoxTerrier = 'SMOOTH_FOX_TERRIER',
  /** Soft-coated Wheaten Terrier */
  SoftCoatedWheatenTerrier = 'SOFT_COATED_WHEATEN_TERRIER',
  /** South Russian Ovcharka */
  SouthRussianOvcharka = 'SOUTH_RUSSIAN_OVCHARKA',
  /** South Russian Ovtcharka */
  SouthRussianOvtcharka = 'SOUTH_RUSSIAN_OVTCHARKA',
  /** Spaniel */
  Spaniel = 'SPANIEL',
  /** Spanish Mastiff */
  SpanishMastiff = 'SPANISH_MASTIFF',
  /** Spanish Water Dog */
  SpanishWaterDog = 'SPANISH_WATER_DOG',
  /** Spinone Italiano */
  SpinoneItaliano = 'SPINONE_ITALIANO',
  /** Spitz */
  Spitz = 'SPITZ',
  /** Sporting Lucas Terrier */
  SportingLucasTerrier = 'SPORTING_LUCAS_TERRIER',
  /** Stabyhoun */
  Stabyhoun = 'STABYHOUN',
  /** Staffordshire Bull Terrier */
  StaffordshireBullTerrier = 'STAFFORDSHIRE_BULL_TERRIER',
  /** Standard Poodle */
  StandardPoodle = 'STANDARD_POODLE',
  /** Standard Schnauzer */
  StandardSchnauzer = 'STANDARD_SCHNAUZER',
  /** Styrian Coarse-haired Hound */
  StyrianCoarseHairedHound = 'STYRIAN_COARSE_HAIRED_HOUND',
  /** St. Bernard */
  StBernard = 'ST_BERNARD',
  /** St. Hubert Jura Hound */
  StHubertJuraHound = 'ST_HUBERT_JURA_HOUND',
  /** Sussex Spaniel */
  SussexSpaniel = 'SUSSEX_SPANIEL',
  /** Swedish Lapphund */
  SwedishLapphund = 'SWEDISH_LAPPHUND',
  /** Swedish Vallhund */
  SwedishVallhund = 'SWEDISH_VALLHUND',
  /** Swiss Jura Hound */
  SwissJuraHound = 'SWISS_JURA_HOUND',
  /** Swiss Lucerne Hound */
  SwissLucerneHound = 'SWISS_LUCERNE_HOUND',
  /** Taigan */
  Taigan = 'TAIGAN',
  /** Tamaskan Dog */
  TamaskanDog = 'TAMASKAN_DOG',
  /** Tatra Shepherd Dog */
  TatraShepherdDog = 'TATRA_SHEPHERD_DOG',
  /** Teddy Roosevelt Terrier */
  TeddyRooseveltTerrier = 'TEDDY_ROOSEVELT_TERRIER',
  /** Tenterfield Terrier */
  TenterfieldTerrier = 'TENTERFIELD_TERRIER',
  /** Terrier */
  Terrier = 'TERRIER',
  /** Thai Bangkaew Dog */
  ThaiBangkaewDog = 'THAI_BANGKAEW_DOG',
  /** Thai Ridgeback */
  ThaiRidgeback = 'THAI_RIDGEBACK',
  /** Tibetan Kyi Apso */
  TibetanKyiApso = 'TIBETAN_KYI_APSO',
  /** Tibetan Mastiff */
  TibetanMastiff = 'TIBETAN_MASTIFF',
  /** Tibetan Spaniel */
  TibetanSpaniel = 'TIBETAN_SPANIEL',
  /** Tibetan Terrier */
  TibetanTerrier = 'TIBETAN_TERRIER',
  /** Tornjak */
  Tornjak = 'TORNJAK',
  /** Tosa */
  Tosa = 'TOSA',
  /** Tosa Inu */
  TosaInu = 'TOSA_INU',
  /** Toy Fox Terrier */
  ToyFoxTerrier = 'TOY_FOX_TERRIER',
  /** Toy Manchester Terrier */
  ToyManchesterTerrier = 'TOY_MANCHESTER_TERRIER',
  /** Toy Poodle */
  ToyPoodle = 'TOY_POODLE',
  /** Treeing Walker Coonhound */
  TreeingWalkerCoonhound = 'TREEING_WALKER_COONHOUND',
  /** Tyrolean Hound */
  TyroleanHound = 'TYROLEAN_HOUND',
  /** Uruguayan Molosser */
  UruguayanMolosser = 'URUGUAYAN_MOLOSSER',
  /** Victorian Bulldog */
  VictorianBulldog = 'VICTORIAN_BULLDOG',
  /** Vizsla */
  Vizsla = 'VIZSLA',
  /** Volpino Italiano */
  VolpinoItaliano = 'VOLPINO_ITALIANO',
  /** Weimaraner */
  Weimaraner = 'WEIMARANER',
  /** Welsh Corgi */
  WelshCorgi = 'WELSH_CORGI',
  /** Welsh Sheepdog */
  WelshSheepdog = 'WELSH_SHEEPDOG',
  /** Welsh Springer Spaniel */
  WelshSpringerSpaniel = 'WELSH_SPRINGER_SPANIEL',
  /** Welsh Terrier */
  WelshTerrier = 'WELSH_TERRIER',
  /** Westphalian Dachsbracke */
  WestphalianDachsbracke = 'WESTPHALIAN_DACHSBRACKE',
  /** West Highland White Terrier */
  WestHighlandWhiteTerrier = 'WEST_HIGHLAND_WHITE_TERRIER',
  /** West Highland White Terrier Westie */
  WestHighlandWhiteTerrierWestie = 'WEST_HIGHLAND_WHITE_TERRIER_WESTIE',
  /** West Siberian Laika */
  WestSiberianLaika = 'WEST_SIBERIAN_LAIKA',
  /** Wetterhoun */
  Wetterhoun = 'WETTERHOUN',
  /** Wheaten Terrier */
  WheatenTerrier = 'WHEATEN_TERRIER',
  /** Whippet */
  Whippet = 'WHIPPET',
  /** White German Shepherd */
  WhiteGermanShepherd = 'WHITE_GERMAN_SHEPHERD',
  /** Wirehaired Dachshund */
  WirehairedDachshund = 'WIREHAIRED_DACHSHUND',
  /** Wirehaired Pointing Griffon */
  WirehairedPointingGriffon = 'WIREHAIRED_POINTING_GRIFFON',
  /** Wirehaired Terrier */
  WirehairedTerrier = 'WIREHAIRED_TERRIER',
  /** Wirehaired Vizsla */
  WirehairedVizsla = 'WIREHAIRED_VIZSLA',
  /** Wire Fox Terrier */
  WireFoxTerrier = 'WIRE_FOX_TERRIER',
  /** Xoloitzcuintle / Mexican Hairless */
  XoloitzcuintleMexicanHairless = 'XOLOITZCUINTLE_MEXICAN_HAIRLESS',
  /** Xoloitzcuintli */
  Xoloitzcuintli = 'XOLOITZCUINTLI',
  /** Yakutian Laika */
  YakutianLaika = 'YAKUTIAN_LAIKA',
  /** Yellow Labrador Retriever */
  YellowLabradorRetriever = 'YELLOW_LABRADOR_RETRIEVER',
  /** Yorkshire Terrier */
  YorkshireTerrier = 'YORKSHIRE_TERRIER',
  /** Yorkshire Terrier Yorkie */
  YorkshireTerrierYorkie = 'YORKSHIRE_TERRIER_YORKIE',
  /** Zwergschnauzer (dwarf Schnauzer) */
  ZwergschnauzerDwarfSchnauzer = 'ZWERGSCHNAUZER_DWARF_SCHNAUZER'
}

export enum Pet_Breed_GuineaPig {
  /** Abyssinian */
  Abyssinian = 'ABYSSINIAN',
  /** Alpaca */
  Alpaca = 'ALPACA',
  /** Coronet */
  Coronet = 'CORONET',
  /** Crested */
  Crested = 'CRESTED',
  /** Merino */
  Merino = 'MERINO',
  /** Peruvian */
  Peruvian = 'PERUVIAN',
  /** Rex */
  Rex = 'REX',
  /** Ridgeback */
  Ridgeback = 'RIDGEBACK',
  /** Sheba mini yak */
  ShebaMiniYak = 'SHEBA_MINI_YAK',
  /** Short-haired */
  ShortHaired = 'SHORT_HAIRED',
  /** Silkie / sheltie */
  SilkieSheltie = 'SILKIE_SHELTIE',
  /** Teddy */
  Teddy = 'TEDDY',
  /** Texel */
  Texel = 'TEXEL'
}

export enum Pet_Breed_Rabbit {
  /** American */
  American = 'AMERICAN',
  /** American Fuzzy Lop */
  AmericanFuzzyLop = 'AMERICAN_FUZZY_LOP',
  /** American Sable */
  AmericanSable = 'AMERICAN_SABLE',
  /** Angora Rabbit */
  AngoraRabbit = 'ANGORA_RABBIT',
  /** Belgian Hare */
  BelgianHare = 'BELGIAN_HARE',
  /** Beveren */
  Beveren = 'BEVEREN',
  /** Britannia Petite */
  BritanniaPetite = 'BRITANNIA_PETITE',
  /** Bunny Rabbit */
  BunnyRabbit = 'BUNNY_RABBIT',
  /** Californian */
  Californian = 'CALIFORNIAN',
  /** Champagne D'Argent */
  ChampagneDArgent = 'CHAMPAGNE_D_ARGENT',
  /** Checkered Giant */
  CheckeredGiant = 'CHECKERED_GIANT',
  /** Chinchilla */
  Chinchilla = 'CHINCHILLA',
  /** Cinnamon */
  Cinnamon = 'CINNAMON',
  /** Creme D'Argent */
  CremeDArgent = 'CREME_D_ARGENT',
  /** Dutch */
  Dutch = 'DUTCH',
  /** Dwarf */
  Dwarf = 'DWARF',
  /** Dwarf Eared */
  DwarfEared = 'DWARF_EARED',
  /** English Lop */
  EnglishLop = 'ENGLISH_LOP',
  /** English Spot */
  EnglishSpot = 'ENGLISH_SPOT',
  /** Flemish Giant */
  FlemishGiant = 'FLEMISH_GIANT',
  /** Florida White */
  FloridaWhite = 'FLORIDA_WHITE',
  /** French Lop */
  FrenchLop = 'FRENCH_LOP',
  /** Harlequin */
  Harlequin = 'HARLEQUIN',
  /** Havana */
  Havana = 'HAVANA',
  /** Himalayan */
  Himalayan = 'HIMALAYAN',
  /** Holland Lop */
  HollandLop = 'HOLLAND_LOP',
  /** Hotot */
  Hotot = 'HOTOT',
  /** Jersey Wooly */
  JerseyWooly = 'JERSEY_WOOLY',
  /** Lilac */
  Lilac = 'LILAC',
  /** Lionhead */
  Lionhead = 'LIONHEAD',
  /** Lop Eared */
  LopEared = 'LOP_EARED',
  /** Mini Lop */
  MiniLop = 'MINI_LOP',
  /** Mini Rex */
  MiniRex = 'MINI_REX',
  /** Netherland Dwarf */
  NetherlandDwarf = 'NETHERLAND_DWARF',
  /** New Zealand */
  NewZealand = 'NEW_ZEALAND',
  /** Palomino */
  Palomino = 'PALOMINO',
  /** Polish */
  Polish = 'POLISH',
  /** Rex */
  Rex = 'REX',
  /** Rhinelander */
  Rhinelander = 'RHINELANDER',
  /** Satin */
  Satin = 'SATIN',
  /** Silver */
  Silver = 'SILVER',
  /** Silver Fox */
  SilverFox = 'SILVER_FOX',
  /** Silver Marten */
  SilverMarten = 'SILVER_MARTEN',
  /** Tan */
  Tan = 'TAN'
}

export enum Pet_Breed_SmallAnimal {
  /** Abyssinian */
  Abyssinian = 'ABYSSINIAN',
  /** Chinchilla */
  Chinchilla = 'CHINCHILLA',
  /** Degu */
  Degu = 'DEGU',
  /** Dwarf Hamster */
  DwarfHamster = 'DWARF_HAMSTER',
  /** Ferret */
  Ferret = 'FERRET',
  /** Gerbil */
  Gerbil = 'GERBIL',
  /** Guinea Pig */
  GuineaPig = 'GUINEA_PIG',
  /** Hamster */
  Hamster = 'HAMSTER',
  /** Hedgehog */
  Hedgehog = 'HEDGEHOG',
  /** Mouse */
  Mouse = 'MOUSE',
  /** Peruvian */
  Peruvian = 'PERUVIAN',
  /** Prairie Dog */
  PrairieDog = 'PRAIRIE_DOG',
  /** Rat */
  Rat = 'RAT',
  /** Rex */
  Rex = 'REX',
  /** Short-Haired */
  ShortHaired = 'SHORT_HAIRED',
  /** Silkie / Sheltie */
  SilkieSheltie = 'SILKIE_SHELTIE',
  /** Skunk */
  Skunk = 'SKUNK',
  /** Sugar Glider */
  SugarGlider = 'SUGAR_GLIDER',
  /** Teddy */
  Teddy = 'TEDDY'
}

export enum Pet_Color {
  /** Apricot */
  Apricot = 'APRICOT',
  /** Ash */
  Ash = 'ASH',
  /** Badger */
  Badger = 'BADGER',
  /** Beige */
  Beige = 'BEIGE',
  /** Bicolor */
  Bicolor = 'BICOLOR',
  /** Biscuit */
  Biscuit = 'BISCUIT',
  /** black */
  Black = 'BLACK',
  /** Blonde */
  Blonde = 'BLONDE',
  /** blue */
  Blue = 'BLUE',
  /** brindle */
  Brindle = 'BRINDLE',
  /** Bronze */
  Bronze = 'BRONZE',
  /** brown */
  Brown = 'BROWN',
  /** Calico */
  Calico = 'CALICO',
  /** Caramel */
  Caramel = 'CARAMEL',
  /** Chestnut */
  Chestnut = 'CHESTNUT',
  /** chocolate */
  Chocolate = 'CHOCOLATE',
  /** Cinnamon */
  Cinnamon = 'CINNAMON',
  /** Colorpoint */
  Colorpoint = 'COLORPOINT',
  /** cream */
  Cream = 'CREAM',
  /** Dark Blue */
  DarkBlue = 'DARK_BLUE',
  /** Dark Brown */
  DarkBrown = 'DARK_BROWN',
  /** Dark Gray */
  DarkGray = 'DARK_GRAY',
  /** Deep Red Ginger */
  DeepRedGinger = 'DEEP_RED_GINGER',
  /** Domino */
  Domino = 'DOMINO',
  /** Dotted */
  Dotted = 'DOTTED',
  /** fawn */
  Fawn = 'FAWN',
  /** Ginger */
  Ginger = 'GINGER',
  /** Gold */
  Gold = 'GOLD',
  /** gray */
  Gray = 'GRAY',
  /** Grey */
  Grey = 'GREY',
  /** Harlequin */
  Harlequin = 'HARLEQUIN',
  /** ivory */
  Ivory = 'IVORY',
  /** Light Brown */
  LightBrown = 'LIGHT_BROWN',
  /** Light Sand */
  LightSand = 'LIGHT_SAND',
  /** Light Silver */
  LightSilver = 'LIGHT_SILVER',
  /** Lilac */
  Lilac = 'LILAC',
  /** Lion */
  Lion = 'LION',
  /** Liver */
  Liver = 'LIVER',
  /** Mackerel */
  Mackerel = 'MACKEREL',
  /** Merle */
  Merle = 'MERLE',
  /** Mustard */
  Mustard = 'MUSTARD',
  /** orange */
  Orange = 'ORANGE',
  /** Pale Brown */
  PaleBrown = 'PALE_BROWN',
  /** red */
  Red = 'RED',
  /** Ruby */
  Ruby = 'RUBY',
  /** Rust */
  Rust = 'RUST',
  /** Sable */
  Sable = 'SABLE',
  /** Salt & Pepper */
  SaltandPepper = 'SALTAND_PEPPER',
  /** Sandy */
  Sandy = 'SANDY',
  /** Sepia */
  Sepia = 'SEPIA',
  /** Silver */
  Silver = 'SILVER',
  /** Spotted */
  Spotted = 'SPOTTED',
  /** Stag-red */
  StagRed = 'STAG_RED',
  /** Straw */
  Straw = 'STRAW',
  /** Tabby */
  Tabby = 'TABBY',
  /** tan */
  Tan = 'TAN',
  /** Ticked */
  Ticked = 'TICKED',
  /** Tortoiseshell */
  Tortoiseshell = 'TORTOISESHELL',
  /** Tricolor */
  Tricolor = 'TRICOLOR',
  /** Tuxedo */
  Tuxedo = 'TUXEDO',
  /** Wheaten */
  Wheaten = 'WHEATEN',
  /** white */
  White = 'WHITE',
  /** yellow */
  Yellow = 'YELLOW'
}

export type Pet_Diet = {
  __typename?: 'Pet_Diet';
  brand?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Pet_Event = {
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

export type Pet_Event_Adoption = Pet_Event & {
  __typename?: 'Pet_Event_Adoption';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
  to?: Maybe<Person>;
};

export type Pet_Event_DiedInCare = Pet_Event & {
  __typename?: 'Pet_Event_DiedInCare';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

export type Pet_Event_Escaped_Lost = Pet_Event & {
  __typename?: 'Pet_Event_Escaped_Lost';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

export type Pet_Event_Euthanized = Pet_Event & {
  __typename?: 'Pet_Event_Euthanized';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  euthanized_type?: Maybe<Pet_Event_Euthanized_Type>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

/** Euthanized event type */
export enum Pet_Event_Euthanized_Type {
  /** Behavior */
  Behavior = 'BEHAVIOR',
  /** Owner Requested */
  OwnerRequested = 'OWNER_REQUESTED',
  /** Rabies Testing */
  RabiesTesting = 'RABIES_TESTING',
  /** Sick/Injured */
  SickInjured = 'SICK_INJURED'
}

export type Pet_Event_Intake = Pet_Event & {
  __typename?: 'Pet_Event_Intake';
  condition?: Maybe<Pet_Event_Intake_Condition>;
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  from?: Maybe<IntakeFromEntity>;
  id?: Maybe<Scalars['UUID']['output']>;
  intake_type?: Maybe<Pet_Event_Intake_Type>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

export enum Pet_Event_Intake_Condition {
  /** Dead on arrival */
  DeadOnArrival = 'DEAD_ON_ARRIVAL',
  /** Euthanization requested */
  EuthanizationRequested = 'EUTHANIZATION_REQUESTED',
  /** Feral */
  Feral = 'FERAL',
  /** Healthy */
  Healthy = 'HEALTHY',
  /** Injured */
  Injured = 'INJURED',
  /** Pregnant */
  Pregnant = 'PREGNANT',
  /** Sick */
  Sick = 'SICK'
}

/** Intake event type */
export enum Pet_Event_Intake_Type {
  /** born in care */
  BornInCare = 'BORN_IN_CARE',
  /** external transfer */
  ExternalTransfer = 'EXTERNAL_TRANSFER',
  /**
   * internal transfer
   * @deprecated
   */
  InternalTransfer = 'INTERNAL_TRANSFER',
  /** other */
  Other = 'OTHER',
  /** owner surrender */
  OwnerSurrender = 'OWNER_SURRENDER',
  /** return to rescue */
  Return = 'RETURN',
  /** stray */
  Stray = 'STRAY'
}

export type Pet_Event_Return = Pet_Event & {
  __typename?: 'Pet_Event_Return';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
  to?: Maybe<Person>;
};

export type Pet_Event_Return_To_Field = Pet_Event & {
  __typename?: 'Pet_Event_Return_To_Field';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
};

/** Statuses only settable by pet events */
export enum Pet_Event_Status {
  /** adopted */
  Adopted = 'ADOPTED',
  /** pending adoption */
  PendingAdoption = 'PENDING_ADOPTION',
  /** pending transferred */
  PendingTransferred = 'PENDING_TRANSFERRED',
  /** transferred */
  Transferred = 'TRANSFERRED'
}

export type Pet_Event_Transfer = Pet_Event & {
  __typename?: 'Pet_Event_Transfer';
  created_at?: Maybe<Scalars['Instant']['output']>;
  date?: Maybe<Scalars['Instant']['output']>;
  event_type?: Maybe<Pet_Event_Type>;
  id?: Maybe<Scalars['UUID']['output']>;
  is_external_transfer?: Maybe<Scalars['Boolean']['output']>;
  note?: Maybe<Note>;
  organization?: Maybe<Organization>;
  pet?: Maybe<Pet>;
  to?: Maybe<AbstractOrganization>;
};

export enum Pet_Event_Type {
  /** Adoption */
  Adoption = 'ADOPTION',
  /** Died In Care */
  DiedInCare = 'DIED_IN_CARE',
  /** Escaped/Lost */
  EscapedLost = 'ESCAPED_LOST',
  /** Euthanized */
  Euthanized = 'EUTHANIZED',
  /** Intake */
  Intake = 'INTAKE',
  /** Return */
  Return = 'RETURN',
  /** Return to Field */
  ReturnToField = 'RETURN_TO_FIELD',
  /** Transfer */
  Transfer = 'TRANSFER'
}

export enum Pet_Gender {
  /** female */
  Female = 'FEMALE',
  /** male */
  Male = 'MALE',
  /** other */
  Other = 'OTHER'
}

export enum Pet_Intake_Type {
  /** Born in care */
  BornInCare = 'BORN_IN_CARE',
  /** External transfer */
  ExternalTransfer = 'EXTERNAL_TRANSFER',
  /** Other */
  Other = 'OTHER',
  /** Owner surrender */
  OwnerSurrender = 'OWNER_SURRENDER',
  /** Return to rescue */
  Return = 'RETURN',
  /** Stray */
  Stray = 'STRAY'
}

export type Pet_Location = {
  __typename?: 'Pet_Location';
  boarding?: Maybe<Scalars['String']['output']>;
  foster?: Maybe<Person>;
  /** If the pet's last event is an outcome event, the outcome event */
  outcome?: Maybe<PetOutcome>;
  shelter_unit?: Maybe<Scalars['String']['output']>;
};

export type Pet_Medical = {
  __typename?: 'Pet_Medical';
  appointments?: Maybe<Array<Maybe<Pet_Medical_Appointment>>>;
  condition?: Maybe<Array<Maybe<Pet_Medical_Condition>>>;
  condition_details?: Maybe<Scalars['String']['output']>;
};

/** Medical Event */
export type Pet_MedicalEvent = {
  __typename?: 'Pet_MedicalEvent';
  /** Clinic */
  clinic?: Maybe<Scalars['String']['output']>;
  clinic_partner?: Maybe<Partner>;
  /** Total cost of event */
  cost?: Maybe<Money>;
  /** Date of event */
  date?: Maybe<Scalars['Instant']['output']>;
  documents?: Maybe<Array<Maybe<File>>>;
  id?: Maybe<Scalars['UUID']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  /** The pet */
  pet?: Maybe<Pet>;
  /** Reason for the medical event */
  reason?: Maybe<Scalars['String']['output']>;
  records?: Maybe<Array<Maybe<Pet_MedicalEvent_Record>>>;
  reminders?: Maybe<Array<Maybe<Reminder_MedicalEvent>>>;
  /** Veterinarian */
  vet?: Maybe<Scalars['String']['output']>;
  vet_partner_person?: Maybe<PartnerPerson>;
};

export type Pet_MedicalEvent_Record = {
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

/** Diagnosis Medical Event Record */
export type Pet_MedicalEvent_Record_Diagnosis = Pet_MedicalEvent_Record & {
  __typename?: 'Pet_MedicalEvent_Record_Diagnosis';
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

export type Pet_MedicalEvent_Record_Diagnosis_LineItem_DiagnosisGeneral = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_Diagnosis_LineItem_DiagnosisGeneral';
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Note>;
};

export enum Pet_MedicalEvent_Record_Diagnosis_LineItem_Type {
  /** Diagnosis general */
  DiagnosisGeneral = 'DIAGNOSIS_GENERAL'
}

/** Lab/Misc Medical Event Record */
export type Pet_MedicalEvent_Record_LabMisc = Pet_MedicalEvent_Record & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc';
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Biopsy = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Biopsy';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_BloodWork = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_BloodWork';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Cytology = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Cytology';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_LabOther = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_LabOther';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Radiography = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Radiography';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Serology = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Serology';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Test4dx = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Test4dx';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export enum Pet_MedicalEvent_Record_LabMisc_LineItem_Type {
  /** Biopsy */
  Biopsy = 'BIOPSY',
  /** Blood work */
  BloodWork = 'BLOOD_WORK',
  /** Cytology */
  Cytology = 'CYTOLOGY',
  /** Lab other */
  LabOther = 'LAB_OTHER',
  /** Radiography */
  Radiography = 'RADIOGRAPHY',
  /** Serology */
  Serology = 'SEROLOGY',
  /** Test 4dx */
  Test_4Dx = 'TEST_4DX',
  /** Urinalysis */
  Urinalysis = 'URINALYSIS'
}

export type Pet_MedicalEvent_Record_LabMisc_LineItem_Urinalysis = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_LabMisc_LineItem_Urinalysis';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_LineItem = {
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

/** Medication/Treatment Medical Event Record */
export type Pet_MedicalEvent_Record_MedicationTreatment = Pet_MedicalEvent_Record & {
  __typename?: 'Pet_MedicalEvent_Record_MedicationTreatment';
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

export type Pet_MedicalEvent_Record_MedicationTreatment_LineItem_Medication = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_MedicationTreatment_LineItem_Medication';
  dose?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['Instant']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Note>;
  start_date?: Maybe<Scalars['Instant']['output']>;
};

export enum Pet_MedicalEvent_Record_MedicationTreatment_LineItem_Type {
  /** Medication */
  Medication = 'MEDICATION'
}

/** Surgery Medical Event Record */
export type Pet_MedicalEvent_Record_Surgery = Pet_MedicalEvent_Record & {
  __typename?: 'Pet_MedicalEvent_Record_Surgery';
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

export type Pet_MedicalEvent_Record_Surgery_LineItem_Dental = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_Surgery_LineItem_Dental';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_Surgery_LineItem_SpayNeuter = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_Surgery_LineItem_SpayNeuter';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_Surgery_LineItem_SurgeryOther = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_Surgery_LineItem_SurgeryOther';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  type?: Maybe<Scalars['String']['output']>;
};

export enum Pet_MedicalEvent_Record_Surgery_LineItem_Type {
  /** Dental */
  Dental = 'DENTAL',
  /** Spay neuter */
  SpayNeuter = 'SPAY_NEUTER',
  /** Surgery other */
  SurgeryOther = 'SURGERY_OTHER'
}

export enum Pet_MedicalEvent_Record_Type {
  /** Diagnosis */
  Diagnosis = 'DIAGNOSIS',
  /** Lab misc */
  LabMisc = 'LAB_MISC',
  /** Medication treatment */
  MedicationTreatment = 'MEDICATION_TREATMENT',
  /** Surgery */
  Surgery = 'SURGERY',
  /** Wellness vaccines */
  WellnessVaccines = 'WELLNESS_VACCINES'
}

/** Wellness/Vaccines Medical Event Record */
export type Pet_MedicalEvent_Record_WellnessVaccines = Pet_MedicalEvent_Record & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines';
  id?: Maybe<Scalars['UUID']['output']>;
  line_items?: Maybe<Array<Maybe<Pet_MedicalEvent_Record_LineItem>>>;
};

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Exam = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Exam';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FecalResult = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FecalResult';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  positive?: Maybe<Scalars['Boolean']['output']>;
};

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FivFelvTest = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FivFelvTest';
  felv_positive?: Maybe<Scalars['Boolean']['output']>;
  fiv_positive?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
};

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FleaTick = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_FleaTick';
  flea_positive?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  tick_positive?: Maybe<Scalars['Boolean']['output']>;
};

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Heartworm = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Heartworm';
  id?: Maybe<Scalars['UUID']['output']>;
  note?: Maybe<Note>;
  positive?: Maybe<Scalars['Boolean']['output']>;
};

export enum Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Type {
  /** Exam */
  Exam = 'EXAM',
  /** Fecal result */
  FecalResult = 'FECAL_RESULT',
  /** Fiv felv test */
  FivFelvTest = 'FIV_FELV_TEST',
  /** Flea tick */
  FleaTick = 'FLEA_TICK',
  /** Heartworm */
  Heartworm = 'HEARTWORM',
  /** Vaccine */
  Vaccine = 'VACCINE'
}

export type Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Vaccine = Pet_MedicalEvent_Record_LineItem & {
  __typename?: 'Pet_MedicalEvent_Record_WellnessVaccines_LineItem_Vaccine';
  expiration_date?: Maybe<Scalars['Instant']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  manufacturer?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Note>;
  serial_number?: Maybe<Scalars['String']['output']>;
};

export type Pet_Medical_Appointment = {
  __typename?: 'Pet_Medical_Appointment';
  date?: Maybe<Scalars['Instant']['output']>;
  medication_prescribed?: Maybe<Array<Maybe<Pet_Medication>>>;
  note?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Pet_Medical_Appointment_Type>;
  vaccines_administered?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  veterinarian?: Maybe<Scalars['String']['output']>;
};

export enum Pet_Medical_Appointment_Type {
  /** diagnostic */
  Diagnostic = 'DIAGNOSTIC',
  /** exam */
  Exam = 'EXAM',
  /** surgery */
  Surgery = 'SURGERY',
  /** vaccination */
  Vaccination = 'VACCINATION'
}

export enum Pet_Medical_Condition {
  /** deceased */
  Deceased = 'DECEASED',
  /** euthanized */
  Euthanized = 'EUTHANIZED',
  /** euthanized rabies testing */
  EuthanizedRabiesTesting = 'EUTHANIZED_RABIES_TESTING',
  /** healthy */
  Healthy = 'HEALTHY',
  /** injured */
  Injured = 'INJURED',
  /** other */
  Other = 'OTHER',
  /** sick */
  Sick = 'SICK'
}

export type Pet_Medication = {
  __typename?: 'Pet_Medication';
  drug?: Maybe<Scalars['String']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<Note>>>;
};

export type Pet_Microchip = {
  __typename?: 'Pet_Microchip';
  brand?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export enum Pet_Outcome_Type {
  /** Adopted */
  Adopted = 'ADOPTED',
  /** Died In Care */
  DiedInCare = 'DIED_IN_CARE',
  /** Escaped/Lost */
  EscapedLost = 'ESCAPED_LOST',
  /** Euthanized */
  Euthanized = 'EUTHANIZED',
  /** Euthanized Behavior */
  EuthanizedBehavior = 'EUTHANIZED_BEHAVIOR',
  /** Euthanized Owner Requested */
  EuthanizedOwnerRequested = 'EUTHANIZED_OWNER_REQUESTED',
  /** Euthanized Rabies Testing */
  EuthanizedRabiesTesting = 'EUTHANIZED_RABIES_TESTING',
  /** Euthanized Sick/Injured */
  EuthanizedSickInjured = 'EUTHANIZED_SICK_INJURED',
  /** Returned */
  Returned = 'RETURNED',
  /** Return to Field */
  ReturnToField = 'RETURN_TO_FIELD',
  /** Transferred */
  Transferred = 'TRANSFERRED'
}

export enum Pet_Species {
  /** Cat */
  Cat = 'CAT',
  /** Dog */
  Dog = 'DOG',
  /** Guinea Pig */
  GuineaPig = 'GUINEA_PIG',
  /** Rabbit */
  Rabbit = 'RABBIT',
  /** Small Animal */
  SmallAnimal = 'SMALL_ANIMAL'
}

export enum Pet_Status {
  /** adopted */
  Adopted = 'ADOPTED',
  /** deceased */
  Deceased = 'DECEASED',
  /** organization */
  Organization = 'ORGANIZATION'
}

export type PublicOrganizationPet = {
  __typename?: 'PublicOrganizationPet';
  /** Adoption fee for a pet */
  adoption_fee?: Maybe<Money>;
  /** Organization pet unique id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Internal identifier for pet at organization */
  internal_id?: Maybe<Scalars['String']['output']>;
  /** Does the pet currently need foster */
  needs_foster?: Maybe<Scalars['Boolean']['output']>;
  /** Pawlytics pet record */
  pet?: Maybe<PublicPet>;
  /** Pet's status. Can be a Pet_Event_Status or Organization_Pet_status. */
  status?: Maybe<Organization_Pet_Status>;
};

export type PublicOrganizationPetsConnection = {
  __typename?: 'PublicOrganizationPetsConnection';
  entities?: Maybe<Array<Maybe<PublicOrganizationPet>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  next_token?: Maybe<Scalars['String']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total_count?: Maybe<Scalars['Int']['output']>;
};

export type PublicPet = {
  __typename?: 'PublicPet';
  /** Neutered/spayed */
  altered?: Maybe<Scalars['Boolean']['output']>;
  /** Cat's breed(s) */
  breed_cat?: Maybe<Array<Maybe<Pet_Breed_Cat>>>;
  /** Dog's breed(s) */
  breed_dog?: Maybe<Array<Maybe<Pet_Breed_Dog>>>;
  breed_guinea_pig?: Maybe<Array<Maybe<Pet_Breed_GuineaPig>>>;
  breed_rabbit?: Maybe<Array<Maybe<Pet_Breed_Rabbit>>>;
  /** Note: maximum of 1 selection */
  breed_small_animal?: Maybe<Array<Maybe<Pet_Breed_SmallAnimal>>>;
  /** Pet color(s) */
  color?: Maybe<Array<Maybe<Pet_Color>>>;
  description?: Maybe<Scalars['String']['output']>;
  distinguishing_marks?: Maybe<Scalars['String']['output']>;
  /** Estimated date of birth */
  estimated_birth_date?: Maybe<Scalars['Instant']['output']>;
  gender?: Maybe<Pet_Gender>;
  good_with_cats?: Maybe<Scalars['Boolean']['output']>;
  good_with_children?: Maybe<Scalars['Boolean']['output']>;
  good_with_dogs?: Maybe<Scalars['Boolean']['output']>;
  housetrained?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['UUID']['output']>;
  /** Image files, ostensibly pet pictures */
  images?: Maybe<Array<Maybe<File>>>;
  /** Is the pet mixed? optional */
  mixed?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  needs_experienced_adopter?: Maybe<Scalars['Boolean']['output']>;
  siblings?: Maybe<Array<Maybe<Pet>>>;
  special_needs?: Maybe<Scalars['String']['output']>;
  species?: Maybe<Pet_Species>;
  weight?: Maybe<Weight>;
  weight_lbs?: Maybe<Scalars['Float']['output']>;
  youtube_video_url?: Maybe<Scalars['String']['output']>;
};


export type PublicPetWeightArgs = {
  unit?: InputMaybe<WeightUnit>;
};

export type Query = {
  __typename?: 'Query';
  adopted_pets_with_microchips?: Maybe<AdoptionsConnection>;
  /** Get organization's adoption docs */
  adoption_docs: AdoptionDocsConnection;
  /** Data to populate an organization's adoption docs page */
  adoption_docs_page?: Maybe<AdoptionDocsPage>;
  /** Pull locale from the request headers */
  browser_locale?: Maybe<Scalars['String']['output']>;
  currency_details?: Maybe<CurrencyDetails>;
  econtract_by_id?: Maybe<Econtract>;
  econtract_by_token?: Maybe<Econtract>;
  econtract_template_by_id: EcontractTemplate;
  econtract_templates: EcontractTemplateConnection;
  export_organization_pet?: Maybe<Exported_Organization_Pet>;
  get_job?: Maybe<Job>;
  global_custom_reports?: Maybe<Array<Maybe<CustomReport>>>;
  medicalEventById?: Maybe<MedicalEvent>;
  medicalEventsByPetId: MedicalEventsConnection;
  /** System-wide organization metrics */
  metrics_organizations?: Maybe<Array<Maybe<MetricsOrganization>>>;
  /** System-wide user metrics */
  metrics_users?: Maybe<Array<Maybe<MetricsUser>>>;
  organizationAdoptions?: Maybe<OrganizationAdoptionsConnection>;
  organizationFosteredPets?: Maybe<OrganizationFosteredPetsConnection>;
  organizationIntakes?: Maybe<OrganizationIntakesConnection>;
  /** Super-admin endpoint for org billing data */
  organization_bill?: Maybe<OrganizationBill>;
  /** Get an organization by its id */
  organization_by_id?: Maybe<Organization>;
  organization_partners?: Maybe<PartnersConnection>;
  organization_person?: Maybe<Person>;
  organization_persons?: Maybe<PersonConnection>;
  organization_persons2?: Maybe<PersonConnection>;
  /**
   * Get applications (i.e. adoption, foster, volunteer, surrender)
   *                                    submitted to an organization
   */
  organization_pet_applications?: Maybe<PetApplicationConnection>;
  /** Get a pet in an organization by Pet Id */
  organization_pet_by_id?: Maybe<Organization_Pet>;
  /** @deprecated Use organization_pets2 */
  organization_pets: Array<Maybe<Organization_Pet>>;
  /** Organization pets, optionally filtered and paginated. */
  organization_pets2?: Maybe<OrganizationPetsConnection>;
  /** TEMPORARY resolver that returns the number of organization pets */
  organization_pets_count: Scalars['Int']['output'];
  /** All reminders for organization */
  organization_reminders?: Maybe<Array<Maybe<Reminder>>>;
  /** Organization Pet Event Report */
  organization_report_pet_events: OrganizationReport_PetEvents;
  /** Organization Pet Reports */
  organization_report_pets: OrganizationReport_Pets;
  /** Users for organization */
  organization_users?: Maybe<Array<Maybe<OrganizationUser>>>;
  /** Organization users, optionally filtered and paginated */
  organization_users2?: Maybe<OrganizationUsersConnection>;
  /** List of organizations */
  organizations?: Maybe<Array<Maybe<Organization>>>;
  /** Get a partner by its id */
  partner_by_id?: Maybe<Partner>;
  /**
   * List people associated with a partner organization. These people are a subset
   *                              of the current organization's global person list with some extra partner-specific data.
   */
  partner_persons?: Maybe<PartnerPersonsConnection>;
  /** List pets that have been collaborated on with the given partner (transfers, medical, ...) */
  partner_pets?: Maybe<PartnerPetsConnection>;
  payengine_get_merchant?: Maybe<PayengineMerchant>;
  person_adoption_history?: Maybe<Array<Maybe<Pet_Event_Adoption>>>;
  person_foster_history?: Maybe<Array<Maybe<FosterRecord>>>;
  person_notifications?: Maybe<Array<Maybe<Notification>>>;
  pet_application_by_id?: Maybe<PetApplication>;
  /** Get images for a pet. */
  pet_images?: Maybe<Array<File>>;
  publicOrganizationPets?: Maybe<PublicOrganizationPetsConnection>;
  /** Pawlytics Platform statistics */
  system_stats?: Maybe<SystemStats>;
  /** Get a text template by ID */
  textTemplateById: TextTemplate;
  /** Get all text templates for an organization */
  textTemplates: TextTemplatesConnection;
  /** Currently authenticated user */
  user_current?: Maybe<User>;
  user_notifications?: Maybe<Array<Maybe<Notification>>>;
  user_notifications2?: Maybe<NotificationsConnection>;
  /** User's permissions */
  user_permissions?: Maybe<Array<Maybe<Permission>>>;
};


export type QueryAdopted_Pets_With_MicrochipsArgs = {
  start_date?: InputMaybe<Scalars['Instant']['input']>;
};


export type QueryAdoption_DocsArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryAdoption_Docs_PageArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryCurrency_DetailsArgs = {
  currency?: InputMaybe<Currency>;
};


export type QueryEcontract_By_IdArgs = {
  econtract_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};


export type QueryEcontract_By_TokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryEcontract_Template_By_IdArgs = {
  econtract_template_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};


export type QueryEcontract_TemplatesArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryExport_Organization_PetArgs = {
  organization_id: Scalars['UUID']['input'];
  organization_pet_id: Scalars['UUID']['input'];
};


export type QueryGet_JobArgs = {
  job_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};


export type QueryMedicalEventByIdArgs = {
  medical_event_id: Scalars['UUID']['input'];
};


export type QueryMedicalEventsByPetIdArgs = {
  organization_id: Scalars['UUID']['input'];
  pet_id: Scalars['UUID']['input'];
};


export type QueryOrganizationAdoptionsArgs = {
  filter?: InputMaybe<OrganizationAdoptionsFilterInput>;
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganizationFosteredPetsArgs = {
  filter?: InputMaybe<OrganizationFosteredPetsFilterInput>;
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganizationIntakesArgs = {
  filter?: InputMaybe<OrganizationIntakesFilterInput>;
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_BillArgs = {
  end_date: Scalars['Instant']['input'];
  organization_id: Scalars['UUID']['input'];
  start_date: Scalars['Instant']['input'];
};


export type QueryOrganization_By_IdArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryOrganization_PartnersArgs = {
  filter?: InputMaybe<PartnerFilterInput>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<PartnerPaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_PersonArgs = {
  organization_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};


export type QueryOrganization_PersonsArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_Persons2Args = {
  filter?: InputMaybe<Input_PersonFilter>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<Input_Person_Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_Pet_ApplicationsArgs = {
  application_type: PetApplicationType;
  filter?: InputMaybe<PetApplicationFilterInput>;
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_Pet_By_IdArgs = {
  id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_PetsArgs = {
  filter?: InputMaybe<Input_PetFilter>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  pagination?: InputMaybe<Input_Organization_Pet_Pagination>;
};


export type QueryOrganization_Pets2Args = {
  filter?: InputMaybe<Input_PetFilter>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<Input_Organization_Pet_Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_Pets_CountArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_RemindersArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryOrganization_Report_Pet_EventsArgs = {
  as_of?: InputMaybe<Scalars['Instant']['input']>;
  filter?: InputMaybe<Input_PetFilter>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryOrganization_Report_PetsArgs = {
  as_of?: InputMaybe<Scalars['Instant']['input']>;
  filter?: InputMaybe<Input_PetFilter>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryOrganization_UsersArgs = {
  filter?: InputMaybe<OrganizationUsersFilter>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<Pagination>;
};


export type QueryOrganization_Users2Args = {
  filter?: InputMaybe<OrganizationUsersFilter>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<Input_Organization_User_Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizationsArgs = {
  filter?: InputMaybe<OrganizationsFilter>;
  pagination?: InputMaybe<Pagination>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPartner_By_IdArgs = {
  organization_id: Scalars['UUID']['input'];
  partner_id: Scalars['UUID']['input'];
};


export type QueryPartner_PersonsArgs = {
  filter?: InputMaybe<PartnerPersonFilterInput>;
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<PartnerPersonPaginationInput>;
  partner_id: Scalars['UUID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPartner_PetsArgs = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<PartnerPetPaginationInput>;
  partner_id: Scalars['UUID']['input'];
};


export type QueryPayengine_Get_MerchantArgs = {
  organization_id: Scalars['UUID']['input'];
};


export type QueryPerson_Adoption_HistoryArgs = {
  organization_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};


export type QueryPerson_Foster_HistoryArgs = {
  organization_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};


export type QueryPerson_NotificationsArgs = {
  organization_id: Scalars['UUID']['input'];
  person_id: Scalars['UUID']['input'];
};


export type QueryPet_Application_By_IdArgs = {
  airtable_id: Scalars['String']['input'];
  application_type: PetApplicationType;
  organization_id: Scalars['UUID']['input'];
};


export type QueryPet_ImagesArgs = {
  organization_pet_id: Scalars['UUID']['input'];
};


export type QueryPublicOrganizationPetsArgs = {
  filter?: InputMaybe<Input_PetFilter>;
  organization_id: Scalars['UUID']['input'];
  pagination?: InputMaybe<Input_Organization_Pet_Pagination>;
};


export type QueryTextTemplateByIdArgs = {
  organization_id: Scalars['UUID']['input'];
  text_template_id: Scalars['UUID']['input'];
};


export type QueryTextTemplatesArgs = {
  organization_id: Scalars['UUID']['input'];
  type?: InputMaybe<Text_Template_Type>;
};


export type QueryUser_Notifications2Args = {
  next_token?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Input_Notifications_Pagination>;
};


export type QueryUser_PermissionsArgs = {
  pagination?: InputMaybe<Pagination>;
};

/** Reminder */
export type Reminder = {
  /** Reminder external id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Reminder message */
  message?: Maybe<Scalars['String']['output']>;
  notification_preferences?: Maybe<Array<Maybe<Notification_Preference>>>;
  /** Reminder recipients */
  recipients?: Maybe<Array<Maybe<Person>>>;
  /** Reminder schedule */
  schedules?: Maybe<Array<Maybe<Schedule>>>;
  /** Reminder title */
  title?: Maybe<Scalars['String']['output']>;
};

/** Medical Event Reminder */
export type Reminder_MedicalEvent = Reminder & {
  __typename?: 'Reminder_MedicalEvent';
  /** Reminder external id */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Reminder message */
  message?: Maybe<Scalars['String']['output']>;
  notification_preferences?: Maybe<Array<Maybe<Notification_Preference>>>;
  /** Medical event */
  pet_medical_event?: Maybe<Pet_MedicalEvent>;
  /** Reminder recipients */
  recipients?: Maybe<Array<Maybe<Person>>>;
  /** Reminder schedule */
  schedules?: Maybe<Array<Maybe<Schedule>>>;
  /** Reminder title */
  title?: Maybe<Scalars['String']['output']>;
};

export type ReportDownload = {
  __typename?: 'ReportDownload';
  expires_at: Scalars['Instant']['output'];
  id: Scalars['UUID']['output'];
  url: Scalars['String']['output'];
};

/** Schedule for a reminder */
export type Schedule = {
  __typename?: 'Schedule';
  /** Schedule date */
  date?: Maybe<Scalars['Instant']['output']>;
  /** Schedule end date */
  end_date?: Maybe<Scalars['Instant']['output']>;
  /** Schedule ID */
  id?: Maybe<Scalars['UUID']['output']>;
  /** Recurrence pattern */
  recurrence_pattern?: Maybe<Scalars['CronPattern']['output']>;
};

export type SignEcontractInput = {
  econtract_artifact_file_ref: Input_UploadedFileRef;
  initials_upload_file_refs?: InputMaybe<Array<Input_UploadedFileRef>>;
  signature_upload_file_ref: Input_UploadedFileRef;
  token: Scalars['String']['input'];
};

/** Sort order */
export enum SortOrder {
  /** Sort ascending */
  SortAsc = 'SORT_ASC',
  /** Sort descending */
  SortDesc = 'SORT_DESC'
}

export type Sortable = {
  index?: Maybe<Scalars['Int']['output']>;
};

/** Pet species */
export enum Species {
  /** Alpaca */
  Alpaca = 'ALPACA',
  /** Bird */
  Bird = 'BIRD',
  /** Canine */
  Canine = 'CANINE',
  /** Cat */
  Cat = 'CAT',
  /** Chinchilla */
  Chinchilla = 'CHINCHILLA',
  /** Cow */
  Cow = 'COW',
  /** Degu */
  Degu = 'DEGU',
  /** Dog */
  Dog = 'DOG',
  /** Equine */
  Equine = 'EQUINE',
  /** Feline */
  Feline = 'FELINE',
  /** Ferret */
  Ferret = 'FERRET',
  /** Fish */
  Fish = 'FISH',
  /** Frog */
  Frog = 'FROG',
  /** Gerbil */
  Gerbil = 'GERBIL',
  /** Goat */
  Goat = 'GOAT',
  /** Guinea Pig */
  GuineaPig = 'GUINEA_PIG',
  /** Hamster */
  Hamster = 'HAMSTER',
  /** Hedgehog */
  Hedgehog = 'HEDGEHOG',
  /** Horse */
  Horse = 'HORSE',
  /** Lizard */
  Lizard = 'LIZARD',
  /** Llama */
  Llama = 'LLAMA',
  /** Mouse */
  Mouse = 'MOUSE',
  /** Pig */
  Pig = 'PIG',
  /** Prairie Dog */
  PrairieDog = 'PRAIRIE_DOG',
  /** Rabbit */
  Rabbit = 'RABBIT',
  /** Rat */
  Rat = 'RAT',
  /** Sheep */
  Sheep = 'SHEEP',
  /** Skunk */
  Skunk = 'SKUNK',
  /** Small animal */
  SmallAnimal = 'SMALL_ANIMAL',
  /** Snake */
  Snake = 'SNAKE',
  /** Sugar Glider */
  SugarGlider = 'SUGAR_GLIDER',
  /** Toad */
  Toad = 'TOAD',
  /** Turtle */
  Turtle = 'TURTLE'
}

export enum State {
  /** Alaska */
  Ak = 'AK',
  /** Alabama */
  Al = 'AL',
  /** Arkansas */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Arizona */
  Az = 'AZ',
  /** California */
  Ca = 'CA',
  /** Colorado */
  Co = 'CO',
  /** Connecticut */
  Ct = 'CT',
  /** District of Columbia */
  Dc = 'DC',
  /** Delaware */
  De = 'DE',
  /** Florida */
  Fl = 'FL',
  /** Georgia */
  Ga = 'GA',
  /** Guam */
  Gu = 'GU',
  /** Hawaii */
  Hi = 'HI',
  /** Iowa */
  Ia = 'IA',
  /** Idaho */
  Id = 'ID',
  /** Illinois */
  Il = 'IL',
  /** Indiana */
  In = 'IN',
  /** Kansas */
  Ks = 'KS',
  /** Kentucky */
  Ky = 'KY',
  /** Louisiana */
  La = 'LA',
  /** Massachusetts */
  Ma = 'MA',
  /** Maryland */
  Md = 'MD',
  /** Maine */
  Me = 'ME',
  /** Michigan */
  Mi = 'MI',
  /** Minnesota */
  Mn = 'MN',
  /** Missouri */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Mississippi */
  Ms = 'MS',
  /** Montana */
  Mt = 'MT',
  /** North Carolina */
  Nc = 'NC',
  /** North Dakota */
  Nd = 'ND',
  /** Nebraska */
  Ne = 'NE',
  /** New Hampshire */
  Nh = 'NH',
  /** New Jersey */
  Nj = 'NJ',
  /** New Mexico */
  Nm = 'NM',
  /** Nevada */
  Nv = 'NV',
  /** New York */
  Ny = 'NY',
  /** Ohio */
  Oh = 'OH',
  /** Oklahoma */
  Ok = 'OK',
  /** Oregon */
  Or = 'OR',
  /** Pennsylvania */
  Pa = 'PA',
  /** Puerto Rico */
  Pr = 'PR',
  /** Rhode Island */
  Ri = 'RI',
  /** South Carolina */
  Sc = 'SC',
  /** South Dakota */
  Sd = 'SD',
  /** Tennessee */
  Tn = 'TN',
  /** Texas */
  Tx = 'TX',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** Utah */
  Ut = 'UT',
  /** Virginia */
  Va = 'VA',
  /** Virgin Islands, U.S. */
  Vi = 'VI',
  /** Vermont */
  Vt = 'VT',
  /** Washington */
  Wa = 'WA',
  /** Wisconsin */
  Wi = 'WI',
  /** West Virginia */
  Wv = 'WV',
  /** Wyoming */
  Wy = 'WY'
}

export type SystemStats = {
  __typename?: 'SystemStats';
  /** Number of organizations in the system */
  organization_count?: Maybe<Scalars['Int']['output']>;
  /** Number of pets in the system */
  pet_count?: Maybe<Scalars['Int']['output']>;
  /** Number of users in the system */
  user_count?: Maybe<Scalars['Int']['output']>;
};

export type TextTemplate = {
  __typename?: 'TextTemplate';
  author?: Maybe<User>;
  created_at?: Maybe<Scalars['Instant']['output']>;
  id: Scalars['UUID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Text_Template_Type;
};

export type TextTemplatesConnection = {
  __typename?: 'TextTemplatesConnection';
  entities?: Maybe<Array<TextTemplate>>;
  next_token?: Maybe<Scalars['String']['output']>;
};

export enum Text_Template_Type {
  /** Medical */
  Medical = 'MEDICAL',
  /** Reminder */
  Reminder = 'REMINDER'
}

export type UnarchivePetApplicationInput = {
  airtable_id: Scalars['String']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type UpdateDiagnosisAggressionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisAllergyInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<DiagnosisAllergyType>;
  type_other?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDiagnosisAnxietyInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisCoccidiaInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisDemodexInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisDentalDiseaseInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisDermatophytosisRingwormInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisDiarrheaCauseUnknownInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisEarMitesInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisFelineImmunodeficiencyVirusFivInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisFelineInfectiousPeritonitisFipInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisFelineLeukemiaVirusFelvInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisGiardiaInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisHeartwormInfectionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisOtitisEarInfectionInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisPanleukopeniaVirusFelineInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisParvovirusCanineInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisResourceGuardingInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisUpperRespiratoryTractInfectionUriInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisUrinaryTractInfectionUtiInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateDiagnosisUrolithiasisBladderStonesInput = {
  datetime?: InputMaybe<Scalars['Instant']['input']>;
  description?: InputMaybe<Array<InputMaybe<NoteOperationInput>>>;
  diagnosis_id: Scalars['UUID']['input'];
  resolution?: InputMaybe<CreateDiagnosisResolutionInput>;
  share_with_adopters?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateEcontractTemplateInput = {
  econtract_template_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
  template_file_ref?: InputMaybe<Input_UploadedFileRef>;
  template_title?: InputMaybe<Scalars['String']['input']>;
};

/** Input for updating a file. */
export type UpdateFileInput = {
  file_id: Scalars['UUID']['input'];
};

export type UpdateMedicalEventInput = {
  date?: InputMaybe<Scalars['Instant']['input']>;
  line_items?: InputMaybe<Array<InputMaybe<MedicalEventLineItemOperationInput>>>;
  medical_event_id: Scalars['UUID']['input'];
  organization_id: Scalars['UUID']['input'];
};

export type UpdateMedicalEventLineItemInput = {
  diagnosis_aggression?: InputMaybe<UpdateDiagnosisAggressionInput>;
  diagnosis_allergy?: InputMaybe<UpdateDiagnosisAllergyInput>;
  diagnosis_anxiety?: InputMaybe<UpdateDiagnosisAnxietyInput>;
  diagnosis_coccidia?: InputMaybe<UpdateDiagnosisCoccidiaInput>;
  diagnosis_demodex?: InputMaybe<UpdateDiagnosisDemodexInput>;
  diagnosis_dental_disease?: InputMaybe<UpdateDiagnosisDentalDiseaseInput>;
  diagnosis_dermatophytosis_ringworm?: InputMaybe<UpdateDiagnosisDermatophytosisRingwormInput>;
  diagnosis_diarrhea_cause_unknown?: InputMaybe<UpdateDiagnosisDiarrheaCauseUnknownInput>;
  diagnosis_ear_mites?: InputMaybe<UpdateDiagnosisEarMitesInput>;
  diagnosis_feline_immunodeficiency_virus_fiv?: InputMaybe<UpdateDiagnosisFelineImmunodeficiencyVirusFivInput>;
  diagnosis_feline_infectious_peritonitis_fip?: InputMaybe<UpdateDiagnosisFelineInfectiousPeritonitisFipInput>;
  diagnosis_feline_leukemia_virus_felv?: InputMaybe<UpdateDiagnosisFelineLeukemiaVirusFelvInput>;
  diagnosis_feline_lower_urinary_tract_disease_flutd?: InputMaybe<UpdateDiagnosisFelineLowerUrinaryTractDiseaseFlutdInput>;
  diagnosis_giardia?: InputMaybe<UpdateDiagnosisGiardiaInput>;
  diagnosis_heartworm_infection?: InputMaybe<UpdateDiagnosisHeartwormInfectionInput>;
  diagnosis_otitis_ear_infection?: InputMaybe<UpdateDiagnosisOtitisEarInfectionInput>;
  diagnosis_panleukopenia_virus_feline?: InputMaybe<UpdateDiagnosisPanleukopeniaVirusFelineInput>;
  diagnosis_parvovirus_canine?: InputMaybe<UpdateDiagnosisParvovirusCanineInput>;
  diagnosis_resource_guarding?: InputMaybe<UpdateDiagnosisResourceGuardingInput>;
  diagnosis_upper_respiratory_tract_infection_uri?: InputMaybe<UpdateDiagnosisUpperRespiratoryTractInfectionUriInput>;
  diagnosis_urinary_tract_infection_uti?: InputMaybe<UpdateDiagnosisUrinaryTractInfectionUtiInput>;
  diagnosis_urolithiasis_bladder_stones?: InputMaybe<UpdateDiagnosisUrolithiasisBladderStonesInput>;
};

export type UpdateMedicalEventResult = {
  __typename?: 'UpdateMedicalEventResult';
  medical_event: MedicalEvent;
};

export type UpdateNoteInput = {
  note_id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type UpdatePetApplicationInput = {
  airtable_id: Scalars['String']['input'];
  organization_id: Scalars['UUID']['input'];
  status?: InputMaybe<PetApplicationStatus>;
};

/** Input for updating images for a pet. */
export type UpdatePetImagesInput = {
  /** Updates to apply to the images for the pet. */
  file_updates?: InputMaybe<Array<UpdateFileInput>>;
  /** ID of the organization-pet to update images for. */
  organization_pet_id: Scalars['UUID']['input'];
};

/** updateTextTemplate input */
export type UpdateTextTemplateInput = {
  organization_id: Scalars['UUID']['input'];
  text: Scalars['String']['input'];
  text_template_id: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
};

/** updateTextTemplate mutation result */
export type UpdateTextTemplatePayload = {
  __typename?: 'UpdateTextTemplatePayload';
  text_template: TextTemplate;
};

export type User = {
  __typename?: 'User';
  auth0_id?: Maybe<Scalars['String']['output']>;
  /** Date person registered as a user in the system */
  date_registered?: Maybe<Scalars['Instant']['output']>;
  /** A user's unique id */
  id?: Maybe<Scalars['String']['output']>;
  /** A user's person profile */
  profile?: Maybe<Person>;
  settings?: Maybe<User_Settings>;
};

export type UserProfileInput = {
  /** Activities willing to participate in */
  activities?: InputMaybe<Array<InputMaybe<Person_Activities>>>;
  /** Person's address */
  address?: InputMaybe<AddressInput>;
  /** Person's birthdate. */
  birthdate?: InputMaybe<Scalars['Instant']['input']>;
  /** Email address */
  email?: InputMaybe<Scalars['String']['input']>;
  /** First Name */
  first_name?: InputMaybe<Scalars['String']['input']>;
  /** Last Name */
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Phone number */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** An Input_UploadedFileRef. This file will be added to the person photo field. */
  photo?: InputMaybe<Input_UploadedFileRef>;
  /** State id or driver's license */
  state_id?: InputMaybe<Scalars['String']['input']>;
  /** Distance willing to volunteer in meters. */
  volunteer_distance_meters?: InputMaybe<Scalars['Float']['input']>;
};

export type User_Settings = {
  __typename?: 'User_Settings';
  accepted_terms?: Maybe<Scalars['Boolean']['output']>;
  date_format?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  in_app_notifications?: Maybe<Scalars['Boolean']['output']>;
  referred_by?: Maybe<Scalars['String']['output']>;
  text_notifications?: Maybe<Scalars['Boolean']['output']>;
  time_format?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

/** DEPRECATED: Vets are now a partner person role */
export type Vet = {
  __typename?: 'Vet';
  name: Scalars['String']['output'];
};

/** A vet and partner clinic */
export type VetClinic = {
  __typename?: 'VetClinic';
  clinic: Partner;
  vet?: Maybe<PartnerPerson>;
};

export type Weight = {
  __typename?: 'Weight';
  /** Weight Unit */
  unit: WeightUnit;
  /** Weight */
  value: Scalars['Float']['output'];
};

export type WeightInput = {
  /** Weight unit */
  unit: WeightUnit;
  /** Weight */
  value: Scalars['Float']['input'];
};

/** The concatenation of these enums: WeightUnit_Metric, WeightUnit_Imperial */
export enum WeightUnit {
  /** Grams */
  Grams = 'GRAMS',
  /** Kilograms */
  Kilograms = 'KILOGRAMS',
  /** Ounces */
  Ounces = 'OUNCES',
  /** Pounds */
  Pounds = 'POUNDS'
}

export enum WeightUnit_Imperial {
  /** Ounces */
  Ounces = 'OUNCES',
  /** Pounds */
  Pounds = 'POUNDS'
}

export enum WeightUnit_Metric {
  /** Grams */
  Grams = 'GRAMS',
  /** Kilograms */
  Kilograms = 'KILOGRAMS'
}

export type Permissionable = {
  id?: Maybe<Scalars['UUID']['output']>;
};

export type GetCatsQueryVariables = Exact<{
  orgId: Scalars['UUID']['input'];
}>;


export type GetCatsQuery = { __typename?: 'Query', organization_pets2?: { __typename?: 'OrganizationPetsConnection', entities?: Array<{ __typename?: 'Organization_Pet', id?: any | null, status?: Organization_Pet_Status | null, adoption_fee?: { __typename?: 'Money', amount: number, currency: Currency } | null, pet?: { __typename?: 'Pet', name?: string | null, status?: Pet_Status | null, status_details?: string | null, description?: string | null, species?: Pet_Species | null, breed_cat?: Array<Pet_Breed_Cat | null> | null, mixed?: boolean | null, estimated_birth_date?: any | null, special_needs?: string | null, distinguishing_marks?: string | null, weight_lbs?: number | null, youtube_video_url?: string | null, gender?: Pet_Gender | null, siblings?: Array<{ __typename?: 'Pet', id?: any | null, name?: string | null } | null> | null, images?: Array<{ __typename?: 'File', url?: string | null } | null> | null } | null } | null> | null } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetCatsDocument = new TypedDocumentString(`
    query GetCats($orgId: UUID!) {
  organization_pets2(
    filter: {organization_pet_status: ADOPTABLE}
    organization_id: $orgId
  ) {
    entities {
      id
      status
      adoption_fee {
        amount
        currency
      }
      pet {
        name
        status
        status_details
        description
        species
        breed_cat
        mixed
        estimated_birth_date
        special_needs
        distinguishing_marks
        weight_lbs
        youtube_video_url
        gender
        siblings {
          id
          name
        }
        images {
          url
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetCatsQuery, GetCatsQueryVariables>;