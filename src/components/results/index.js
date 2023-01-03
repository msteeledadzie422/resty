import React from 'react';

const Results = () => {
    return (
      <section>
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    );
  }

export default Results;
