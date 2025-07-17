# Interactive Booking Calendar

A modern, responsive booking calendar built with React and TypeScript that allows users to select multiple dates and complete bookings with guest information.

## Features

- **Multi-Date Selection**: Click to select individual dates (up to 5 dates per booking)
- **Dynamic Pricing**: Real-time price calculation based on selected dates
- **Guest Booking Form**: Complete booking with guest name (20 character limit)
- **Form Validation**: Guest name validation with Enter key submission
- **Booking Confirmation**: Success modal with booking details
- **Visual Feedback**: Highlighted selected dates and booked dates
- **Month Navigation**: Navigate between months with arrow buttons
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Booking Summary**: Shows selected dates, number of nights, and total price
- **Past Date Prevention**: Prevents selection of past dates
- **Data Persistence**: Saves booking data and form state in localStorage
- **Centralized Theme System**: Consistent colors throughout the application
- **Modular Components**: Well-organized component architecture

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application

### Build for Production

```bash
npm run build
```

## Technical Implementation

### Architecture

- **React Hooks**: Uses `useState` for state management and `useMemo` for performance optimization
- **TypeScript**: Full type safety with explicit types for all state variables and function parameters
- **CSS Custom Properties**: Centralized theme system with 60+ color variables
- **Component-based**: Modular design with 10 focused, reusable components
- **LocalStorage**: Persistent data storage for bookings and user selections

### Key Components

- `BookingCalendar.tsx`: Main orchestrator component
- `CalendarGrid.tsx`: Calendar layout and day rendering
- `CalendarDay.tsx`: Individual date cell with interactions
- `BookingForm.tsx`: Guest information input with validation
- `SuccessModal.tsx`: Booking confirmation display
- `Notification.tsx`: Toast notifications for user feedback
- And 4 more specialized components

### Theme System

- `colors.ts`: Centralized color definitions
- `colors.css`: CSS custom properties for all colors
- `ThemeProvider.tsx`: React context for theme access
- `useTheme.ts`: Custom hook for theme utilities

### State Management

- `selectedDates`: Array of selected Date objects
- `currentMonth`: Current calendar month display
- `bookedRanges`: Array of completed bookings
- `guestName`: Form input with 20 character validation
- `showBookingForm`: Form visibility state
- `notification`: Toast notification state
- And 3 more state variables, all with explicit TypeScript types
