# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Person.destroy_all
puts "Reseeding people..."

["Waldo", "Wenda", "Odlaw", "Wizard Whitebeard", "Woof"].each do |name|
  Person.create!({ name: name })
end

puts "Reseed complete."
