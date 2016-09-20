class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.integer :top
      t.integer :left
      t.references :person, foreign_key: true

      t.timestamps
    end
  end
end
