class CurliesController < ApplicationController
  # GET /curlies
  # GET /curlies.json
  def index
    @curlies = Curly.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @curlies }
    end
  end

  # GET /curlies/1
  # GET /curlies/1.json
  def show
    @curly = Curly.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @curly }
    end
  end

  # GET /curlies/new
  # GET /curlies/new.json
  def new
    @curly = Curly.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @curly }
    end
  end

  # GET /curlies/1/edit
  def edit
    @curly = Curly.find(params[:id])
  end

  # POST /curlies
  # POST /curlies.json
  def create
    @curly = Curly.new(params[:curly])

    respond_to do |format|
      if @curly.save
        format.html { redirect_to @curly, notice: 'Curly was successfully created.' }
        format.json { render json: @curly, status: :created, location: @curly }
      else
        format.html { render action: "new" }
        format.json { render json: @curly.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /curlies/1
  # PUT /curlies/1.json
  def update
    @curly = Curly.find(params[:id])

    respond_to do |format|
      if @curly.update_attributes(params[:curly])
        format.html { redirect_to @curly, notice: 'Curly was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @curly.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /curlies/1
  # DELETE /curlies/1.json
  def destroy
    @curly = Curly.find(params[:id])
    @curly.destroy

    respond_to do |format|
      format.html { redirect_to curlies_url }
      format.json { head :no_content }
    end
  end
end
