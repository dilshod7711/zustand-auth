import {
  Accordion,
  Button,
  Container,
  Text,
  TextInput,
  Group,
  Card,
  Title,
  Stack,
  Box,
} from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API } from "../../API/api";
import { notifications } from "@mantine/notifications";
import { queryClient } from "../../main";

const Faq = () => {
  const { data: faqs, isLoading } = useQuery({
    queryKey: ["faq"],
    queryFn: () => API.get("/faqs").then((res) => res.data.data),
  });

  const { mutate: createFaq } = useMutation({
    mutationFn: (body) => API.post("/faqs", body),
  });

  const { mutate: faqDelete } = useMutation({
    mutationFn: (id) => API.delete(`/faqs/${id}`),
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newFaq = {
      question: e.target.question.value,
      answer: e.target.answer.value,
    };
    createFaq(newFaq, {
      onSuccess: () => {
        e.target.reset();
        queryClient.invalidateQueries(["faq"]);
        notifications.show({
          title: "Yaratildi",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: err.response?.data?.message || "Xatolik",
          color: "red",
        });
      },
    });
  }

  function handleDelete(id) {
    faqDelete(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(["faq"]);
        notifications.show({
          title: "O'chirildi",
          color: "green",
        });
      },
      onError: (err) => {
        notifications.show({
          title: err.response?.data?.message || "Xatolik",
          color: "red",
        });
      },
    });
  }

  return (
    <Container size="lg" py="xl">
      <Stack spacing="xl">
        <Box>
          <Title order={2} mb="md">
            FAQ Boshqaruv Paneli
          </Title>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <form onSubmit={handleSubmit}>
              <Stack spacing="sm">
                <TextInput
                  name="question"
                  placeholder="Savolni kiriting"
                  label="Savol"
                  required
                />
                <TextInput
                  name="answer"
                  placeholder="Javobni kiriting"
                  label="Javob"
                  required
                />
                <Button type="submit" color="blue" fullWidth>
                  Qo'shish
                </Button>
              </Stack>
            </form>
          </Card>
        </Box>

        <Box>
          <Title order={3} mb="md">
            FAQ Ro‘yxati
          </Title>
          {isLoading ? (
            <Text>Yuklanmoqda...</Text>
          ) : faqs?.length === 0 ? (
            <Text>Hozircha FAQ mavjud emas.</Text>
          ) : (
            <Accordion variant="separated" radius="md" chevronPosition="right">
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} value={faq.answer}>
                  <Accordion.Control>{faq.question}</Accordion.Control>
                  <Accordion.Panel>
                    <Stack spacing="sm">
                      <Text>{faq.answer}</Text>
                      <Group position="right">
                        <Button
                          color="red"
                          size="xs"
                          variant="outline"
                          onClick={() => handleDelete(faq.id)}
                        >
                          O'chirish
                        </Button>
                      </Group>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default Faq;
