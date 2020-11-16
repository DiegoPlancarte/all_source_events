3.times do |user|
  User.create!(
    email: "test#{user}@email.com",
    password: "123456",
    password_confirmation: "123456"
  )
end

puts "3 users created"

4.times do |item|
  Vendor.create!(
    name: "Caterer #{item}",
    category: "Caterer",
    address: "#{rand(1..1000)} Some St",
    city: "San Diego",
    state: "CA",
    zip: "#{rand(91901..92199)}",
    description: "Sesame snaps jujubes jujubes donut muffin pie. Soufflé danish lollipop. Candy bear claw cheesecake lemon drops wafer pastry cheesecake halvah tart. Bear claw cake cheesecake liquorice jujubes soufflé bonbon. Topping cake chocolate powder marshmallow. Dessert candy canes candy canes. Sweet pastry tootsie roll tootsie roll gummies gummies chocolate sugar plum icing. Cupcake oat cake muffin cupcake toffee jelly-o chocolate bar danish liquorice. Lemon drops caramels wafer. Cheesecake brownie tootsie roll. Tootsie roll liquorice icing. Dragée donut sugar plum oat cake apple pie. Cake marshmallow cheesecake cotton candy liquorice gummi bears.",
    phone: "619-#{rand(100..999)}-#{rand(1000..9999)}",
    email: "caterer#{item}@email.com",
    user_id: rand(1..3)
  )
end

puts "4 Caterers created"

4.times do |item|
  Vendor.create!(
    name: "Venue #{item}",
    category: "Venue",
    address: "#{rand(1..1000)} Some St",
    city: "San Diego",
    state: "CA",
    zip: "#{rand(91901..92199)}",
    description: "I'm baby poutine humblebrag mumblecore, YOLO kombucha ramps knausgaard live-edge deep v kitsch wolf pabst. Skateboard woke poutine brooklyn. Farm-to-table austin hoodie etsy mumblecore. 3 wolf moon flannel tumeric, normcore sustainable hell of hella brooklyn.",
    phone: "619-#{rand(100..999)}-#{rand(1000..9999)}",
    email: "venue#{item}@email.com",
    user_id: rand(1..3)
  )
end

puts "4 Venues created"

4.times do |item|
  Vendor.create!(
    name: "Florist #{item}",
    category: "Florist",
    address: "#{rand(1..1000)} Some St",
    city: "San Diego",
    state: "CA",
    zip: "#{rand(91901..92199)}",
    description: "Florem ipsum sneezeweed peruvian lily dune helleborine plumed thistle. Scabious st john’s wort holy grass false goat’s beard. Bloom glory lily drumstick gentian buttercup cosmos foxtail lily. Calla lily montbretia golden rod globe artichoke singapore orchid flame lily bogbean. Lobster claw grass of parnassus thrift. Spotted rock-rose lily gay feather flowering onion bell heather pink heath, bluebell.",
    phone: "619-#{rand(100..999)}-#{rand(1000..9999)}",
    email: "florist#{item}@email.com",
    user_id: rand(1..3)
  )
end

puts "4 Florists created"

4.times do |item|
  Vendor.create!(
    name: "Baker #{item}",
    category: "Baker",
    address: "#{rand(1..1000)} Some St",
    city: "San Diego",
    state: "CA",
    zip: "#{rand(91901..92199)}",
    description: "Sesame snaps jujubes jujubes donut muffin pie. Soufflé danish lollipop. Candy bear claw cheesecake lemon drops wafer pastry cheesecake halvah tart. Bear claw cake cheesecake liquorice jujubes soufflé bonbon. Topping cake chocolate powder marshmallow. Dessert candy canes candy canes. Sweet pastry tootsie roll tootsie roll gummies gummies chocolate sugar plum icing. Cupcake oat cake muffin cupcake toffee jelly-o chocolate bar danish liquorice. Lemon drops caramels wafer. Cheesecake brownie tootsie roll. Tootsie roll liquorice icing. Dragée donut sugar plum oat cake apple pie. Cake marshmallow cheesecake cotton candy liquorice gummi bears.",
    phone: "619-#{rand(100..999)}-#{rand(1000..9999)}",
    email: "baker#{item}@email.com",
    user_id: rand(1..3)
  )
end

puts "4 Bakers created"