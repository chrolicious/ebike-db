export interface ECrosser {
	id: string;
	name: string;
	brand: string;
	price: number;
	priceRange: string;
	category: 'L1e-B' | 'L3e' | 'Speed Pedelec' | 'E-Fatbike';
	maxSpeed: number;
	range: string;
	motor: string;
	battery: string;
	weight: string;
	legalStatus: {
		rijbewijs: string;
		verzekering: boolean;
		kenteken: boolean;
		helm: boolean;
		fietspad: boolean;
		weg: boolean;
	};
	features: string[];
	pros: string[];
	cons: string[];
	targetAudience: string;
	mediamarktUrl?: string;
	amazonUrl?: string;
	officialUrl: string;
	specialistDealers?: {name: string, url: string}[];
	dealerNetwork: string[];
	availability: 'In voorraad' | 'Op bestelling' | 'Beperkt beschikbaar';
	warranty: string;
	serviceNetwork: 'Uitgebreid' | 'Beperkt' | 'Online alleen';
	homologation: boolean;
	certifications: string[];
}

export const eCrossers: ECrosser[] = [
	{
		id: 'surron-light-bee-x',
		name: 'Light Bee X',
		brand: 'Surron',
		price: 5199,
		priceRange: '€5.199 - €5.399',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '60-100 km',
		motor: '6000W QS Motor',
		battery: '60V 32Ah Panasonic',
		weight: '47 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Volledige ophanging', 'Hydraulische remmen', 'Regeneratief remmen', 'App connectiviteit'],
		pros: ['Krachtige motor', 'Lange levensduur batterij', 'Professionele bouw', 'Grote dealer netwerk'],
		cons: ['Hoge aanschafprijs', 'Zwaar gewicht', 'Geen fietspad toegang', 'Beperkte snellaad opties'],
		targetAudience: 'Ervaren rijders die kracht en bereik zoeken',
		officialUrl: 'https://sur-ron.com/collections/ebikes/products/light-bee-x',
		specialistDealers: [
			{name: 'Resa Racing', url: 'https://www.resa-racing.nl/sur-ron-light-bee-x-series-street-zwart'},
			{name: 'Elektrisch Motorrijden', url: 'https://elektrisch-motorrijden.nl/product/sur-ron-light-bee-x-road-legal-version/'},
			{name: 'Fat Daddy', url: 'https://www.fatdaddy.nl/product/surron-light-bee-x-blue-edition/'}
		],
		dealerNetwork: ['Resa Racing', 'Elektrisch Motorrijden', 'Fat Daddy'],
		availability: 'Op bestelling',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['L1e-B', 'CE', 'ECE R85']
	},
	{
		id: 'talaria-sting-mx5-pro',
		name: 'Sting MX5 Pro',
		brand: 'Talaria',
		price: 4599,
		priceRange: '€4.599 - €4.799',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '50-80 km',
		motor: '5400W Talaria Motor',
		battery: '60V 28.8Ah Samsung',
		weight: '44 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Verstelbare ophanging', 'Afneembare batterij', 'LED verlichting', 'Digitaal display'],
		pros: ['Goede prijs-kwaliteit', 'Afneembare batterij', 'Lichtere opbouw', 'Snelle levering'],
		cons: ['Minder krachtig dan Surron', 'Kleiner dealer netwerk', 'Beperkte onderdelen', 'Minder bekend merk'],
		targetAudience: 'Budget-bewuste rijders met L1e-B eisen',
		officialUrl: 'https://talaria-benelux.com/',
		specialistDealers: [
			{name: 'Bike Centre Holland', url: 'https://bikecentreholland.nl/product/talaria-sting-mx5-pro/'},
			{name: 'JED World', url: 'https://jedworld.nl/product/talaria-sting-r-mx5-pro-l1e-tl5500/'}
		],
		dealerNetwork: ['Bike Centre Holland', 'JED World', 'Jetski Store'],
		availability: 'In voorraad',
		warranty: '2 jaar',
		serviceNetwork: 'Beperkt',
		homologation: true,
		certifications: ['L1e-B', 'CE']
	},
	{
		id: 'segway-dirt-ebike-x260',
		name: 'Dirt eBike X260',
		brand: 'Segway',
		price: 3999,
		priceRange: '€3.999 - €4.199',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '65-90 km',
		motor: '5400W Segway Motor',
		battery: '60V 23.04Ah',
		weight: '41 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Smart connectivity', 'App controle', 'Anti-diefstal', 'Robuuste bouw'],
		pros: ['Bekende merknaam', 'Goede app integratie', 'Betrouwbare kwaliteit', 'Uitgebreide garantie'],
		cons: ['Duurder dan concurrenten', 'Minder krachtig', 'Zwaardere constructie', 'Beperkte customization'],
		targetAudience: 'Tech-savvy rijders die merkbetrouwbaarheid waarderen',
		officialUrl: 'https://store.segway.com/segway-dirt-ebike-x260',
		specialistDealers: [
			{name: 'Segway Store', url: 'https://store.segway.com/segway-dirt-ebike-x260'},
			{name: 'E-Scooter NL', url: 'https://www.e-scooter.nl/segway-dirt-ebike-x260/'}
		],
		dealerNetwork: ['Segway Store', 'E-Scooter NL'],
		availability: 'In voorraad',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['L1e-B', 'CE', 'FCC']
	},
	{
		id: 'ktm-freeride-e-xc',
		name: 'Freeride E-XC',
		brand: 'KTM',
		price: 10999,
		priceRange: '€10.999 - €11.499',
		category: 'L3e',
		maxSpeed: 65,
		range: '50-70 km',
		motor: '18kW KTM Motor',
		battery: '50V 50Ah',
		weight: '111 kg',
		legalStatus: {
			rijbewijs: 'A2 motorrijbewijs (18kW, >11kW grens)',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Premium WP ophanging', 'Brembo remmen', 'Traction control', 'Race modus'],
		pros: ['Premium kwaliteit', 'Uitstekende ophanging', 'Sterke motor', 'KTM dealer netwerk'],
		cons: ['Zeer hoge prijs', 'Beperkt bereik', 'Hoge onderhoudskosten', 'Overwegend off-road focus'],
		targetAudience: 'Premium rijders met budget voor hoogste kwaliteit',
		officialUrl: 'https://www.ktm.com/nl/e-ride/freeride-e-xc/',
		specialistDealers: [
			{name: 'JTX Motoren', url: 'https://jtxmotoren.nl/ktm-freeride-e-xc/'},
			{name: 'KTM Officieel', url: 'https://www.ktm.com/nl/e-ride/freeride-e-xc/'}
		],
		dealerNetwork: ['JTX Motoren Cuijk', 'KTM Nederland'],
		availability: 'Op bestelling',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['L1e-B', 'CE', 'ECE']
	},
	{
		id: 'stealth-h52',
		name: 'H-52',
		brand: 'Stealth Electric Bikes',
		price: 7299,
		priceRange: '€7.299 - €7.599',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '60-85 km',
		motor: '5200W Stealth Motor',
		battery: '60V 31.5Ah',
		weight: '46 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Carbon fiber onderdelen', 'Magnetische laadpoort', 'LED strip verlichting', 'Verstelbare geometrie'],
		pros: ['Uniek design', 'Lichtgewicht carbon', 'Krachtige motor', 'Australische kwaliteit'],
		cons: ['Zeer duur', 'Beperkte dealer netwerk', 'Import complexiteit', 'Onderdelen beschikbaarheid'],
		targetAudience: 'Exclusieve rijders die uniek design zoeken',
		officialUrl: 'https://www.beastbird.com/en/stealth-h-52.html',
		specialistDealers: [
			{name: 'BeastBird', url: 'https://www.beastbird.com/en/stealth-h-52.html'}
		],
		dealerNetwork: ['BeastBird (Benelux dealer)'],
		availability: 'Beperkt beschikbaar',
		warranty: '2 jaar',
		serviceNetwork: 'Beperkt',
		homologation: true,
		certifications: ['L1e-B', 'CE']
	},
	{
		id: 'cake-kalk-or',
		name: 'Kalk OR',
		brand: 'CAKE',
		price: 6499,
		priceRange: '€6.499 - €6.799',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '53-80 km',
		motor: '5000W CAKE Motor',
		battery: '51.8V 26.4Ah',
		weight: '42 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Zweeds design', 'Modulaire opbouw', 'Premium materialen', 'App connectiviteit'],
		pros: ['Minimalistisch design', 'Duurzame materialen', 'Innovative opbouw', 'Zweeds engineering'],
		cons: ['Hoge prijs', 'Beperkte dealer netwerk', 'Lange levertijd', 'Niche appeal', 'CAKE failliet 2024 — onderdelen beschikbaarheid onzeker'],
		targetAudience: 'Design-bewuste rijders met voorkeur voor Scandinavisch design',
		// Let op: CAKE ging failliet in 2023 — onderdelen en service zijn beperkt beschikbaar
		officialUrl: 'https://www.e-scooter.nl/cake-kalk-or/',
		specialistDealers: [
			{name: 'E-Scooter NL (info)', url: 'https://www.e-scooter.nl/cake-kalk-or/'}
		],
		dealerNetwork: ['CAKE Nederland'],
		availability: 'Beperkt beschikbaar',
		warranty: '2 jaar',
		serviceNetwork: 'Beperkt',
		homologation: true,
		certifications: ['L1e-B', 'CE']
	},
	{
		id: 'zero-fx',
		name: 'FX',
		brand: 'Zero Motorcycles',
		price: 12995,
		priceRange: '€12.995 - €14.995',
		category: 'L3e',
		maxSpeed: 137,
		range: '70-170 km',
		motor: '34kW ZF75-5 Motor',
		battery: '72V 7.2kWh',
		weight: '161 kg',
		legalStatus: {
			rijbewijs: 'A motorrijbewijs (34kW, volledig vermogen)',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Motorfiets kwaliteit', 'Snelladen', 'Traction control', 'Motorfiets componenten'],
		pros: ['Hoogste kwaliteit', 'Bewezen technologie', 'Snelladen mogelijk', 'Uitgebreid dealer netwerk'],
		cons: ['Extreem duur', 'Overkill voor dagelijks gebruik', 'Zware constructie', 'Motorfiets onderhoud'],
		targetAudience: 'Premium rijders met motorfiets ervaring',
		officialUrl: 'https://www.zeromotorcycles.com/model/zero-fx',
		specialistDealers: [
			{name: 'Roeleveld Zero', url: 'https://roeleveldzero.nl/'},
			{name: 'Zero Dealer Locator', url: 'https://shop.zeromotorcycles.com/en/pages/dealer-locator'}
		],
		dealerNetwork: ['Roeleveld Zero (Utrecht)', 'Zero Motorcycles NL'],
		availability: 'Op bestelling',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['L1e-B', 'CE', 'ECE']
	},
	{
		id: 'ubco-2x2-work-bike',
		name: '2x2 Work Bike',
		brand: 'UBCO',
		price: 4799,
		priceRange: '€4.799 - €4.999',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '75-100 km',
		motor: '2x 1500W UBCO Motors',
		battery: '60V 30Ah',
		weight: '43 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Dual motor 2WD', 'Modulaire accessories', 'Robuuste bouw', 'Utilitair design'],
		pros: ['2WD aandrijving', 'Praktisch design', 'Groot bereik', 'Modulaire opbouw'],
		cons: ['Utilitair uiterlijk', 'Beperkte snelheid', 'Niche merk', 'Beperkte dealer netwerk'],
		targetAudience: 'Professionele/utility rijders die 2WD waarderen',
		officialUrl: 'https://ubco.eu/',
		specialistDealers: [
			{name: 'UBCO Europe', url: 'https://ubco.eu/'}
		],
		dealerNetwork: ['UBCO Europe'],
		availability: 'Op bestelling',
		warranty: '2 jaar',
		serviceNetwork: 'Beperkt',
		homologation: true,
		certifications: ['L1e-B', 'CE']
	},
	{
		id: 'onyx-rcr',
		name: 'RCR',
		brand: 'Onyx Motorbikes',
		price: 3299,
		priceRange: '€3.299 - €3.599',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '60-90 km',
		motor: '3000W Onyx Motor',
		battery: '60V 23Ah',
		weight: '39 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs (geel kenteken, geen fietspad)',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Vintage styling', 'LED verlichting', 'USB charging', 'Comfortabele zitting'],
		pros: ['Attractieve prijs', 'Retro design', 'Goede bereik', 'Geen rijbewijs vereist'],
		cons: ['Beperkte power', 'Import merk', 'Onderdelen beschikbaarheid', 'Beperkte garantie'],
		targetAudience: 'Style-bewuste budget rijders zonder rijbewijs',
		officialUrl: 'https://onyxmotorbikes.com/rcr',
		specialistDealers: [
			{name: 'E-Scooter NL (info)', url: 'https://www.e-scooter.nl/onyx-rcr/'}
		],
		dealerNetwork: ['E-Scooter NL'],
		availability: 'In voorraad',
		warranty: '1 jaar',
		serviceNetwork: 'Beperkt',
		homologation: false,
		certifications: ['CE']
	},
	{
		id: 'super73-s2',
		name: 'S2',
		brand: 'Super73',
		price: 2499,
		priceRange: '€2.499 - €2.799',
		category: 'L1e-B',
		maxSpeed: 45,
		range: '50-75 km',
		motor: '2000W Super73 Motor',
		battery: '48V 21Ah',
		weight: '33 kg',
		legalStatus: {
			rijbewijs: 'AM bromfietsrijbewijs (geel kenteken, geen fietspad)',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: false,
			weg: true
		},
		features: ['Californian design', 'Fat tires', 'Bluetooth connectivity', 'Custom app'],
		pros: ['Iconisch design', 'Sociale media appeal', 'Goede app', 'Populair merk'],
		cons: ['Beperkte power', 'Amerikaans merk service', 'Fat tire slijtage', 'Beperkte bereik'],
		targetAudience: 'Lifestyle rijders die stijl boven prestaties stellen',
		officialUrl: 'https://eu.super73.com/products/super73-s2-bone-white',
		specialistDealers: [
			{name: 'Super73 EU Store', url: 'https://eu.super73.com/products/super73-s2-bone-white'},
			{name: 'Electric Lifestyle', url: 'https://electriclifestyle.eu/nl/super73'}
		],
		dealerNetwork: ['Super73 EU Store', 'Electric Lifestyle'],
		availability: 'In voorraad',
		warranty: '1 jaar',
		serviceNetwork: 'Beperkt',
		homologation: false,
		certifications: ['CE']
	},
	{
		id: 'rad-power-radrunner-2',
		name: 'RadRunner 2',
		brand: 'Rad Power Bikes',
		price: 1899,
		priceRange: '€1.899 - €2.099',
		category: 'E-Fatbike',
		maxSpeed: 25,
		range: '65-90 km',
		motor: '750W Rad Power Motor',
		battery: '48V 14Ah',
		weight: '29 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: false,
			kenteken: false,
			helm: false,
			fietspad: true,
			weg: true
		},
		features: ['Cargo capability', 'Step-through frame', 'Puncture resistant tires', 'Integrated lights'],
		pros: ['Zeer betaalbaar', 'Cargo capaciteit', 'Betrouwbaar merk', 'Veel accessories'],
		cons: ['Langzame top snelheid', 'Basic componenten', 'Zware constructie', 'Amerikaanse service'],
		targetAudience: 'Budget rijders die cargo functionaliteit zoeken',
		officialUrl: 'https://radpowerbikes.eu/products/radrunner-2',
		specialistDealers: [
			{name: 'Rad Power Bikes EU', url: 'https://radpowerbikes.eu/products/radrunner-2'}
		],
		dealerNetwork: ['Rad Power Bikes EU'],
		availability: 'In voorraad',
		warranty: '1 jaar',
		serviceNetwork: 'Online alleen',
		homologation: false,
		certifications: ['CE']
	},
	{
		id: 'himiway-cobra',
		name: 'Cobra',
		brand: 'Himiway',
		price: 2199,
		priceRange: '€2.199 - €2.399',
		category: 'E-Fatbike',
		maxSpeed: 25,
		range: '80-120 km',
		motor: '1000W Himiway Motor',
		battery: '48V 20Ah Samsung',
		weight: '35 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: false,
			kenteken: false,
			helm: false,
			fietspad: true,
			weg: true
		},
		features: ['Full suspension', 'Fat tires 4"', 'Dual battery option', 'Color display'],
		pros: ['Lange bereik', 'Volledige ophanging', 'Krachtige motor', 'Goede prijs'],
		cons: ['Zwaar gewicht', 'Chinese kwaliteit', 'Beperkte service', 'Import complexiteit'],
		targetAudience: 'Recreatieve rijders die comfort en bereik zoeken',
		officialUrl: 'https://himiwaybike.com/products/cobra',
		specialistDealers: [
			{name: 'Himiway NL', url: 'https://www.himiway.nl/'},
			{name: 'Dealer finder', url: 'https://nl.himiwaybike.com/pages/find-himiway-dealers'}
		],
		dealerNetwork: ['Himiway NL', 'Fat Bike Mania Amersfoort'],
		availability: 'In voorraad',
		warranty: '2 jaar',
		serviceNetwork: 'Online alleen',
		homologation: false,
		certifications: ['CE']
	},
	{
		id: 'eskimo-fat-26',
		name: 'FAT 26',
		brand: 'Eskimo',
		price: 1699,
		priceRange: '€1.699 - €1.899',
		category: 'E-Fatbike',
		maxSpeed: 25,
		range: '60-85 km',
		motor: '750W Bafang Motor',
		battery: '48V 17.5Ah',
		weight: '32 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: false,
			kenteken: false,
			helm: false,
			fietspad: true,
			weg: true
		},
		features: ['Nederlandse assemblage', 'Fat tires', 'Shimano versnellingen', 'LED verlichting'],
		pros: ['Nederlands merk', 'Betaalbaar', 'Goede service', 'Lokale assemblage'],
		cons: ['Basic componenten', 'Beperkte technologie', 'Standaard design', 'Zwaar frame', 'Model naam niet geverifieerd — controleer actuele modellen op eskimo-bikes.nl'],
		targetAudience: 'Nederlandse rijders die lokale service waarderen',
		officialUrl: 'https://eskimo-bikes.nl',
		dealerNetwork: ['Eskimo Dealers Nederland'],
		availability: 'In voorraad',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: false,
		certifications: ['CE', 'NEN']
	},
	{
		id: 'bafang-ultra-m620',
		name: 'Ultra M620 Custom',
		brand: 'Bafang (Custom Build)',
		price: 3499,
		priceRange: '€3.499 - €4.199',
		category: 'E-Fatbike',
		maxSpeed: 45,
		range: '70-100 km',
		motor: '1000W Bafang Ultra',
		battery: '52V 20Ah',
		weight: '28 kg',
		legalStatus: {
			rijbewijs: 'Afhankelijk van configuratie',
			verzekering: false,
			kenteken: false,
			helm: false,
			fietspad: true,
			weg: true
		},
		features: ['Torque sensor', 'Configureerbaar', 'Krachtige motor', 'Custom opbouw'],
		pros: ['Zeer krachtig', 'Aanpasbaar', 'Goede prijs-prestatie', 'Bafang kwaliteit'],
		cons: ['Complexe installatie', 'Legal gray area', 'Geen standaard garantie', 'DIY karakter'],
		targetAudience: 'Technische rijders die customization willen',
		amazonUrl: 'https://www.amazon.nl/dp/B0ELNO789',
		officialUrl: 'https://www.bafang-e.com/en/motor/ultra-max/',
		dealerNetwork: ['Bafang Nederland', 'Custom E-Bike Builders'],
		availability: 'Op bestelling',
		warranty: '1 jaar',
		serviceNetwork: 'Beperkt',
		homologation: false,
		certifications: ['CE']
	},
	{
		id: 'bosch-cargo-line',
		name: 'Cargo Line Speed',
		brand: 'Bosch (OEM)',
		price: 4999,
		priceRange: '€4.999 - €5.499',
		category: 'Speed Pedelec',
		maxSpeed: 45,
		range: '80-120 km',
		motor: '2500W Bosch Cargo Line',
		battery: '48V 25Ah Bosch',
		weight: '35 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: true,
			weg: true
		},
		features: ['Bosch eBike System', 'Cargo capacity', 'Premium componenten', 'Dealer netwerk'],
		pros: ['Premium kwaliteit', 'Uitgebreid dealer netwerk', 'Bewezen technologie', 'Cargo functionaliteit'],
		cons: ['Hoge prijs', 'Zwaar gewicht', 'Complex systeem', 'Duur onderhoud'],
		targetAudience: 'Professionele cargo rijders met kwaliteitseisen',
		officialUrl: 'https://www.bosch-ebike.com/nl/products/cargo-line-speed',
		dealerNetwork: ['Bosch eBike Dealers Nederland'],
		availability: 'Via OEM partners',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['CE', 'ECE R85']
	},
	{
		id: 'yamaha-pw-x3',
		name: 'PW-X3 Speed',
		brand: 'Yamaha (OEM)',
		price: 4299,
		priceRange: '€4.299 - €4.799',
		category: 'Speed Pedelec',
		maxSpeed: 45,
		range: '70-100 km',
		motor: '2500W Yamaha PW-X3',
		battery: '48V 22.5Ah',
		weight: '32 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: true,
			weg: true
		},
		features: ['Yamaha kwaliteit', 'Natuurlijk gevoel', 'Stille werking', 'Betrouwbaar'],
		pros: ['Yamaha betrouwbaarheid', 'Natuurlijke pedaal sensatie', 'Still operation', 'Dealer support'],
		cons: ['Beperkte power modes', 'Conservatief design', 'Hoge prijs', 'Limited customization'],
		targetAudience: 'Kwaliteitsbewuste rijders die natuurlijk fietsgevoel zoeken',
		officialUrl: 'https://www.yamaha-motor.eu/nl/e-bike/pw-x3-speed/',
		dealerNetwork: ['Yamaha eBike Dealers Nederland'],
		availability: 'Via OEM partners',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['CE', 'ECE R85']
	},
	{
		id: 'shimano-ep8-rs',
		name: 'EP8 RS Speed',
		brand: 'Shimano (OEM)',
		price: 3899,
		priceRange: '€3.899 - €4.299',
		category: 'Speed Pedelec',
		maxSpeed: 45,
		range: '60-90 km',
		motor: '2300W Shimano EP8',
		battery: '48V 20Ah',
		weight: '30 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: true,
			weg: true
		},
		features: ['Shimano integratie', 'Compact motor', 'App connectiviteit', 'Stille werking'],
		pros: ['Compacte motor', 'Shimano ecosysteem', 'Goede integratie', 'Betrouwbaar'],
		cons: ['Minder krachtig', 'Beperkte torque', 'Premium prijs', 'Complex systeem'],
		targetAudience: 'Technische rijders die Shimano ecosysteem waarderen',
		officialUrl: 'https://bike.shimano.com/nl-NL/technologies/component/ep8-rs.html',
		dealerNetwork: ['Shimano Service Centers Nederland'],
		availability: 'Via OEM partners',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['CE', 'ECE R85']
	},
	{
		id: 'specialized-turbo-vado-sl',
		name: 'Turbo Vado SL 5.0',
		brand: 'Specialized',
		price: 4199,
		priceRange: '€4.199 - €4.499',
		category: 'Speed Pedelec',
		maxSpeed: 45,
		range: '80-130 km',
		motor: '1950W Specialized SL 1.1',
		battery: '48V 19.2Ah',
		weight: '17 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: true,
			weg: true
		},
		features: ['Lichtgewicht carbon', 'Mission Control app', 'Geïntegreerde verlichting', 'Premium afwerking'],
		pros: ['Zeer licht gewicht', 'Premium kwaliteit', 'Lange bereik', 'Specialized dealer netwerk'],
		cons: ['Hoge prijs', 'Beperkte power', 'Carbon onderhoud', 'Premium onderdelen'],
		targetAudience: 'Performantie gerichte rijders die gewicht prioriteren',
		officialUrl: 'https://www.specialized.com/nl/nl/turbo-vado-sl-5-0',
		dealerNetwork: ['Specialized Dealers Nederland'],
		availability: 'In voorraad',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['CE', 'ECE R85']
	},
	{
		id: 'trek-allant-plus-9',
		name: 'Allant+ 9.9S',
		brand: 'Trek',
		price: 5999,
		priceRange: '€5.999 - €6.299',
		category: 'Speed Pedelec',
		maxSpeed: 45,
		range: '75-110 km',
		motor: '2500W Bosch Performance Speed',
		battery: '48V 25Ah Bosch',
		weight: '27 kg',
		legalStatus: {
			rijbewijs: 'Geen rijbewijs vereist',
			verzekering: true,
			kenteken: true,
			helm: true,
			fietspad: true,
			weg: true
		},
		features: ['Carbon fiber frame', 'Bosch premium systeem', 'Geïntegreerde verlichting', 'Trek kwaliteit'],
		pros: ['Premium materialen', 'Trek betrouwbaarheid', 'Bosch systeem', 'Uitstekende afbouw'],
		cons: ['Zeer hoge prijs', 'Premium onderhoud', 'Complex systeem', 'Overwegend high-end'],
		targetAudience: 'Premium rijders die het beste van het beste willen',
		officialUrl: 'https://www.trekbikes.com/nl/nl_NL/bikes/allant-plus-9-9s/',
		dealerNetwork: ['Trek Dealers Nederland'],
		availability: 'Op bestelling',
		warranty: '2 jaar',
		serviceNetwork: 'Uitgebreid',
		homologation: true,
		certifications: ['CE', 'ECE R85']
	}
];

export function getECrosserById(id: string): ECrosser | undefined {
	return eCrossers.find(bike => bike.id === id);
}

export function getECrossersByCategory(category: ECrosser['category']): ECrosser[] {
	return eCrossers.filter(bike => bike.category === category);
}

export function getECrossersByPriceRange(min: number, max: number): ECrosser[] {
	return eCrossers.filter(bike => bike.price >= min && bike.price <= max);
}
