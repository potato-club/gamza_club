import { Label } from '@/app/_components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';

const Radios = () => {
  return (
    <RadioGroup
      className="flex justify-between w-[225px]"
      defaultValue="comfortable"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="plan" id="plan" disabled={true} />
        <Label className="" htmlFor="plan">
          계획
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="progress" id="progress" disabled={true} />
        <Label htmlFor="progress">진행</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="complete" id="complete" checked={true} />
        <Label htmlFor="complete">완료</Label>
      </div>
    </RadioGroup>
  );
};

export default Radios;
