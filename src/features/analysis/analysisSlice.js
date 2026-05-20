import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  suggestions: [],
};

const analysisSlice = createSlice({
    name: 'analysis',
    initialState,
    reducers: {
        setSuggestions: (state, action) => {
            const newSuggestions = action.payload;

            state.suggestions = newSuggestions.map((newS) => {
                const existing = state.suggestions.find((s) => s.id === newS.id);

                return existing ? { ...newS, comment: existing.comment } : newS;
            });
        },
        clearSuggestions: (state) => {
            state.suggestions = [];
        },
        updateSuggestionStatus: (state, action) => {
            const { id, status } = action.payload;

            const suggestion = state.suggestions.find((s) => s.id === id);
            if (suggestion) {
                suggestion.status = status;
            }
        },
        updateSuggestionComment: (state, action) => {
            const { id, comment } = action.payload;

            const suggestion = state.suggestions.find((s) => s.id === id);
            if (suggestion) {
                suggestion.comment = comment;
            }
        },
    },
});

export const { setSuggestions, clearSuggestions, updateSuggestionStatus, updateSuggestionComment } = analysisSlice.actions;
export default analysisSlice.reducer;