## Structure
- Backend
  * Running on https://reviewify-backend.vercel.app/
  * Added a flask-UI activity Log that shows the Activity and Errors occuring
  * Reciving information from the Front end on route /flask/process_data
  * Packages:
    * Flask==2.2.2
    * Flask-cors
    * requests
    * cohere==5.1.1
    * Werkzeug==2.2.2
- Frontend (React.js)
  * Running on Add Link Here
  * Supmiting the input to the API URL https://reviewify-backend.vercel.app/flask/process_data
  * Reciving Information on https://reviewify-backend.vercel.app/flask/hello
  * Packages:
    * axios
## How to use
- Find a Business on google maps
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/24b98ed1-e70e-46e2-9a99-4674de889b42)
- Take the name and postal code and write them on Reviewify and click search
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/ad2782e9-0c96-46d1-a5b2-ae5f48192481)
- The front end is making contact with the backend, sending them the information of the business and receiving the results.
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/7f3c5327-9aac-416c-b98a-0416f108d1fb)
- As you can see on the picture the information wsa send successfully **15:06:12 | 📨 - Sending the information back**
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/c889f289-3907-4dde-b956-1632ee0359a0)
Indeed a bad McDonald’s
