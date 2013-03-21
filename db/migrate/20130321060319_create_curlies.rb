class CreateCurlies < ActiveRecord::Migration
  def change
    create_table :curlies do |t|

      t.timestamps
    end
  end
end
