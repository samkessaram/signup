class SignUpsController < ApplicationController
  before_action :set_sign_up, only: [:show, :edit, :update, :destroy]

  # GET /sign_ups
  # GET /sign_ups.json
  def index
    @sign_ups = SignUp.all
    @sign_up = SignUp.new
  end

  # GET /sign_ups/1
  # GET /sign_ups/1.json
  def show
  end

  # GET /sign_ups/new
  def new
    @sign_up = SignUp.new
  end

  # GET /sign_ups/1/edit
  def edit
  end

  # POST /sign_ups
  # POST /sign_ups.json
  def create
    @sign_up = SignUp.new(sign_up_params)

    email = @sign_up.email

    @error = 'Invalid e-mail'

    begin
      response = Clearbit::Enrichment.find(email: email, stream: true)
      if response
        @name = response.person.name.fullName
        @company_name = response.person.employment.name
        p @name
        p @company_name
        @error = nil
      end

      respond_to do |format|
        format.html { render :new }
        format.js
      end
    rescue Nestful::ResourceInvalid
      respond_to do |format|
        format.html { render :new }
        format.js
      end
    end
    
  end

  # PATCH/PUT /sign_ups/1
  # PATCH/PUT /sign_ups/1.json
  def update
    respond_to do |format|
      if @sign_up.update(sign_up_params)
        format.html { redirect_to @sign_up, notice: 'Sign up was successfully updated.' }
        format.json { render :show, status: :ok, location: @sign_up }
      else
        format.html { render :edit }
        format.json { render json: @sign_up.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /sign_ups/1
  # DELETE /sign_ups/1.json
  def destroy
    @sign_up.destroy
    respond_to do |format|
      format.html { redirect_to sign_ups_url, notice: 'Sign up was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sign_up
      @sign_up = SignUp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def sign_up_params
      params.require(:sign_up).permit(:email, :name, :company_name, :company_size, :phone_number)
    end
end
