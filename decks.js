// decks.js – Main Topic → Subject / Period → Deck name → cards
const flashcardData = {
  "ID 24": {
    "Philippines": {
      factors_affecting_style: [
        ["Geography and Climate", "Tropical heat, humidity, typhoons, varied terrain influence elevation, ventilation, materials.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Availability of Resources", "Timber, bamboo, nipa, rattan, minerals; affects durability and design.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Religion", "Catholic majority; Islam and others influence sacred architecture and rituals.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Socio-economic Conditions", "Class structure, trade economy, cost of living shape housing scale.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Historical and Political Events", "Colonization, wars, disasters produce hybrid rebuilding styles.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Trade and Commerce", "Introduces foreign materials and design ideas.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Earlier Styles", "Vernacular foundations evolve into colonial hybrids.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"],
        ["Technology Level", "From bamboo joinery to reinforced concrete systems.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ_ajSxSNsmqSTYk4EFkbLMuQEEJ0QIGkBlA&s"]
      ],
      pre_colonial_structures: [
        ["General Traits", "Stilted, breathable, lightweight, climate-adaptive, communal."],
        ["Tabon Cave", "Early human remains in Palawan."],
        ["Angono Petroglyphs", "127 carvings; prehistoric rock art."],
        ["Kabayan Cave", "Burial caves in Benguet."],
        ["Pinanahang", "Simple lean-to shelter."],
        ["Balangay", "Large plank boat (320 AD); migration and trade."],
        ["Bahay Kubo", "Elevated bamboo/nipa cube house; open plan."],
        ["Bay Sinug", "Tausug connected stilt houses; nine symbolic posts."],
        ["Sinadumparan", "Ivatan stone house; small openings; typhoon-resistant."],
        ["Maytuab", "Improved Ivatan house with thicker roof."],
        ["Fale", "Ifugao house; windowless; 3 levels; defensive."],
        ["Samal House", "Over-water stilt community house."],
        ["Torogan", "Maranao royal house with okir carvings."],
        ["Naga Tajuk Pasung", "Sea serpent roof finial."],
        ["Manuk-Manuk Tajuk Pasung", "Sarimanok bird roof finial."],
        ["Bahay Kubo Furniture", "Banig mats, dulang, hanging baskets, portable storage."],
        ["Torogan Furniture", "Pukahanan mats, baol chest, stools, brassware."],
        ["Fale Furniture", "Bamboo platforms, woven mats, baskets."],
        ["Samal Furniture", "Mats, hammocks, nets, portable containers."]
      ],
      spanish_colonial_urbanism: [
        ["Spiked Log Palisade", "Early Manila defensive wall."],
        ["1583 Great Fire of Manila", "Shift toward stone construction."],
        ["1645 Manila Earthquake", "Stone + wood hybrid technique."],
        ["Reduccion", "Forced pueblo settlement around church."],
        ["Bajo de Campana", "Under church authority zone."],
        ["Laws of the Indies", "Grid layout; central plaza."],
        ["Plaza Mayor", "Church and government focal area."]
      ],
      bahay_na_bato: [
        ["Bahay na Bato", "Stone lower floor; wooden upper; arquitectura mestiza."],
        ["Zaguan", "Entrance hall and carriage storage."],
        ["Cuadra", "Horse stable."],
        ["Bodega", "Storage."],
        ["Tienda", "Commercial street space."],
        ["Aljibe", "Water cistern."],
        ["Silong", "Under-house space."],
        ["Pundasyon", "Latrine room."],
        ["Caida", "Reception area."],
        ["Sala Mayor", "Main living/dance room."],
        ["Comedor", "Dining room."],
        ["Cuartos", "Bedrooms."],
        ["Oratorio", "Prayer room."],
        ["Cocina", "Kitchen."],
        ["Azotea", "Open service balcony."],
        ["Despacho", "Office."],
        ["Entresuelo", "Mezzanine."],
        ["Mirador", "Lookout tower."],
        ["Volada", "Overhanging upper floor."],
        ["Haligi", "Structural posts."],
        ["Escalera", "Grand staircase."],
        ["Pasamano", "Handrail."],
        ["Barandilla", "Balustrade."],
        ["Columnilla", "Small window columns."],
        ["Ventanilla", "Lower sliding ventilation window."],
        ["Calado", "Pierced ventilation panel."],
        ["Persiana", "Slatted shutter."],
        ["Media Aguas", "Metal window awning."],
        ["Postigo", "Small service door."],
        ["Concha", "Capiz shell window panels."],
        ["Espejo", "Transom mirror panel."],
        ["Azulejo", "Decorative tiles (Machuca)."],
        ["Ah Tay Bed", "Carved four-poster bed."],
        ["Almario", "Linen airing rack."],
        ["Aparador de Tres Luna", "Three-mirror cabinet."],
        ["Aparador Ropero", "Clothes cabinet."],
        ["Banggera", "Dish-drying rack."],
        ["Bastonero", "Hat/cane stand."],
        ["Batibot Chair", "Durable cane-backed chair."],
        ["Gallinera", "Bench with storage."],
        ["Painadora", "Vanity dresser."],
        ["Paminggalan", "Food cabinet."],
        ["Silla Perezosa", "Reclining chair."],
        ["Urna", "Religious altar cabinet."],
        ["Vitrina", "Glass display cabinet."]
      ],
      pensionados: [
        ["Carlos Barretto", "First Pensionado; Art Deco influence."],
        ["Tomas Mapua", "License #1; founded Mapua Institute."],
        ["Juan Arellano", "Metropolitan Theater, Post Office."],
        ["Antonio Toledo", "Neoclassical public works architect."],
        ["Andres Luna de San Pedro", "Art Nouveau/Deco residences."],
        ["Tomas Arguelles", "Early modern commercial architect."]
      ],
      american_colonial_period: [
        ["Sanidad", "Public health system."],
        ["Sanitary Barrio", "Model housing concept."],
        ["Chalet (Tsalet)", "Filipino-American hybrid house (1912)."],
        ["Proto-modernism", "Early functional public buildings."],
        ["City Beautiful", "Grand civic planning."],
        ["Daniel Burnham", "Planned Manila and Baguio (1904–05)."],
        ["Neoclassicism", "Columns, domes, symmetry in government buildings."]
      ],
      art_deco: [
        ["Art Deco", "Geometric, streamlined, machine-age style (1925 Paris Expo)."],
        ["Characteristics", "Repetition, symmetry, smooth surfaces."],
        ["Materials", "Metal, glass, marble, exotic wood, concrete."],
        ["Perez-Samanillo Building", "Art Deco landmark (Andres Luna)."],
        ["Metropolitan Theater", "Juan Arellano; Filipino neo-baroque Art Deco."],
        ["Far Eastern University", "Pablo Antonio Art Deco campus."],
        ["Ambassador Style", "Streamlined narra sofa set."],
        ["Wrought Iron", "Victorian-influenced metal furniture."]
      ],
      post_war_period: [
        ["Post-war Modernism", "Rebuilding era; function over ornament."],
        ["Angel Nakpil", "Bauhaus-influenced architect."],
        ["Thin Shell Concrete", "Structural innovation."],
        ["Bungalows", "Simple, climate-responsive houses."],
        ["Apartments", "Modern housing blocks."],
        ["Holy Sacrifice Church", "Circular thin-shell concrete chapel (Locsin)."]
      ]
    },
    "China": {
      general: [
        ["Qi", "Life force or energy that flows through all living things and a vital component of Chinese interior design. It is an energy flow."],
        ["Feng Shui", "A practice harmonizing elements for positive energy flow"],
        ["wood, fire, earth, metal, and water", "The five elements"],
        ["Semi Circle or U-Shape", "Sofas and Chairs should be placed this way to encourage conversation and social interaction"],
        ["Mirror", "Can amplify or redirect energy"],
        ["Yin and Yang", "Represent the duality and interdependence of opposing forces in the Universe"],
        ["Yin", "Passive, Dark, and Feminine"],
        ["Yang", "Active, Bright, and Masculine"],
        ["Bilateral Symmetry", "Ensures balance in architectural design.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJR-ZQv0X4sn8bImZM17knOQUp290TIRdCsg&s"],
        ["Courtyards and Gardens", "Open spaces within buildings for relaxation or social gatherings."],
        ["Enclosure", "Surrounding walls providing privacy and security."],
        ["Hierarchy", "Importance of architectural elements in design."],
        ["Horizontal Accentuation", "Emphasizes horizontal lines in architecture"],
        ["South-facing", "Orientation believed to bring prosperity and warmth"],
        ["Symmetrical Layouts", "Create visual balance and harmony"],
        ["Walls", "Serve as boundaries and structural support in buildings"],
        ["Wooden Construction", "Traditional and sustainable building material in Chinese architecture"],
        ["Glazed ceramic tiles", "In vibrant colors such as red, green, blue, and yellow are commonly used", "https://image.made-in-china.com/202f0j00lVroZPLMZegc/Temple-Roofing-Buddhist-Roofing-Chinese-Green-Glazed-Terracotta-Roof-Tiles.webp"],
        ["Flying eaves", "also known as the swallowtail or upturned eaves. The ends of the roof eaves are gracefully curved upward, resembling the wings of a flying bird. It represents freedom, protection, and the ability to ward off evil spirits", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOf7eDB0Kg0_3GhUTFy1gsn8KwWRpQ1pYGMQ&s"],
        ["Dougong", "Ornate ridge decoration", "https://i.pinimg.com/236x/8c/1f/95/8c1f9526575d877128aed8bdebbcc076.jpg"],
        ["Courtyards", "considered crucial to bringing harmony and good fortune"],
        ["Moon Gate", "Shape of the half moon in the summer. Since the gates were originally found only in the houses of rich people, they represent the symbol of wealth. There are some other interpretations such as family unity or symbol of birth and renewal or rejuvenation, thanks to its circular shape and moon symbolism", "https://www.shutterstock.com/image-photo/montreal-quebec-canada-2022-botanical-600nw-2189283819.jpg"],
        ["Siheyuan", "Traditional courtyard house and rooms are arranged around a central courtyard"],
        ["north-south", "Siheyuan follows a strict ______ axis for feng shui and hierarchy"],
        ["North side", "main hall, highest status and reserved for elders"],
        ["East/West wings", "Younger generations, guest, storage"],
        ["South Side", "Entrance and service areas"],
        ["Jiangnan House", "Long narrow layout and usually two storeys. Spaces are arranged linearly and has smaller courtyards. Houses are built facing the street with rivers or canals at the back"],
        ["Floors", "Usually brick tiles, stone slabs, or wooden planks. Its slightly elevated and simple and understated"],
        ["Taotie", "Animal Mask, Mythical beast"],
        ["High Ceiling", "Reverence"],
        ["Low Ceiling", "Warm, intimate"],
        ["Wooden Planks", "Used in flooring in the southern parts of China"],
        ["Giant Wild Goose Pagoda", "It was built c. AD 652 during the Tang dynasty, when Xi'an was the imperial capital.", "https://www.advantour.com/img/china/xian/big-wild-goose-pagoda1.jpg"],
        ["Literati", "Scholar-Artists"]
      ],
      five_colors: [
        ["South", "Compass point of red"],
        ["Fire", "Basic Element of red"],
        ["Bird", "Animal of Red"],
        ["Summer", "Season of Red"],
        ["West", "Compass point of White"],
        ["Metal", "Basic element of White"],
        ["Tiger", "Animal of White"],
        ["Autumn", "Season of White"],
        ["East", "Compass point of Blue/Green"],
        ["Wood", "Basic Element of Blue/Green"],
        ["Dragon", "Animal of Blue/Green"],
        ["Spring", "Season of Blue/Green"],
        ["Center", "Compass point of Yellow"],
        ["Earth", "Basic Element of Yellow"],
        ["North", "Compass Point of Black"],
        ["Water", "Basic Element of Black"],
        ["Snake", "Animal of Black"],
        ["Winter", "Season of Black"]
      ],
      dynasties: [
        ["Pre-Han", "Low function spaces within earthen floors. Minimal furniture on open floors. Mats and bronze standa. Ritual vessels as proto-tables. Taoti Moifs", "https://upload.wikimedia.org/wikipedia/commons/5/5f/Bin_Li.jpg"],
        ["Tang", "Transition to elevated seating, Buddhist influences: symmetry and calmness, Influenced by silk road cultures and interactions, more luxurious and rich, vibrant greens and blues"],
        ["Ming", "Golden Age of Chinese Interior Design. Interiors emphasized proportion, symmetry, and clarity. Walls are often plain to highlight furniture pieces"],
        ["Qing", "Highly Decorative and Ornate interiors, Interior became denser fuller and richer, Opulent grand and colorful interiors, manhu-han mix"],
        ["Song", "More structured. Development of furniture pieces by scholars, musicians, and artists. Rectangular tables and painting desks."],
        ["Yuan", "Invested on creative work. Largely influenced by the mongol empire. Interiors have larger spaces and furniture. Pieces were more robust and well rounded. Interiors were designed for mobility"]
      ],
      furnitures_pre_han_to_yuan: [
        ["Bronzenware", "Pre-han, Bronze inlays, bronze legged tabled, bronze as a symbol of power, made with high level of craftsmanship", "https://www.comuseum.com/wp-content/uploads/2015/07/majiayao_caitao_shuangerguan-768x588.jpg"],
        ["Kang Platforms", "Han, a traditional, raised, brick or clay heated platform, primarily used for sleeping, sitting, and working in rural Northern China", "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Wanderer_warmed_by_kang300.jpg/250px-Wanderer_warmed_by_kang300.jpg"],
        ["Pingfeng screens", " Han, is a type of free-standing furniture consisting of several frames or panels. It became common during this time. It is typically made with painted silk or lacquer panels. It has functional use and symbolic significance."],
        ["Huchuang", "Han, Barbarian Seat. Influenced by foreign customs and the migration of buddhism. Its a seat for travelling and hunting."],
        ["Gongshi", "Song, Scholars rock is a common decoration in homes of scholars for inspiration"],
        ["Jiaoyi", "Yuan, Folding Chairs for literati"]
      ],
      furnitures_ming: [
        ["Yokeback Armchair", "Official's Hat armchair", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOIO0SDybh3tmykF1i8IyVcK3wtr6wFuQnIg&s"],
        ["Horeshoe-back Armchair", "Formal, curved, has crest-motifs, rattan/wood", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuwkbC6p3IudQIisDPKJjM1Rsd0ywYI2BTyw&s"],
        ["Lamp-hanger chair", "Similar to yoke but higher and armless, hang lamps at sides", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOFWV0ACVv9o9H2woboyh39JwIBkdmttgsg&s"],
        ["Folding Horseshoe-back Armchair", "Metal, late ming, high status, mobile, formal form, foot stool and leather seat", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_68Z1DGBEwiIgsjR03eA4X3BqMF0HdmbKow&s"],
        ["Square corner cabinets", "For storing books, metal handle, side table, short", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr79V5OV-hRMSbygwz9tjyV77-sM6uqrDTew&s"],
        ["Round-corner cabinets", "Noodle cabinet, Clothes on top, Mattress down, for quilts and mattreses, wedding cabinet, piece in the middle is removable", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKvRSdC7HD8BUzYBBDzoyqcTxv0NtrJqbkcQ&s"],
        ["Long Tables", "Console table in hallways, Thin, something about apron?", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuL18vFYbjp98rCyqwBOPvhOOMt3DGhhzTw&s"],
        ["Painting Table/Desk", "Zero harang, comes with a foot stool", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRnxg2oUVazJ6Tv_HnByBRVeLuMOc90f4u2fvt9Dernvl54h49"],
        ["Drum Stool", "", "https://img.carters.com.au/2a853a1ab92fdee38bfd35e74da07baa.jpg"],
        ["Square Stool", "", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1i4H2lqRodTgppaSqIhF17gqotszkv-MEQ&s"],
        ["Rose Chair", "Against wall/window opening, not ego?", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvM5XNF5Qr1h0cHPIrz1-JZpok7QagPEBeAo1GJlF78e1F5ptL"],
        ["Canopy Bed", "medallion", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQXiOZao6vvfMaqm-KE_10YPh4UKt4MMrbjiPlxSymLe_svi-MC"],
        ["Huanghuali", "Yellow Rosewood", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05RvJSCC9WYzlo3B-f8otlmuSUdL_TvoHjA&s"],
        ["Zitan", "Purple Sandalwood", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_AbupXumEG-WODiZA2aScY0kSAGa5OUZ_jg&s"]
      ],
      furnitures_qing: [
        ["Baozuo", "Throne chair, wood, zitan, jade wood inlay", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQagYo5ptboAd-o1A5fwJsHjjFWbTOlK5OxxVdVB95--GoHwjlq"],
        ["Jiazichuang", "Large canopy ed, grand in size, dragon medal, bear claw legs", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8bO7xpKVSiD9jrprpWM1Ii9cwgyP3jANDQ&s"],
        ["Ornate Screens", "Painted, carved, many panels", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS5gytE4esPfKf9prTe8nI3h7LTsdEZefYB93fT7-sxNush5a78"],
        ["Bogu Shelf", "Asymmetrical, Display for scholars, antique treasure cabinet", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuLKrYMjsjlkUUWRdH05yIwPNHko6aPAJhoryIR3-Eg6Pe9iq"]
      ],
      ceramics: [
        ["Ru Ware", "Pale blue-green glaze w/ fine crackle", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ru_Ware_%28cropped%29.JPG/250px-Ru_Ware_%28cropped%29.JPG"],
        ["Guan Ware", "Subtle gray often crackled gold. literally translates to official ware and is a renowned type of Chinese imperial ceramic made for the Song Dynasty court.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZqyKCiLE0OKzvRhJIqdsIxivibtSE6TzyQ&s"],
        ["Ge Ware", "Gray-Green w/warm tones, or ice crackle", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKalEf-2r_MIiqWk2EwvK2Mzgi5EQCpjFbuw&s"],
        ["Jun ware", "Thich purple-to-blue glaze with fluxing, looks like bruises", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhbRh6CQFWD3VxWTUuoPVtmlZNOrGUGc-qw&s"],
        ["Ding Ware", "White Porceilain w/ incision or molding"]
      ],
      motifs: [
        ["Leiwen", "Cloud and thunder patterns", "https://cdn.shopify.com/s/files/1/0714/3686/1732/files/Cloud_and_Thunder_Patterns_480x480.jpg?v=1716866569"],
        ["Ruyi", "Cloud shaped symbol, for good fortune, longetivity, and prosperity", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXfsvJM47GzvPiRYjstqCfQcJhbfGrqLjQ4Q&s"],
        ["Lingzhi", "Immortality", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7F1bio2_H-vX0BebYFGBmmbg0PsgYtNtYQA&s"],
        ["Lattice Patterns", "", "https://images.squarespace-cdn.com/content/v1/5804f817c534a523d780d0eb/1652817476466-WHMCXRWJDMHZAYKFB3N1/Chinese-Lattice_23in_RENDERING-600-WAL.jpg"],
        ["Phoenix", "Harmony and grace", "https://thumbs.dreamstime.com/b/chinese-phoenix-illustration-traditional-vector-illustration-letters-77746875.jpg"],
        ["Dragon", "Nobility, Imperial Power, 5 claws", "https://static.vecteezy.com/system/resources/previews/035/562/077/non_2x/traditional-gold-chinese-dragon-design-vector.jpg"],
        ["Lotus", "Purity", "https://thumbs.dreamstime.com/b/chinese-lotus-pattern-13461532.jpg"],
        ["Xiangyun", "Auspicious Cloudds, one of the oldest motifs in chinese culture", "https://www.shutterstock.com/image-vector/solid-style-set-traditional-chinese-260nw-2642606377.jpg"],
        ["Double Marriage", "", "https://cf.ltkcdn.net/feng-shui/images/orig/270294-1600x1066-double-happiness-symbol.jpg"],
        ["Bats", "Happiness. Red Bat overflor 3x luck. Sounds like dao, arrive", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwS79zzBkU0-iw0FEniY2DQcTPh576Wuk6A&s"]
      ],
      maybe: [
        ["Grey bricks, rammed earth, or wooden panelling", "Exterior Walls"],
        ["Wood and movable", "Interior walls"],
        ["Calligraphy, Relief carvings, Lattice Patterns", "Interior walls are decorated with these"],
        ["Wooden beams", "Ceilings are made of these"]
      ]
    }
  },
  "ID 34": {
    "Baroque Period": {
      definition_of_terms: [
        ["Baroque Period", "1590s–1750; dramatic, emotional, ornate."],
        ["History", "branch of knowledge concerned with people past events, especially those involving human affairs; a record or account, usually written and in chronological order, of past events, especially those concerning a particular nation, people, field of knowledge or activity."],
        ["Art", "Came from the Latin word ars."],
        ["Architecture", "the science or profession of designing and constructing buildings or other structure."],
        ["Barocco", "Portuguese word meaning irregular pearl."]
      ],
      baroque_architecture: [
        ["Mannerism", "is a revolt against classicism"],
        ["Chiaroscuro", "light & dark surfaces are given importance"],
        ["Parget Work", "raised decorative plasterwork or render, usually applied to the outside of timber-framed buildings."],
        ["Strap Work", "decorative motif, in flat relief, consisting variously of interlaced scrollwork, braiding, shield forms, or cross-hatching, often pierced with circular or oval holes. At times strapwork is bordered with a raised fillet (band)."],
        ["Cartouche", "Shield"],
        ["Lozenges", "Oval Protrusions"],
        ["Bosses", "Circular Protrusions"],
        ["Grotesques", "ward off evil spirits"],
        ["Protestant Reformation", "revolt against the Roman Catholic Church."],
        ["Council of Trent", "meeting of Catholic leaders in response to the protestant reformation."],
        ["Counter Reformation", "affirm the church’s vision of Christianity and reform abuses and errors."],
        ["Rene Descartes", "I think, therefore I am."],
        ["Thomas Hobbes", "Leviathan"],
        ["John Locke", "The Mind is a Tabula Rasa."],
        ["Royal Palace", "For the Royalty"],
        ["Palazzo/ Chateau", "Elite/Aristocracy"],
        ["Piazza", "It is usually marked by a district center or node with a fountain and/or sculptures and obelisks"],
        ["Solomonic Columns", "Columns with twisted shafts"],
        ["Francesco Borromini", "master of curved-wall architecture"],
        ["Santo Carlo alle Quatro Fontane", "The church of San Carlo alle Quattro Fontane, also called San Carlino, is a Roman Catholic church in Rome, Italy. The church was designed by the architect Francesco Borromini and it was his first independent commission"],
        ["Carlo Maderno", "Created the Facade for Saint Peter's Basilica"],
        ["Bernini", "Piazza for Saint Peter's Basilica"],
        ["Baldacchino", "Bernini created this for the Saint Peter's Basilica"],
        ["Tempietto of Bramante", "The Saint Paul's Cathedral is an enlarged version of it"],
        ["Bernini", "The Fountain of Trevi was originally planned by him"],
        ["Nicola Salvi", "The Fountain of Trevi was designed by him"],
        ["Giuseppe Pannini", "He completed the Fountain of Trevi"],
        ["Santa Maria della Salute", "Octagonal in form with Corinthian Columns, built in gratitude for the end of the plague."],
        ["Acropodium", "Elevated Plinth or Pedestal bearing a statue raised about the substructure"],
        ["Baldassare Longhena", "Architect of Palazzo Pesaro"],
        ["Bourgeoisie", "wealthy middle class"],
        ["Chateau de Vaux le Vicomte", "Exterior has little relevance to the interior, corinthian pilasters, classic cupola but steep roof"],
        ["Versailles Palace", "Pinnacle of Baroque Opulence."],
        ["Andre' Le Notre", "Credited for the park of the versailles."],
        ["Mansart and Charles Le Brun", "Credited for the palace of the versailles"],
        ["17", "How many lunette windows are overlooking the garden"],
        ["Charles II", "first restoration monarch after the commonwealth was in sympathy with the lavish ostentation of his cousin Louis XIV carried to such high point in France"],
        ["Christopher Wren", "Credited for St. Pauls Cathedral"],
        ["Palladian", "Austere"],
        ["Church of Santo Tomas de Villanueva", "Miagao Church in Iloilo"],
        ["Church of San Agustin", "Paoay Church in Ilocos Norte"],
        ["Our Lady of the Assumption", "Santa Maria Church in Ilocos Sur"],
        ["Immaculate Conception", "San Agustin Church in Manila"]
      ],
      baroque_art: [
        ["il tenebroso", "in dark manner"],
        ["Caravaggio", "ITALIAN Who painted the Calling of Saint Matthew, The Supper at Emmaus and the Conversion of St. Paul"],
        ["Bernini", "ITALIAN greatest sculptor in the baroque period and made the ecstasy of Saint Therese in Cornaro Chapel, and Cathedra Petri"],
        ["Artemisia Gentileschi", "ITALIAN First female painter to be widely known and appreciated, Created Susana and the Elders, Judith and the Maidservant with the head of Holofernes, and La pittura, a self portrait."],
        ["Guido Reni", "made Aurora"],
        ["Peter Paul Rubens", "FLEMISH A prince of painters and painter of princes, lived a charmed life, created the rising of the cross and the descent from the cross."],
        ["Sir Anthony Van Dyck", "FLEMISH Arrested Movement and flatters his subjects in paint"],
        ["Frans Hals", "DUTC capture fleeting expression, signature like slashing"],
        ["Rembrandt Van Rijn", "DUTCH Greatest Dutch master of the 17th century, rich but went broke, made many portraits."],
        ["Johannes Vermeer", "DUTCH Used the Camera Obscura to aid his accuracy"],
        ["Diego Velazquez", "SPANISH Started young and made Las meninas. Humanized the stiff formal court, master of realism with loose brush strokes."],
        ["William Hogarth", "ENGLISH Invented the genre of comic strip, first political cartoonist"],
        ["Thomas Gainsborough", "ENGLISH Chill"],
        ["Joshua Reynolds", "ENGLISH not Chill"],
        ["Nicolas Poussin", "FRENCH but worked in rome lol i lwk dont like his stuff but he painted the maniera magnifica."],
        ["Claude Lorrain", "FRENCH also drawn to Italy where he painted idyllic scenes of italian countryside"]
      ],
      baroque_furniture_italian: [
        ["Cassone", "Marriage Chest"],
        ["Winged Armchairs", "known as the sleeping chairs with high backrests and protective ears or wings"],
        ["Credenza", "An ornate sideboard or cabinet used for storing dishes and linens"],
        ["Baroque Console table", "Wall mounted or supported by elaborate carved legs"],
        ["Specchiera", "Gilded Mirrors, placed above consoles"],
        ["Savonarola", "X chair folding"],
        ["Seggiolone", "High backed ceremonial armchair, Throne Chair"],
        ["Commode", "Chest of Drawers, Bomble, Gilt bronze mounts"],
        ["Scrittoio", "Slanted Writing surface"],
        ["Letto a Baldacchino", "Canopied bed, grand four poster structure"],
        ["Sacristy Cabinet", "Tall monumental cabinetry built for churches and monasteries"]
      ],
      baroque_furniture_french: [
        ["Boulle Cabinet", "Decorated with tortoiseshell and brass inlay, known as boulle marquetry and mounted with gilded bronze ormolu"],
        ["Console Table", "Common in grand halls at Palace of Versailles"],
        ["Fauteuil", "Open Arm chair, exposed wooden frame, upholstered in silk or tapestry."],
        ["Bergere", "Similar to a fauteuil but completely upholstered including the sides and the arms"],
        ["Canape", "Sofa, symmetrical, used in formal reception rooms"],
        ["Bureau Mazarin", "Early pedestal desk, named after cardinal mazarin"],
        ["Lit a la Duchesse", "Elaborate Canopy bed. Drapery suspended from a tester attached to a wall"],
        ["Chaise Lounge", "daybed and placed at the foot of four poster bed, used for napping"],
        ["Miroir Dore", "Gilded mirror with heavy acanthus carvings and monumental scale"]
      ],
      baroque_furniture_ageneral: [
        ["Putto", "It is a figure of a human baby or toddler from the Renaissance"],
        ["Torcheres", "A stand made to hold a candle or lamp"],
        ["Trompe l'oeil", "Trick in the eye, an optical illusion to make an object appear two dimensional."],
        ["Ormolu", "Gilding of objects with gold paste"],
        ["Gilding", "Applying fine metallic leaf powder to solid surfaces"],
        ["Pietra Dura", "Inlay using marble, granite, and other semiprecious stones on stone surfaces like marble"],
        ["Ebonizing", "Make timber look like ebony"],
        ["Lacquer work", "Lacquer surface on which flat or relief designs are drawn"],
        ["Marquetry", "Applying small flat pieces of wood of different colors to a surface to make figurative compositions"],
        ["Inlay", "A technique in which a design is cut out of the surface to be decorated and filled in with other contrasting materials cut to fit exactly into these openings"],
        ["Chinoiserie and Japanning", "Western imitation of Asian art and lacquer work."],
        ["Churrigueresque", "Works of the Churriguera family of stuccoists in Spain"],
        ["Acanthus Leaf", "In architecture and decorative arts, a stylized ornamental motif based on a characteristic Mediterranean plant with jagged leaves"],
        ["Cartouche", " In architecture, usually a sculptured ornament in the form of a scroll unrolled, which often appears on cornices. The cartouche is frequently used as a field for inscriptions, and as an ornamental block in the cornices of house interiors. A conventionalized shield or oval. An ornate frame."],
        ["Cockleshell", "Also called the escallop or shell ornament. It was used as a carved decorative feature on furniture knees, crestings, and pendants of chairs and other furniture pieces in early 18th century English, Louis XIV, and Louis XV period designs."],
        ["Garland", "A wreath or circlet of leaves, flowers, and/or fruit with ribbon ties. It is used as a carved or painted decoration on furniture and in architecture."],
        ["Bureau Commode", "A Louis XIV large writing table with drawers."],
        ["Barley Sugar Turning", "A spiral turning that resembles a twisted rope and used for furniture legs"]
      ],
      baroque_furniture_english: [
        ["Restoration Cabinet", "Popular after charles II, large cabinet on stand, bold moldings, split turnings and marquetry"],
        ["Tallboy", "William and Mary High Chest, two part chest of drawers"],
        ["Gateleg table", "Oval or round drop leaf table supported by multiple turned legs"],
        ["Caned High-Back Chair", "High-backed chair with woven cane panels"],
        ["Chaise/Couch", "Upholstered Reclining seat"],
        ["Bureau Cabinet", "Writing desk combined with an upper display cabinet veneered in walnut with elaborate marquetry"],
        ["Four-Poster Bed", "Massive Carved posts and heavy draperies and tester"],
        ["Oyster Veneer Chest", "Drawer fronts decorated with cross sections of small wood branches"]
      ],
      baroque_maybe: [
        ["Johannes Kepler", "Planetary Motion"],
        ["Galileo Galilei", "Copernican System"],
        ["Isaac Newton", "Gravity"],
        ["Michaelangelo Merisi De Caravaggio", "Full name of Caravaggio"],
        ["Egis Quirin Asam", "GERMAN Made the assumption of the virgin"],
        ["Rich red, rosy pink, Medici blue, palace cream, Medici green, coral, peach, shades of brown, black", "Color Scheme"],
        ["Shells, Volutes, S-Curve, Rinceau", "Other decorations"],
        ["Walnut, Ebony", "Italian wood"],
        ["Oak, Walnut, Ebony", "French wood"],
        ["Walnut, Maple", "English Wood"],
        ["Pietra dura, deep carving", "Italian key ornament"],
        ["Boulle Marquetry, Ormolu", "French key ornament"],
        ["Japanning, Veneering", "English key ornament"],
        ["Religious awe and theatricality", "Italian primary goal"],
        ["Royal Glorification and Power", "French primary goal"],
        ["Comfort and Status", "English primary goal"],
        ["Sculptural, heavy, bold", "Italian Furniture form"],
        ["Massive, symmetrical, rigid", "French Furniture form"],
        ["Light, tall, vertical", "English furniture form"],
        ["Religious and aristocratic", "Italian Symbolism"],
        ["Absolute Monarchy", "French Symbolism"],
        ["Aristocratic domestic", "English Symbolism"],
        ["Ceiling Frescoes", "Interior Feature of Italian"],
        ["Grand mirrored galleries", "Interior Feature of French"],
        ["Monumental Staircases", "Interior Feature of English"]
      ]
    }
  }
};
// ──────────────────────────────────────────────
// logic logic thingy for dropdown (verify0
// ──────────────────────────────────────────────
const decks = {};
const mainTopics = [];
const mainToSubjects = {};
const subjectToDecks = {};
Object.keys(flashcardData).forEach(mainTopic => {
  mainTopics.push(mainTopic);
  mainToSubjects[mainTopic] = [];
  Object.keys(flashcardData[mainTopic]).forEach(subject => {
    const subjectKey = `${mainTopic}_${subject}`;
    mainToSubjects[mainTopic].push(subject);
    subjectToDecks[subjectKey] = [];
    Object.keys(flashcardData[mainTopic][subject]).forEach(deckName => {
      const deckKey = `${subjectKey}_${deckName}`;
      decks[deckKey] = flashcardData[mainTopic][subject][deckName];
      subjectToDecks[subjectKey].push(deckName);
    });
  });
});
window.decks = decks;
window.mainTopics = mainTopics;
window.mainToSubjects = mainToSubjects;
window.subjectToDecks = subjectToDecks;
