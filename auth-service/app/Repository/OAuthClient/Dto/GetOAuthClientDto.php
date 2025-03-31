<?php

namespace App\Repository\OAuthClient\Dto;

class GetOAuthClientDto
{
    public ?string $name;
    public ?string $secret;
    public ?string $redirect;
    public ?bool $personal_access_client;
    public ?bool $password_client;
    public ?bool $revoked;
    public ?string $created_at;
    public ?string $updated_at;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getSecret(): ?string
    {
        return $this->secret;
    }

    public function setSecret(?string $secret): self
    {
        $this->secret = $secret;
        return $this;
    }

    public function getRedirect(): ?string
    {
        return $this->redirect;
    }

    public function setRedirect(?string $redirect): self
    {
        $this->redirect = $redirect;
        return $this;
    }

    public function isPersonalAccessClient(): ?bool
    {
        return $this->personal_access_client;
    }

    public function setPersonalAccessClient(?bool $personal_access_client): self
    {
        $this->personal_access_client = $personal_access_client;
        return $this;
    }

    public function isPasswordClient(): ?bool
    {
        return $this->password_client;
    }

    public function setPasswordClient(?bool $password_client): self
    {
        $this->password_client = $password_client;
        return $this;
    }

    public function isRevoked(): ?bool
    {
        return $this->revoked;
    }

    public function setRevoked(?bool $revoked): self
    {
        $this->revoked = $revoked;
        return $this;
    }

    public function getCreatedAt(): ?string
    {
        return $this->created_at;
    }

    public function setCreatedAt(?string $created_at): self
    {
        $this->created_at = $created_at;
        return $this;
    }

    public function getUpdatedAt(): ?string
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(?string $updated_at): self
    {
        $this->updated_at = $updated_at;
        return $this;
    }
}
