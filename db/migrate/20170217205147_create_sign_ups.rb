class CreateSignUps < ActiveRecord::Migration
  def change
    create_table :sign_ups do |t|
      t.string :email
      t.string :firstname
      t.string :lastname
      t.string :companyname
      t.string :companysize
      t.string :phonenumber

      t.timestamps null: false
    end
  end
end
