"use client";
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  user: {
    name: "Arthur Taylor",
    email: "arthur.taylor@apex.com",
    avatar: "/avatarr.png",
    totalBalance: 16058.94,
    currency: "USD"
  },
  cards: {
    virtual: [
      {
        id: 1,
        title: "Savings Card",
        balance: 16058.94,
        cardNumber: "1234",
        expiryDate: "06/27",
        cvc: "123",
        spendingLimit: 12000.00,
        status: "Active",
        type: "virtual",
        color: "blue"
      },
      {
        id: 2,
        title: "Business Card",
        balance: 8245.67,
        cardNumber: "5678",
        expiryDate: "08/25",
        cvc: "456",
        spendingLimit: 15000.00,
        status: "Hidden",
        type: "virtual",
        color: "green"
      }
    ],
    physical: [
      {
        id: 3,
        title: "Physical Card",
        balance: 16058.94,
        cardNumber: "1234",
        expiryDate: "06/27",
        cvc: "123",
        spendingLimit: 12000.00,
        status: "Active",
        type: "physical",
        color: "black"
      }
    ]
  },
  transactions: [
    {
      id: 1,
      icon: "netflix",
      title: "Netflix Cashback",
      subtitle: "Cashback of September, 2023",
      amount: 36.24,
      date: "2023-09-18",
      type: "credit",
      category: "entertainment",
      status: "completed"
    },
    {
      id: 2,
      icon: "rental",
      title: "Rental Income",
      subtitle: "Rental payment from Mr. Dudley.",
      amount: 800.00,
      date: "2023-09-17",
      type: "credit",
      category: "income",
      status: "completed"
    },
    {
      id: 3,
      icon: "grocery",
      title: "Grocery Shopping",
      subtitle: "Purchase of monthly groceries.",
      amount: 84.14,
      date: "2023-09-16",
      type: "debit",
      category: "shopping",
      status: "completed"
    },
    {
      id: 4,
      icon: "utilities",
      title: "Electricity Bill",
      subtitle: "Monthly electricity payment",
      amount: 120.50,
      date: "2023-09-15",
      type: "debit",
      category: "utilities",
      status: "completed"
    },
    {
      id: 5,
      icon: "shopping",
      title: "Amazon Purchase",
      subtitle: "Electronics and books",
      amount: 245.80,
      date: "2023-09-14",
      type: "debit",
      category: "shopping",
      status: "completed"
    },
    {
      id: 6,
      icon: "utilities",
      title: "Internet Bill",
      subtitle: "Monthly internet service",
      amount: 89.99,
      date: "2023-09-13",
      type: "debit",
      category: "utilities",
      status: "completed"
    },
    {
      id: 7,
      icon: "shopping",
      title: "Starbucks Coffee",
      subtitle: "Morning coffee and pastry",
      amount: 12.45,
      date: "2023-09-12",
      type: "debit",
      category: "food",
      status: "completed"
    },
    {
      id: 8,
      icon: "shopping",
      title: "Gas Station",
      subtitle: "Fuel for car",
      amount: 45.20,
      date: "2023-09-11",
      type: "debit",
      category: "transportation",
      status: "completed"
    }
  ],
  budget: {
    income: 96000,
    expenses: 24000,
    scheduled: 14000,
    monthlyIncome: 8000,
    monthlyExpenses: 2000
  },
  spending: {
    shopping: 900.00,
    utilities: 600.00,
    others: 200.00,
    weeklyLimit: 2000.00
  },
  exchange: {
    fromCurrency: "USD",
    toCurrency: "EUR",
    rates: {
      "USD_EUR": 0.94,
      "EUR_USD": 1.06,
      "USD_GBP": 0.79,
      "GBP_USD": 1.27
    }
  },
  notifications: [
    {
      id: 1,
      title: "Payment Received",
      message: "You received $800.00 from Mr. Dudley",
      type: "success",
      timestamp: "2023-09-17T10:30:00Z",
      read: false
    },
    {
      id: 2,
      title: "Card Transaction",
      message: "Transaction of $84.14 at Grocery Store",
      type: "info",
      timestamp: "2023-09-16T14:20:00Z",
      read: false
    }
  ],
  settings: {
    theme: "light",
    currency: "USD",
    notifications: true,
    twoFactorAuth: false,
    language: "en"
  }
};

// Action types
const ActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
  ADD_TRANSACTION: 'ADD_TRANSACTION',
  UPDATE_CARD: 'UPDATE_CARD',
  ADD_CARD: 'ADD_CARD',
  UPDATE_BUDGET: 'UPDATE_BUDGET',
  UPDATE_SPENDING: 'UPDATE_SPENDING',
  UPDATE_EXCHANGE: 'UPDATE_EXCHANGE',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  LOAD_DATA: 'LOAD_DATA'
};

// Reducer
function dashboardReducer(state, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    
    case ActionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    
    case ActionTypes.UPDATE_CARD:
      const { cardType, cardId, updates } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardType]: state.cards[cardType].map(card =>
            card.id === cardId ? { ...card, ...updates } : card
          )
        }
      };
    
    case ActionTypes.ADD_CARD:
      const { cardType: newCardType, card } = action.payload;
      return {
        ...state,
        cards: {
          ...state.cards,
          [newCardType]: [...state.cards[newCardType], card]
        }
      };
    
    case ActionTypes.UPDATE_BUDGET:
      return {
        ...state,
        budget: { ...state.budget, ...action.payload }
      };
    
    case ActionTypes.UPDATE_SPENDING:
      return {
        ...state,
        spending: { ...state.spending, ...action.payload }
      };
    
    case ActionTypes.UPDATE_EXCHANGE:
      return {
        ...state,
        exchange: { ...state.exchange, ...action.payload }
      };
    
    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [action.payload, ...state.notifications]
      };
    
    case ActionTypes.MARK_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? { ...notification, read: true }
            : notification
        )
      };
    
    case ActionTypes.UPDATE_SETTINGS:
      return {
        ...state,
        settings: { ...state.settings, ...action.payload }
      };
    
    case ActionTypes.LOAD_DATA:
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}

// Context
const DashboardContext = createContext();

// Provider component
export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('apex-dashboard-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: ActionTypes.LOAD_DATA, payload: parsedData });
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('apex-dashboard-data', JSON.stringify(state));
  }, [state]);

  // Action creators
  const actions = {
    updateUser: (userData) => 
      dispatch({ type: ActionTypes.UPDATE_USER, payload: userData }),
    
    addTransaction: (transaction) => 
      dispatch({ type: ActionTypes.ADD_TRANSACTION, payload: transaction }),
    
    updateCard: (cardType, cardId, updates) => 
      dispatch({ 
        type: ActionTypes.UPDATE_CARD, 
        payload: { cardType, cardId, updates } 
      }),
    
    addCard: (cardType, card) => 
      dispatch({ 
        type: ActionTypes.ADD_CARD, 
        payload: { cardType, card } 
      }),
    
    updateBudget: (budgetData) => 
      dispatch({ type: ActionTypes.UPDATE_BUDGET, payload: budgetData }),
    
    updateSpending: (spendingData) => 
      dispatch({ type: ActionTypes.UPDATE_SPENDING, payload: spendingData }),
    
    updateExchange: (exchangeData) => 
      dispatch({ type: ActionTypes.UPDATE_EXCHANGE, payload: exchangeData }),
    
    addNotification: (notification) => 
      dispatch({ type: ActionTypes.ADD_NOTIFICATION, payload: notification }),
    
    markNotificationRead: (notificationId) => 
      dispatch({ type: ActionTypes.MARK_NOTIFICATION_READ, payload: notificationId }),
    
    updateSettings: (settings) => 
      dispatch({ type: ActionTypes.UPDATE_SETTINGS, payload: settings })
  };

  return (
    <DashboardContext.Provider value={{ state, actions }}>
      {children}
    </DashboardContext.Provider>
  );
}

// Custom hook to use the context
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}

export { ActionTypes };
