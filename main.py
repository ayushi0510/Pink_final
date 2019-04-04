from flask import Flask,render_template

app=Flask(__name__)


@app.route('/')   #default page or start page
def welcome():
    return render_template('homepage.html')

@app.route('/assessment1')
def danger_assessment():
    return render_template('assessment1.html')

@app.route('/awareness')
def awareness():
    return render_template('awareness.html')

@app.route('/help')
def help():
    return render_template('help.html')

#create main program
if __name__ =='__main__':
    app.run(debug=True)

