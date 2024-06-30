const baseURL = 'https://api.spacexdata.com/v4';

export const spacexService = {
  getRockets: async () => {
    try {
      const response = await fetch(`${baseURL}/rockets`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching rockets:', error);
      throw error;
    }
  },
  getRocketById: async (id) => {
    try {
      const response = await fetch(`${baseURL}/rockets/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching rocket by ID:', error);
      throw error;
    }
  },
  // Add similar methods for launches
};

export const spacexService1 = {
  getRockets: async () => {
    try {
      const response = await fetch(`${baseURL}/launches`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching launches:', error);
      throw error;
    }
  },
  getRocketById: async (id) => {
    try {
      const response = await fetch(`${baseURL}/launches/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching launch by ID:', error);
      throw error;
    }
  },
  // Add similar methods for launches
};
