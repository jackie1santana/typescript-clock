# typescript-clock
Created an analog clock written in pure vanilla typescript

Taking the seconds and dividing it by 60 to get the percentage of the minute that has passed.
Then it is multiplying that by 360 to get the degrees of the minute that has passed. Then it is
adding 90 to that to account for the 90 degrees that the second hand is offset by.

### How to run application

- `git clone project`
- `cd /client`
- `npm install`
- `npm run build-dev`
- `npm run dev-server`
- go to `http://localhost:8080`
