# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Flavor.destroy_all
Tea.destroy_all
User.destroy_all

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


@teas = Tea.all

puts "#{Tea.count} teas created"

