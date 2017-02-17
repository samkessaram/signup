json.array!(@sign_ups) do |sign_up|
  json.extract! sign_up, :id, :email, :firstname, :lastname, :companyname, :companysize, :phonenumber
  json.url sign_up_url(sign_up, format: :json)
end
