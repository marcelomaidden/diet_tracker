# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Doorkeeper::Application.create(name: 'Diet tracker', redirect_uri: '', scopes: '')

User.create(name: 'Marcelo', email: 'marcelo@test.com', password: '123456',
            photo: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')
User.create(name: 'Luana', email: 'luana@test.com', password: '123456',
            photo: 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg')

User.create(
  email: 'user@example.com',
  password: 'password',
  photo: "userphotourl",
  name: "User"
)

Category.create(name: 'Carbohydrates', photo: 'https://images.unsplash.com/photo-1572969690789-1832ec2792ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80%20384w')
Category.create(name: 'Proteins', photo: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')
Category.create(name: 'Fats',
                photo: 'https://images.unsplash.com/photo-1600841889672-d3387c10c7d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w')
