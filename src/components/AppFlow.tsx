import "./AppFlow.css";

function AppFlow() {
    return (
        <div className='app-flow'>
            <div className='section'>
                <p>Program Details</p>
            </div>
            <div className="section active">
                <p className='active-text'>Application Form</p>
            </div>
            <div className='section'>
                <p>Workflow</p>
            </div>
            <div className='line' />
            <div className='section'>
                <p>Preview</p>
            </div>
      </div>
    )
}

export default AppFlow;
