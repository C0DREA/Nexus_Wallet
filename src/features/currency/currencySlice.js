import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRate = createAsyncThunk(
  'currency/fetchRate',
  async (targetCurrency) => {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/RON`
    );
    const data = await response.json();

    return {
      rate: data.rates[targetCurrency],
      currency: targetCurrency,
    };
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    rate: 1,
    selectedCurrency: 'EUR',
    status: 'idle',
  },
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRate.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRate.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rate = action.payload.rate;
        state.selectedCurrency = action.payload.currency;
      })
      .addCase(fetchRate.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;