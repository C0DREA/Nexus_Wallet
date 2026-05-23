import { test, expect, describe } from 'vitest';
import analysisReducer, { setSuggestions, updateSuggestionStatus, updateSuggestionComment } from './analysisSlice';

describe('analysisSlice', () => {

  test('should set suggestions', () => {
    const initialState = { suggestions: [] };

    const suggestions = [
      { id: 'test', text: 'Test suggestion', status: 'pending', comment: '' }
    ];

    const state = analysisReducer(initialState, setSuggestions(suggestions));

    expect(state.suggestions.length).toBe(1);
  });

  test('should update suggestion status', () => {
    const initialState = {
      suggestions: [
        { id: 'test', text: 'Test', status: 'pending', comment: '' }
      ]
    };

    const state = analysisReducer(
      initialState,
      updateSuggestionStatus({ id: 'test', status: 'accepted' })
    );

    expect(state.suggestions[0].status).toBe('accepted');
  });

  test('should update suggestion comment', () => {
    const initialState = {
      suggestions: [
        { id: 'test', text: 'Test', status: 'accepted', comment: '' }
      ]
    };

    const state = analysisReducer(
      initialState,
      updateSuggestionComment({ id: 'test', comment: 'Looks good' })
    );

    expect(state.suggestions[0].comment).toBe('Looks good');
  });

});