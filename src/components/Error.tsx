interface ErrorMsgProps {
  errorMsg: string;
}

const Error = ({ errorMsg }: ErrorMsgProps) => {
  return (
    <div>
      <p className="text-center text-red-600 text-3xl font-bold">{errorMsg}</p>
    </div>
  );
};

export default Error;
