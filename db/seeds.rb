# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Flavor.destroy_all
Tea.destroy_all

@admin = User.create!(username: 'Esther1', email: 'esther1@gmail.com', password: 'esther1')

puts "#{User.count} users created"

@vegetal = Flavor.create!(name: 'Vegetal' )
@savoury = Flavor.create!(name: 'Savoury' )
@nutty = Flavor.create!(name: 'Nutty/Toasty')
@floral = Flavor.create!(name: 'Floral' )
@earthy = Flavor.create!(name: 'Earthy' )
@fruity = Flavor.create!(name: 'Fruity' )
@sweet = Flavor.create!(name: 'Sweet' )
@mineral = Flavor.create!(name: 'Mineral' )
@spicy = Flavor.create!(name: 'Spicy')

puts "#{Flavor.count} flavors created"



  Tea.create!(name: 'LongJing Green Tea',
   price: 20.49, 
   description: 'This tea has an impeccable balance between green character and the nori-like composition found in Japanese Sencha teas. It is typically harvested several days before Qingming when the new twigs have just begun to grow',
   image_url: 'https://i.imgur.com/9NdiPOd.png',
   flavor: @earthy,
   user: @admin)

  Tea.create!(name: 'Jade Oolong',
  price: 26,
  description: 'Reflecting our internal belief that oolongs should be of lower fermentation (greener), this oolong undergoes a short fermentation to refine the flavour and orchid character. Grown at 800 m elevation,  which facilitates concentration of flavour.',
  image_url: 'https://i.imgur.com/hehrkQo.jpg',
  flavor: @nutty,
  user: @admin)

  Tea.create!(name: 'White Tea',
  price: 32,
  description: ' A true luxury, considered by connoisseurs to be one of the most famous white teas, White Blossom tea combines an array of flavors for a rich finish. ',
  image_url: 'https://i.imgur.com/P531HSF.jpg',
  flavor: @floral,
  user: @admin)

  Tea.create!(name: 'Matcha',
  price: 27,
  description: 'Organic Japanese Matcha green tea powder from Shizuoka, Japan. Young first flush green leaves are picked and quickly steamed to seal in the goodness before processing .',
  image_url: 'https://i.imgur.com/e9KvEs4.jpg',
  flavor: @savoury,
  user: @admin)

  Tea.create!(name: 'Rose Petal',
  price: 33.50,
  description: 'A full rosy taste and aroma match the visual beauty of these rosebuds & petals! This soothing herbal tea consists purely of rose buds and petals.',
  image_url: 'https://i.imgur.com/fDBjvIX.png',
  flavor: @floral,
  user: @admin)

  Tea.create!(name: 'Sencha Tea',
  price: 23.75,
  description: 'The emperor of green teas, hand picked, deep steamed, and carefully dried right after harvesting. A delicately sweet, herbaceous aroma emanates from the long, flat, dark emerald leaves.',
  image_url: 'https://i.imgur.com/aREQpT2.png',
  flavor: @mineral,
  user: @admin)

  Tea.create!(name: 'Roobios Tea',
  price: 21,
  description: 'Traditionally drunk by the regions Khoi peoples, the infusion tastes like black tea yet has no caffeine, is low in tannin, and is packed with vitamins, minerals, and antioxidants.',
  image_url: 'https://i.imgur.com/twekpkM.jpg',
  flavor: @spicy,
  user: @admin)

  Tea.create!(name: 'Puer Tea',
  price: 30,
  description: 'A perfectly balanced tea from sun-dried fermentation. All the leaves harvested in a year are made into these cakes.',
  image_url: 'https://i.imgur.com/m6jZ3ZJ.png',
  flavor: @earthy,
  user: @admin)

  Tea.create!(name: 'Chrysanthemum Tea',
  price: 19.50,
  description: 'Chrysanthemum flowers have long since been part of Chinese culture. The flowers are dried, and when infused create a bold, sweet, and tangy cup. These particular flowers are grown wild in the Chinese countryside.',
  image_url: 'https://i.imgur.com/biml694.jpg',
  flavor: @vegetal,
  user: @admin)






@teas = Tea.all

puts "#{Tea.count} teas created"

