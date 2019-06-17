class BeersController < ApplicationController
<<<<<<< HEAD
    


    def index
        beers = Beer.all

        render json: beers, include: [
            {
                :reviews => { 
                    except: [:id, :beer_id, :created_at, :updated_at]
                }
            }
        ]
    end

    def show
        beer =  Beer.find(params[:id])

        render json: beer, include: [
            {
                :reviews => { 
                    except: [:id, :beer_id, :created_at, :updated_at]
                }
            }
        ]
            


            
    end

    def new
        beer = Beer.new
        
    end

    def create
        beer = Beer.create( beer_params)

        render json: beer
    end

    def edit
        beer =  Beer.find(params[:id])

      
    end

    def update
        beer =  Beer.find(params[:id])

        beer.update(beer_params)

        render json: beer
    end

    private 

    def beer_params
        params.require(:beer).permit(:name, :brewery, :country, :notes, :abv, :image)
        
    end

   
end
=======
  
  def index
    beers = Beer.all
    render json: beers, include: [
      {
        :reviews => { 
          except: [:id, :beer_id, :created_at, :updated_at]
        }
      }
    ]
  end
  def show
    beer = Beer.find(params[:id])
    render json: beer, include: [
      {
        :reviews => { 
          except: [:id, :beer_id, :created_at, :updated_at]
        }
      }
    ]
      
      
  end
  def new
    beer = Beer.new
    
  end
  def create
    beer = Beer.create( beer_params)
    render json: beer
  end
  def edit
    beer = Beer.find(params[:id])
   
  end
  def update
    beer = Beer.find(params[:id])
    beer.update(beer_params)
    render json: beer
  end
  private 
  def beer_params
    params.require(:beer).permit(:name, :brewery, :country, :notes, :abv, :image)
    
  end
  
end
>>>>>>> 0b670917176a2ab42880169b193f70ad169d6ae0
