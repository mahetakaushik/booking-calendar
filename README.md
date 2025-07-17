# Interactive Booking Calendar

A modern, responsive booking calendar built with React and TypeScript that allows users to select date ranges and view dynamic pricing.

## Features

- **Date Range Selection**: Click to select check-in and check-out dates
- **Dynamic Pricing**: Real-time price calculation based on selected dates
- **Visual Feedback**: Highlighted selected dates and date ranges
- **Month Navigation**: Navigate between months with arrow buttons
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Booking Summary**: Shows selected dates, number of nights, and total price
- **Past Date Prevention**: Prevents selection of past dates

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

## Technical Implementation

### Architecture

- **React Hooks**: Uses `useState` for state management and `useMemo` for performance optimization
- **TypeScript**: Full type safety with interfaces for data structures
- **CSS Grid**: Modern layout techniques for the calendar grid
- **Component-based**: Modular design with reusable components

### Key Components

- `BookingCalendar.tsx`: Main calendar component with date selection logic
- `BookingCalendar.css`: Comprehensive styling with responsive design
- Dynamic pricing calculation based on hardcoded data (simulating API response)

### State Management

- `selectedRange`: Tracks check-in and check-out dates
- `currentMonth`: Controls calendar month display
- `isSelectingEnd`: Manages date selection flow

## Technical Challenges Encountered

1. **Date Range Selection Logic**:

   - Challenge: Implementing intuitive date range selection where users can select start and end dates
   - Solution: Created a state machine that tracks selection phases and handles edge cases like selecting end date before start date

2. **Calendar Grid Layout**:

   - Challenge: Creating a proper calendar grid that shows previous/next month dates
   - Solution: Used CSS Grid with proper date calculation to include leading/trailing dates from adjacent months

3. **Price Calculation**:

   - Challenge: Calculating total price for date ranges with different per-night rates
   - Solution: Implemented `useMemo` hook with date iteration to sum prices efficiently

4. **Responsive Design**:

   - Challenge: Making the calendar work well on mobile devices
   - Solution: Used CSS Grid with media queries and flexible layouts

5. **Date Formatting & Comparison**:
   - Challenge: Consistent date formatting and comparison across different time zones
   - Solution: Used ISO date strings for consistent comparison and formatting

## UI/UX Improvements Suggestions

### Immediate Improvements:

1. **Enhanced Visual States**: Add hover effects for date ranges and better visual indicators
2. **Loading States**: Add skeleton loading for pricing data
3. **Error Handling**: Display error messages for failed operations
4. **Accessibility**: Add ARIA labels, keyboard navigation, and screen reader support

### Advanced Features:

1. **Multiple Month View**: Show 2-3 months side by side on desktop
2. **Quick Date Selection**: Add preset options like "Weekend", "Next Week"
3. **Availability Indicators**: Show unavailable dates with different styling
4. **Price Trends**: Visual indicators for price changes (high/low season)
5. **Booking Constraints**: Minimum/maximum stay requirements
6. **Guest Count Integration**: Add guest selection that affects pricing

### Performance Optimizations:

1. **Virtual Scrolling**: For year-long calendar views
2. **Data Caching**: Cache pricing data to reduce API calls
3. **Code Splitting**: Lazy load calendar component
4. **Image Optimization**: Optimize any property images

Breakdown:

- Project setup and component structure: 30 minutes
- Core calendar logic and date selection: 90 minutes
- Styling and responsive design: 90 minutes
- Testing and refinements: 30 minutes
- Documentation: 30 minutes

## Future Enhancements

1. **Backend Integration**: Connect to real API for pricing and availability
2. **User Authentication**: Add user accounts and booking history
3. **Payment Integration**: Integrate with payment processors
4. **Booking Management**: Admin panel for managing bookings
5. **Internationalization**: Support for multiple languages and currencies
6. **Analytics**: Track user interaction patterns
