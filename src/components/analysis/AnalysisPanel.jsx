import { useSelector, useDispatch } from 'react-redux';
import { updateSuggestionStatus } from '../../features/analysis/analysisSlice';
import { updateSuggestionComment } from '../../features/analysis/analysisSlice';

function AnalysisPanel() {
  const suggestions = useSelector((state) => state.analysis.suggestions);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 style={{ marginBottom: '15px' }}>Nexus AI</h2>

      <p style={{ fontSize: '12px', color: 'gray' }}>
        Analysis is based on the current expenses. Adding new expenses will reset the previous insights.
      </p>

      {suggestions.length === 0 && <p>No analysis yet</p>}

      {suggestions.map((s) => (
        <div key={s.id}>
          <p>
            {s.text} [{s.status}]
          </p>

          {s.comment && (
            <p style={{ fontStyle: 'italic' }}>
              Comment: {s.comment}
            </p>
          )}

          {s.status === 'pending' && (
            <>
              <button
                onClick={() =>
                  dispatch(updateSuggestionStatus({ id: s.id, status: 'accepted' }))
                }
              >
                Accept
              </button>

              <button
                onClick={() =>
                  dispatch(updateSuggestionStatus({ id: s.id, status: 'rejected' }))
                }
              >
                Reject
              </button>
            </>
          )}

          {s.status !== 'pending' && (
            <input
              type="text"
              placeholder="Add comment"
              value={s.comment || ''}
              style={{ marginTop: '5px', width: '100%' }}
              onChange={(e) =>
                dispatch(updateSuggestionComment({ id: s.id, comment: e.target.value }))
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default AnalysisPanel;