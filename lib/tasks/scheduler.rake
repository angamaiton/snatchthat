require 'json'

desc "Automatic price check"

task :price_check => :environment do
  if File.exists?("public/data.json")
    File.open("public/data.json", "w") do |f|
      f.write(Price.price_check.as_json)
      puts "price add checked at #{Time.now}"
    end
  end
end



task :cron_test => :environment do
  puts "cron test at #{Time.now}"
end
