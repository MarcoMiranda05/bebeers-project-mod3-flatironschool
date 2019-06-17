# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#  movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#  Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Beer.destroy_all
User.destroy_all
Country.destroy_all
users = User.create([
 {username: "marcomiranda"},
 {username: "amariellington"}
])
countries = Country.create([
 {name: "Belgium"},
 {name: "England"},
 {name: "Mexico"},
 {name: "United States of America"},
 {name: "Germany"},
 {name: "Czech Republic"},
 {name: "Brazil"},
 {name: "Italy"},
 {name: "Portugal"},
 {name: "Spain"},
 {name: "Scotland"},
 {name: "Denmark"},
 {name: "France"},
 {name: "Poland"},
 {name: "Netherland"},
 {name: "Ireland"}
])
beers = Beer.create([
 {name:"Corona Extra",
 brewery: "Cerveceria Modelo",
 country_id: 3,
 notes: "Born in Mexico and brought up on the beach, Corona is the perfect compliment to life’s simple pleasures. The golden colour, light refreshing flavor and iconic hand painted bottle, topped off with a freshly squeezed lime. When the living is easy, the beer is Corona.",
 abv: 4.5,
 image: "https://www.trzcacak.rs/file/max/2/26509_corona-png.png",
 style: "Lager"},
 {name:"Punk IPA",
 brewery: "BrewDog",
 country_id: 11,
 notes: "Punk IPA is the beer that kick-started it. This light, golden classic has been subverted with new world hops to create an explosion of flavour. Bursts of caramel and tropical fruit with an all-out riot of grapefruit, pineapple and lychee, precede a spiky bitter finish.",
 abv: 5.6,
 image: "https://www.stickpng.com/assets/images/585e65cccb11b227491c3408.png",
 style: "IPA"},
 {name:"Sculpin IPA",
 brewery: "Ballast Point",
 country_id: 4,
 notes: "Sculpin IPA is bright with aromas of apricot, peach, mango and lemon. Its lighter body also brings out the crispness of the hops. This delicious Ballast Point Ale took a Bronze Medal at the 2007 Great American Beer Festival in the Pro Am category.",
 abv: 7.0,
 image: "https://www.handfamilycompanies.com/filebin/images/product_images/Sculpin.png",
 style: "IPA"},
 {name:"Red Trolley",
 brewery: "Karl Strauss",
 country_id: 4,
 notes: "Brewed with a half ton of caramelized malts, this bold red ale has caramel and toffee flavors, notes of dried raisins and currants, and a slightly sweet finish.",
 abv: 5.8,
 image: "https://www.totalwine.com/media/sys_master/twmmedia/h7a/hc7/9340610674718.png",
 style: "Amber Ale"},
 {name:"Heineken",
 brewery: "Heineken",
 country_id: 15,
 notes: "100% Barley malt, choice hops and pure water give this brew unsurpassed clarity.",
 abv: 5.0,
 image: "http://pluspng.com/img-png/heineken-png-beer-bottle-png-free-buckle-material-vector-png-image-650.jpg",
 style: "Lager"},
 {name:"London Pride",
 brewery: "Fuller's",
 country_id: 2,
 notes: "London Pride is a smooth and astonishingly complex beer, which has a distinctive malty base complemented by a rich balance of well developed hop flavours from the Target, Challenger and Northdown varieties in the brew.",
 abv: 4.7,
 image: "https://d1rknyb5tfws60.cloudfront.net/images/merchandising/content/cases/fullers-london-pride-12-pack/mediumCutout.png",
 style: "Pale Ale"},
 {name:"Guinness Draught",
 brewery: "St. James's Gate",
 country_id: 16,
 notes: "The aroma of roasted grain. Dark with brown head. Roasted barley, coffee. Medium body, light carbonation.",
 abv: 4.2,
 image: "https://banner2.kisspng.com/20180612/uxt/kisspng-guinness-draught-beer-stout-beverage-can-guinness-black-lager-5b1f6940cd5721.5354003215287852168411.jpg",
 style: "Stout"},
 {name:"Beck's",
 brewery: "AB InBev",
 country_id: 5,
 notes: "Classic German lager beer with a distinctive full-bodied taste, fresh 'hoppy' bouquet, golden color and full rich head. Adding to its complexity is a slightly fruity but firm crispness and a dry, clean finish.",
 abv: 4.8,
 image: "https://www.stickpng.com/assets/images/585e639ecb11b227491c33ff.png",
 style: "Lager"},
 {name:"Delirium Tremens",
 brewery: "Brouwerij Huyghe",
 country_id: 1,
 notes: "The particular character and the unique taste of 'Delirium Tremens' result from the use of three different kinds of yeast. Its very original packing, which resembles cologne ceramics, and the colourful label contribute to its success. ",
 abv: 8.5,
 image: "https://www.delirium.be/e2/site/delirium/custom/site/upload/image/beers/delirium/.cache/tremens_bottle_4-60-225_740_0.png?v=141a9991e07deaa72bb289a8cdf02931&v=141a9991e07deaa72bb289a8cdf02931",
 style: "Belgian Ale"},
 {name:"Deus Brut des Flandres",
 brewery: "AB InBev",
 country_id: 1,
 notes: "First brewed at Bosteels, transfered to the Champagne region of France were it is treated much like a champagne with the bottles inverted and the yeast expunged and bottle recorked.",
 abv: 11.5,
 image: "https://applejack.com/site/images/Deus-Brut-Des-Flandres-750-ml-Bottle_1.png",
 style: "Belgian Ale"}
])
reviews = Review.create([
 {user_id: 1,
 beer_id: 1,
 review: "Light and easy drinking, perfect for a hot day and barbecue!",
 rating: "4.0"}
])