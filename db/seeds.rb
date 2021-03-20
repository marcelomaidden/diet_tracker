# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Doorkeeper::Application.create(name: "Diet tracker", redirect_uri: "", scopes: "")

User.create(name: "Marcelo", email: "marcelo@test.com", password: "123456", 
photo: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')
User.create(name: "Luana", email: "luana@test.com", password: "123456", 
photo: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')

Category.create(name: "Carbohydrates")
Category.create(name: "Proteins")
Category.create(name: "Fats")
