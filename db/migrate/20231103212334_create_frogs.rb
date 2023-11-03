class CreateFrogs < ActiveRecord::Migration[7.0]
  def change
    create_table :frogs do |t|
      t.json :data, default: {}

      t.timestamps
    end
  end
end
