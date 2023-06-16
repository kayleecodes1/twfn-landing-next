'use client';

import { useFormik } from 'formik';
import { useState } from 'react';
import { joinSchema } from '@app/api/join/route';
import Button from '@components/ui/Button';
import ConfirmationOverlay from '@components/ui/ConfirmationOverlay';
import Form from '@components/ui/Form';
import Input from '@components/ui/Input';
import * as ApiService from '@services/ApiService';

const JoinForm: React.FC = () => {
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: undefined,
            email: undefined,
            age: undefined,
            location: undefined,
            genderIdentity: undefined,
            leadSource: undefined,
            socialLink: undefined,
        },
        validationSchema: joinSchema,
        onSubmit: async (data) => {
            await ApiService.submitJoinRequest(joinSchema.cast(data));
            setIsConfirmationVisible(true);
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit} variant="discord">
            <Form.Item>
                <Input type="text" placeholder="Name" required {...formik.getFieldProps('name')} />
            </Form.Item>
            <Form.Item>
                <Input type="email" placeholder="Email" required {...formik.getFieldProps('email')} />
            </Form.Item>
            <Form.Item size="small">
                <Input type="number" min="18" max="100" placeholder="Age" required {...formik.getFieldProps('age')} />
            </Form.Item>
            <Form.Item size="medium">
                <Input type="text" placeholder="Location" required {...formik.getFieldProps('location')} />
            </Form.Item>
            <Form.Item>
                <Input type="text" placeholder="Gender identity" required {...formik.getFieldProps('genderIdentity')} />
            </Form.Item>
            <Form.Item>
                <Input
                    type="text"
                    placeholder="How did you hear about us?"
                    required
                    {...formik.getFieldProps('leadSource')}
                />
            </Form.Item>
            <Form.Item>
                <Input type="url" placeholder="Social link" required {...formik.getFieldProps('socialLink')} />
            </Form.Item>
            <Form.Item>
                <Button isLoading={formik.isSubmitting} type="submit">
                    Submit
                </Button>
            </Form.Item>
            <ConfirmationOverlay
                description="We've received your application."
                isVisible={isConfirmationVisible}
                title="Thank you!"
            />
        </Form>
    );
};

export default JoinForm;
