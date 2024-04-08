## Structure
- Backend
  * Running on https://reviewify-backend.vercel.app/
  * Added a flask-UI activity Log that shows the Activity and Errors occurring
  * Receiving information from the Front end on route /flask/process_data
  * Packages:
    * Flask==2.2.2
    * Flask-cors
    * requests
    * cohere==5.1.1
    * Werkzeug==2.2.2
- Frontend (React.js)
  * Running on Add Link Here
  * Supmiting the input to the API
  * Packages:
    * axios
## How to use
- Find a Business on Google Maps
 ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/ab2d583f-e881-4ba6-82c8-b2664ba7611e)
- Take the name and postal code and write them on Reviewify and click Search
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/ad2782e9-0c96-46d1-a5b2-ae5f48192481)
- The front end is making contact with the backend, sending them the information of the business
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/3f543a60-1674-4f8f-a1cc-709214c4d000)
- The backend receiving the information, using the google APIs it retrieves the reviews then analize and sumarize them using Cohere AI
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/7f3c5327-9aac-416c-b98a-0416f108d1fb)
- As you can see in the picture the information was sent successfully **15:06:12 | 📨 - Sending the information back**
  ![image](https://github.com/AndrewidRizk/Reviewify-Business/assets/97995173/c889f289-3907-4dde-b956-1632ee0359a0)
Indeed a bad McDonald’s
