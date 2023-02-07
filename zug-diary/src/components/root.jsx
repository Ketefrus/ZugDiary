import './../styles/root.scss'

export default function Root({content}) {

  return (
    <>
      <div className="wrapper">
        <div className="container center">
          <div className="content center">
            { content }
          </div>
        </div>
      </div>
    </>
  );
}

