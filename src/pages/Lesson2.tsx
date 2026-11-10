import { LessonActivityCard } from '../components/content/LessonActivityCard';
import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

export default function Lesson2() {
  return (
    <LessonPage sectionId="lesson-2">
      <LessonSection id="class-discussion" title="Class Discussion">
        <LessonActivityCard
          title="Activity 1: Education and Social Contribution"
          intro={[
            'Think of a person who became successful in their chosen profession or field through education.',
          ]}
          questions={[
            'Who is the person you selected?',
            'What educational experiences contributed to their success?',
            'How has this person contributed to society?',
            'What does this example tell us about the importance of education?',
          ]}
        />

        <LessonActivityCard
          title="Activity 2: Personal Reflection"
          intro={['Reflect on your own educational journey.']}
          questions={[
            'How important is education in your life, and how do you think it will influence your future?',
          ]}
        />
      </LessonSection>
    </LessonPage>
  );
}
