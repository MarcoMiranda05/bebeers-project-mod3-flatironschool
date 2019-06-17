class CountriesController < ApplicationController
  def index
      countries = Countries.all
      render json: countries
  end
  def show    
     country = Country.find_by(id: params[:id])
      render json: country
  end
end