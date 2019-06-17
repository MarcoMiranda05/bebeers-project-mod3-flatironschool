class UsersController < ApplicationController
    before_action :current_user, only: [:show, :edit, :update, :destroy]

    def index
        users = User.all

        render json: users
    end

    def show

        render json: user
    end

    def new
        user = User.new
        
    end

    def create
        user = User.create( user_params)

        render json: user
    end

    def edit

    end

    def update

        user.update(user_params)

        render json: user
    end

    def destroy

        user.destroy

        render json: user
    end

    private 

    def user_params
        params.require(:user).permit(:username)
    end

    def current_user
        user = User.find_by(id: params[:id])
    end
end
