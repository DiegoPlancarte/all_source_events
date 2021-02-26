json.id @vendor.id
json.name @vendor.name
json.category @vendor.category
json.address @vendor.address
json.city @vendor.city
json.zip @vendor.zip
json.description @vendor.description
json.phone @vendor.phone
json.email @vendor.email
json.user_id @vendor.user_id
json.created_at @vendor.created_at
json.updated_at @vendor.updated_at
json.photo_url polymorphic_url(@vendor.photo) if @vendor.photo.attached?