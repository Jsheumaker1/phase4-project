# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test1 = User.create(name:"test", username: "test", email: "test@gmail.com", password: "test1")
ldh = User.create(name:"Lonnie", username: "ldhelectric", email: "ldhelectric@gmail.com", password: "Moewaqua1")

job1 = Job.create(user:test1, customer: "Paula Morrel", address: "250 S Warren, Moweaqua, IL 62550", date: '10/01/21', description: 'Changes light switches in garage', subtotal:0, tax: 0, grand_total:0)
job2 = Job.create(user:ldh, customer: "Doug Morrel", address: "250 S Warren, Moweaqua, IL 62550", date: '10/06/21', description: 'Put new fans in house', subtotal:0, tax: 0, grand_total:0)

light_switch = Material.create(item: "light_switch", price: 4)
fan = Material.create(item: "fan", price: 85)

job_1_materials = JobMaterial.create(job:job1, material: light_switch, quantity:4, total:16)
job_2_materials = JobMaterial.create(job:job2, material: fan, quantity:5, total:1360)

