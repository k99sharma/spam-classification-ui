import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { predictSpam } from "../../api/api";
import type {
  SpamPredictionResponse,
  SpamPredictionRequest,
} from "../../api/api";

function ContentBox() {
  const [result, setResult] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // handle analyze button
  const handleAnalyze = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      setLoading(true); // set loading

      if (text === undefined || text === "") {
        return;
      }

      const payload: SpamPredictionRequest = {
        email: text,
      };

      const response: SpamPredictionResponse = await predictSpam(payload);

      if (!response.success) {
        setError(response.message);
        return;
      }

      const result: string = response.data;
      setResult(result);
    } catch (err) {
      setError("There is an error.");

      console.error(err);
      setResult("");
    } finally {
      setLoading(false); // unset loading
    }
  };

  // handle reset button
  const handleReset = () => {
    setText("");
    setError(null);
    setResult("");
  };

  if (error)
    return (
      <div>
        <img height={200} width={200} src="/error.png" alt="error" />
      </div>
    );

  return (
    <>
      <div className="contentBox w-4/5 mb-5">
        <TextArea
          className="contentBox__input shadow-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your email content here ..."
          rows={8}
          showCount
        />
      </div>

      <div className="contentBox__button flex gap-3 mb-5">
        <div className="contentBox__button__analyze">
          <Button
            onClick={handleAnalyze}
            loading={loading}
            variant="solid"
            color="green"
          >
            Analyze
          </Button>
        </div>

        <div className="contentBox__button__reset">
          <Button
            onClick={handleReset}
            disabled={loading}
            variant="solid"
            color="danger"
          >
            Reset
          </Button>
        </div>
      </div>

      <div className="contentBox__result text-2xl font-bold">{result}</div>
    </>
  );
}

export default ContentBox;
