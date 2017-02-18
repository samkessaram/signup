class CreateSignUps < ActiveRecord::Migration
  def change
    create_table :sign_ups do |t|
      t.string :email
      t.string :name
      t.string :company_name
      t.string :company_size
      t.string :phone_number

      t.timestamps null: false
    end
  end
end
