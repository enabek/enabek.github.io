class HousePlant
  attr_reader :name, :color

  def initialize(name, color)
    @name = name
    @color = color
  end

  def new_plant
    puts "Congrats on your new #{@name}!"
  end

  def plant_color
    puts "I love the pretty #{@color} color of this #{@name}."
  end
end

succulent = HousePlant.new(Succulent, green)
orchid = HousePlant.new(Orchid, pink)
succulent.new_plant
orchid.plant_color