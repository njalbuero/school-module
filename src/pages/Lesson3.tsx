import { LessonActivityCard } from '../components/content/LessonActivityCard';
import { LessonPage } from '../components/content/LessonPage';
import { LessonSection } from '../components/content/LessonSection';

export default function Lesson3() {
  return (
    <LessonPage sectionId="lesson-3">
      <LessonSection
        id="assessment-and-reflection"
        title="Assessment and Reflection Activities"
      >
        <LessonActivityCard
          title="Activity 3: Education for All"
          intro={['Write an essay responding to the following statement:']}
          statement="Education for All"
          body={[
            'In your essay, explain what the statement means to you. Discuss why access to education is important and how education can contribute to a more equitable society.',
          ]}
          requirement="Your response should contain at least five sentences."
        />

        <LessonActivityCard
          title="Activity 4: Personal Reflection"
          intro={[
            'Reflect on the functions and importance of education in society.',
          ]}
          questions={[
            'How does education contribute to the development of individuals?',
            'How does education help society become more productive?',
            'In what ways does education help individuals discover and develop their potential?',
            'Why should education be considered a fundamental human right?',
            'How can you contribute to society through your education?',
          ]}
        />
      </LessonSection>
    </LessonPage>
  );
}
