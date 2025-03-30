# Crime Reporting Dashboard

This project is a **React-based, map-based crime reporting dashboard** where users can view crime reports as drop pins on an interactive map. Each pin represents a specific crime, and users can interact with the pins to see more details about each crime report.

## Features

- **Crime Data Integration**: Crime reports are fetched from the CrimeData JSON file, containing essential information related to each reported crime.
  
- **Interactive Map**: Crime reports are displayed as drop pins on the map, allowing users to interact with each pin.

- **Popup Cards**: On clicking a pin, a **popup card** is displayed with the following details:
  - **Report Details**: Information about the crime.
  - **Crime Type**: Type of crime (e.g., Assault, Robbery, Homicide, Kidnapping).
  - **Report Date & Time**: When the crime was reported.
  - **Report Status**: Current status of the report (e.g., Pending, En Route, On Scene, Under Investigation, Resolved).

- **Category-Based Filtering**: A feature to filter crime reports by type, allowing users to show or hide specific crime categories on the map.

## Technologies Used

- **React.js**: Frontend framework for building the interactive UI.
- **Leaflet.js**: JavaScript library for creating interactive maps.
- **Heroicons**: Icon set used for the UI.
- **ShadCN UI**: A set of UI components for React to easily add interactive elements.
- **HTML & CSS**: Basic structure and styling.
- **JavaScript**: Logic for fetching and processing the crime data, displaying it on the map, and implementing the filtering feature.

## Installation

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/YourUsername/CrimeCity.git
    ```

2. Install dependencies using npm:

    ```bash
    npm install
    ```

3. Install **Leaflet.js** and **Heroicons** for the map and iconography:

    ```bash
    npm install leaflet
    npm install @heroicons/react
    ```

4. Install **ShadCN UI** for UI components:

    ```bash
    npx shadcn-ui@latest add button
    npx shadcn-ui@latest add badge
    npx shadcn-ui@latest add tooltip
    npx shadcn-ui@latest add alert-dialog
    npx shadcn-ui@latest add skeleton
    npx shadcn-ui@latest add alert
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

    This will run the app locally on `http://localhost:5174`.

## Usage

- The map will automatically load with crime report pins once the page is opened.
  ![image](https://github.com/user-attachments/assets/9a813332-18f3-4c32-ad6e-4ec4fc16300d)

- Hover or click on a pin to see a popup card with detailed information about the crime.
- ![image](https://github.com/user-attachments/assets/3e104e21-a230-48c8-8f2b-25e613397707)

- Use the filter controls to show or hide specific types of crimes (Assault, Robbery, Homicide, Kidnapping).
- ![image](https://github.com/user-attachments/assets/d52dcac6-abcb-42d5-a6b3-1d90ae3bbbec)


## Future Improvements

- Add a navbar with text Crime city and report New crime button that will display a form to push new data to crime JSON
- Make the ui and styling more intuitive
- deploy site
