import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

export default function TextAreaInput({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDescription}
        rows={5}
        required
        className="leading-loose"
      />
    </div>
  );
}

const tempDescription =
  "Welcome! This is the perfect place to stay for a family of 3-5. Just minutes from the lake, slopes, and village, with easy access by bus.";
